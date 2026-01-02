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
        $end = Carbon::now();

        if (now()->greaterThan(Carbon::parse('2026-03-01 23:59:59'))) {
            return response('Wyzwanie już się zakończyło!', 401)
                ->header('Content-Type', 'text/plain');
        }

        if (! $user) {
            return response('Zaloguj się', 401)
                ->header('Content-Type', 'text/plain');
        }

        Score::create([
            'user_id' => $user->id,
            'result' => $result,
            'start_timestamp' => $start,
            'end_timestamp' => $end,
            'duration_ms' => $start->diffInMilliseconds($end),
        ]);

        if ($result > $user->highscore) {
            $user->highscore = $result;
            $user->save();
        }

        return response('Wynik zapisano poprawnie!', 200)
            ->header('Content-Type', 'text/plain');
    }
}
