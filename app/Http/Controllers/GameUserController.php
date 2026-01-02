<?php

namespace App\Http\Controllers;

use App\Models\Score;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GameUserController extends Controller
{
    public function __invoke(Request $request): Response
    {
        if ($request->user()) {
            $user = $request->user();

            return response($user->name, 200)
                ->header('Content-Type', 'text/plain');
        }

        return response('Anonimowy Gracz', 200)
            ->header('Content-Type', 'text/plain');
    }

    public function storeScore(Request $request): Response
    {
        $data = $request->json()->all();

        if (isset($data[0]) && is_string($data[0])) {
            $decoded = json_decode($data[0], true);
        } else {
            $decoded = $data;
        }

        $validated = validator($decoded, [
            'time' => ['required', 'string'],
            'time1' => ['required', 'string'],
            'result' => ['required', 'integer'],
        ])->validate();

        $user = $request->user();
        $result = (int) $validated['result'];

        $start = Carbon::createFromTimestampMs((int) $validated['time']);
        $end = Carbon::createFromTimestampMs((int) $validated['time1']);
        $now = now();

        // Weryfikacja: start timestamp nie może być z przyszłości
        if ($start->isFuture()) {
            return response('Nie kombinuj', 403)
                ->header('Content-Type', 'text/plain');
        }

        // Weryfikacja: time1 powinien być blisko aktualnego czasu serwera (tolerancja 10 sekund)
        // Zapobiega manipulacji timestampami z przeglądarki
        $timeDifference = abs($end->diffInSeconds($now));
        $maxTimeDifference = 10; // sekund

        if ($timeDifference > $maxTimeDifference) {
            return response('Nie kombinuj', 403)
                ->header('Content-Type', 'text/plain');
        }

        if (now()->greaterThan(Carbon::parse('2026-03-01 23:59:59'))) {
            return response('Wyzwanie już się zakończyło!', 401)
                ->header('Content-Type', 'text/plain');
        }

        if (! $user) {
            return response('Zaloguj się', 401)
                ->header('Content-Type', 'text/plain');
        }

        // Weryfikacja: minimalny czas między requestami (5 sekund)
        // Zapobiega spamowaniu wynikami
        $lastScore = Score::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->first();

        if ($lastScore && $lastScore->created_at->diffInSeconds($now) < 5) {
            return response('Nie kombinuj', 403)
                ->header('Content-Type', 'text/plain');
        }

        $durationMs = $start->diffInMilliseconds($end);
        $durationSeconds = $durationMs / 1000;

        // Weryfikacja: maksymalny czas gry (30 minut) - zapobiega nierealistycznie długim grom
        $maxGameDuration = 30 * 60; // 30 minut w sekundach
        if ($durationSeconds > $maxGameDuration) {
            return response('Nie kombinuj', 403)
                ->header('Content-Type', 'text/plain');
        }

        // Weryfikacja: maksymalnie 450 punktów na sekundę
        // Na podstawie przykładowych wyników:
        // - 857 pkt/5.094s = 168 pkt/s
        // - 6044 pkt/17.325s = 349 pkt/s
        // - 664 pkt/4.491s = 148 pkt/s
        // - 1840 pkt/5.643s = 326 pkt/s
        // - 1120 pkt/4.834s = 232 pkt/s
        // - 424 pkt/3.044s = 139 pkt/s
        // - 5190 pkt/19.227s = 270 pkt/s
        // - 1863 pkt/8.838s = 211 pkt/s
        // - 1770 pkt/9.250s = 191 pkt/s
        // - 279 pkt/2.411s = 116 pkt/s
        // - 1862 pkt/7.877s = 236 pkt/s
        // - 1849 pkt/5.868s = 315 pkt/s
        // - 10023 pkt/23.300s = 430 pkt/s (najwyższy)
        $maxPointsPerSecond = 500;
        $pointsPerSecond = $durationSeconds > 0 ? $result / $durationSeconds : 0;

        if ($pointsPerSecond > $maxPointsPerSecond) {
            return response('Nie kombinuj', 403)
                ->header('Content-Type', 'text/plain');
        }

        // Weryfikacja: wykrywanie spowalniania gry przez rozszerzenia przeglądarki
        // Dla długich gier (5+ minut) z wysokimi wynikami, tempo punktów nie może być zbyt niskie
        // Jeśli ktoś spowalnia grę, czas będzie długi, ale tempo będzie nienaturalnie niskie
        if ($durationSeconds >= 300) { // 5 minut lub więcej
            // Dla długich gier z wysokimi wynikami (3000+), minimalne tempo to 50 pkt/s
            // To wykryje spowalnianie - normalne tempo to 148-349 pkt/s
            if ($result >= 3000 && $pointsPerSecond < 50) {
                return response('Nie kombinuj', 403)
                    ->header('Content-Type', 'text/plain');
            }
        }

        if ($durationSeconds < 2) {
            return response('Nie kombinuj', 403)
                ->header('Content-Type', 'text/plain');
        }

        Score::create([
            'user_id' => $user->id,
            'result' => $result,
            'start_timestamp' => $start,
            'end_timestamp' => $end,
            'duration_ms' => $durationMs,
        ]);

        if ($result > $user->highscore) {
            $user->highscore = $result;
            $user->save();
        }

        return response('Wynik zapisano poprawnie!', 200)
            ->header('Content-Type', 'text/plain');
    }
}
