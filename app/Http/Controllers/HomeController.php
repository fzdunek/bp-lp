<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Score;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

final class HomeController extends Controller
{
    public function index(): View
    {
        $steps = [
            'Zatankuj na <a href="#" class="font-bold underline" style="color: #963E3E;">najbliższej stacji bp</a> min. 10 litrów paliwa w czasie trwania promocji, korzystając z aplikacji BPme.',
            '<a href="/register" class="font-bold underline" style="color: #963E3E;">Zarejestruj się</a> na tej stronie z kodem z aplikacji i zagraj w grę Wild Jump.',
            'Odbierz nagrodę gwarantowaną i walcz o nagrody rankingowe.',
        ];

        $rewards = [
            [
                'illustration' => 'images/100pkt.png',
                'illustrationAlt' => '100 punktów BPme',
                'title' => 'Nagroda gwarantowana',
                'description' => '100 punktów BPme',
                'condition' => 'Zakup na stacji 10 l paliwa, rejestracja na stronie i choć jedna rozgrywka w grę',
            ],
            [
                'illustration' => 'images/kawa-hotdog.png',
                'illustrationAlt' => 'Kupon na kawę lub hot doga',
                'title' => 'Nagroda codzienna',
                'description' => 'Kupon na Kawę / Hot doga za 1 grosz',
                'condition' => 'Pozycja top 100 w rankingu dziennnym',
            ],
            [
                'illustration' => 'images/price3.png',
                'illustrationAlt' => '150 000 punktów BPme',
                'title' => 'Nagroda główna',
                'description' => '150 000 punktów BPme <br/><small>(równowartość 1500 zł)</small>',
                'condition' => '1 miejsce w rankingu głównym',
            ],
        ];

        $drinks = [
            [
                'name' => 'Latte Karmelowe Jabłko',
                'volume' => '400 ml',
                'price' => '16,99 zł',
                'image' => 'images/kawa.jpg',
            ],
            [
                'name' => 'Latte Tiramisu',
                'volume' => '400 ml',
                'price' => '16,99 zł',
                'image' => 'images/kawa.jpg',
            ],
            [
                'name' => 'Latte Karmelowe',
                'volume' => '400 ml',
                'price' => '16,99 zł',
                'image' => 'images/kawa.jpg',
            ],
            [
                'name' => 'Kawa Mocha',
                'volume' => '400 ml',
                'price' => '16,99 zł',
                'image' => 'images/kawa.jpg',
            ],
            [
                'name' => 'Napój czekoladowy Tiramisu',
                'volume' => '400 ml',
                'price' => '10,99 zł',
                'image' => 'images/kawa.jpg',
            ],
            [
                'name' => 'Herbata Owoce Leśne',
                'volume' => '340 ml',
                'price' => '8,99 zł',
                'image' => 'images/kawa.jpg',
            ],
        ];

        // Daily ranking - najlepsze wyniki z aktualnego dnia (jeden wynik na gracza)
        $dailyRanking = Score::select('scores.user_id', 'users.name', DB::raw('MAX(scores.result) as max_result'), DB::raw('MAX(scores.end_timestamp) as latest_timestamp'))
            ->join('users', 'scores.user_id', '=', 'users.id')
            ->whereDate('scores.end_timestamp', Carbon::today())
            ->whereNotNull('scores.result')
            ->groupBy('scores.user_id', 'users.name')
            ->orderByDesc('max_result')
            ->limit(100)
            ->get()
            ->map(function ($item, $index) {
                return [
                    'place' => $index + 1,
                    'name' => $item->name,
                    'score' => $item->max_result,
                    'datetime' => Carbon::parse($item->latest_timestamp)->format('H:i:s d.m.Y'),
                ];
            })
            ->toArray();

        // Main ranking - najlepsze wyniki z całej tabeli (jeden wynik na gracza)
        $mainRanking = Score::select('scores.user_id', 'users.name', DB::raw('MAX(scores.result) as max_result'), DB::raw('MAX(scores.end_timestamp) as latest_timestamp'))
            ->join('users', 'scores.user_id', '=', 'users.id')
            ->whereNotNull('scores.result')
            ->groupBy('scores.user_id', 'users.name')
            ->orderByDesc('max_result')
            ->limit(100)
            ->get()
            ->map(function ($item, $index) {
                return [
                    'place' => $index + 1,
                    'name' => $item->name,
                    'score' => $item->max_result,
                    'datetime' => Carbon::parse($item->latest_timestamp)->format('H:i:s d.m.Y'),
                ];
            })
            ->toArray();

        return view('home', [
            'steps' => $steps,
            'rewards' => $rewards,
            'drinks' => $drinks,
            'dailyRanking' => $dailyRanking,
            'mainRanking' => $mainRanking,
        ]);
    }
}
