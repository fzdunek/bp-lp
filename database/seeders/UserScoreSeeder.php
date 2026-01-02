<?php

namespace Database\Seeders;

use App\Models\Score;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Polskie imiona i nazwiska dla realistycznych danych testowych
        $names = [
            'Jan Kowalski',
            'Anna Nowak',
            'Piotr Wiśniewski',
            'Maria Wójcik',
            'Tomasz Kowalczyk',
            'Katarzyna Zielińska',
            'Marcin Szymański',
            'Agnieszka Woźniak',
            'Krzysztof Kozłowski',
            'Magdalena Jankowska',
            'Paweł Mazur',
            'Joanna Kwiatkowska',
            'Michał Krawczyk',
            'Ewa Kaczmarek',
            'Jakub Piotrowski',
            'Aleksandra Grabowski',
            'Bartosz Nowakowski',
            'Natalia Pawłowski',
            'Łukasz Michalski',
            'Karolina Nowicki',
            'Marek Adamczyk',
            'Monika Duda',
            'Wojciech Zając',
            'Sylwia Wieczorek',
            'Rafał Jabłoński',
            'Patrycja Król',
            'Dawid Majewski',
            'Weronika Olszewski',
            'Marcin Jaworski',
            'Dominika Wróbel',
        ];

        $users = [];

        // Tworzenie użytkowników
        foreach ($names as $index => $name) {
            $email = strtolower(str_replace(' ', '.', $name)).'@example.com';

            $user = User::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make('password'),
                'bpme_card_number' => 'BP'.str_pad((string) ($index + 1), 8, '0', STR_PAD_LEFT),
                'highscore' => 0,
            ]);

            $users[] = $user;
        }

        // Generowanie wyników dla każdego użytkownika
        foreach ($users as $userIndex => $user) {
            $scoresCount = rand(3, 8); // Każdy użytkownik ma 3-8 wyników

            // Upewniamy się, że najlepszy wynik jest różny dla każdego użytkownika
            // aby ranking był bardziej zróżnicowany
            $baseHighScore = 5000 + ($userIndex * 200); // Od 5000 do ~11000

            $bestScore = 0;
            $bestScoreDate = null;

            for ($i = 0; $i < $scoresCount; $i++) {
                // Losowanie daty - część wyników z dzisiaj, część z poprzednich dni
                $daysAgo = rand(0, 14); // Ostatnie 14 dni
                $baseDate = Carbon::now()->subDays($daysAgo);

                // Losowanie czasu w ciągu dnia
                $hour = rand(8, 22);
                $minute = rand(0, 59);
                $second = rand(0, 59);

                $endTimestamp = $baseDate->copy()->setTime($hour, $minute, $second);

                // Dla najlepszego wyniku użytkownika, ustawiamy wyższy wynik
                if ($i === 0) {
                    // Pierwszy wynik to najlepszy dla tego użytkownika
                    $result = $baseHighScore + rand(0, 500);
                    // Losowanie tempa punktów (100-450 pkt/s)
                    $pointsPerSecond = rand(100, 450);
                    // Obliczenie czasu trwania na podstawie wyniku i tempa
                    $durationSeconds = (int) ($result / $pointsPerSecond);
                    // Upewniamy się, że czas trwania jest w dozwolonym zakresie
                    if ($durationSeconds < 2) {
                        $durationSeconds = 2;
                        $result = (int) ($durationSeconds * $pointsPerSecond);
                    }
                    if ($durationSeconds > 25 * 60) {
                        $durationSeconds = 25 * 60;
                        $result = (int) ($durationSeconds * $pointsPerSecond);
                    }
                } else {
                    // Pozostałe wyniki są losowe, ale niższe niż najlepszy
                    $result = rand(200, (int) ($baseHighScore * 0.9));
                    // Losowanie tempa punktów (100-450 pkt/s)
                    $pointsPerSecond = rand(100, 450);
                    // Obliczenie czasu trwania
                    $durationSeconds = (int) ($result / $pointsPerSecond);
                    // Upewniamy się, że czas trwania jest w dozwolonym zakresie
                    if ($durationSeconds < 2) {
                        $durationSeconds = 2;
                        $result = (int) ($durationSeconds * $pointsPerSecond);
                    }
                    if ($durationSeconds > 25 * 60) {
                        $durationSeconds = 25 * 60;
                        $result = (int) ($durationSeconds * $pointsPerSecond);
                    }
                }

                $durationMs = $durationSeconds * 1000;
                $startTimestamp = $endTimestamp->copy()->subSeconds($durationSeconds);

                // Tworzenie wyniku
                $score = Score::create([
                    'user_id' => $user->id,
                    'result' => $result,
                    'start_timestamp' => $startTimestamp,
                    'end_timestamp' => $endTimestamp,
                    'duration_ms' => $durationMs,
                ]);

                // Śledzenie najlepszego wyniku
                if ($result > $bestScore) {
                    $bestScore = $result;
                    $bestScoreDate = $endTimestamp;
                }
            }

            // Aktualizacja highscore użytkownika
            $user->highscore = $bestScore;
            $user->save();
        }

        $this->command->info('Utworzono '.count($users).' użytkowników z wynikami!');
    }
}
