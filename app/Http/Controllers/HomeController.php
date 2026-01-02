<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\View\View;

final class HomeController extends Controller
{
    public function index(): View
    {
        $steps = [
            'Zatankuj na <a href="#" class="font-bold underline" style="color: #963E3E;">najbliższej stacji bp</a> min. 10 litrów paliwa w czasie trwania promocji, korzystając z aplikacji BPme.',
            '<a href="#" class="font-bold underline" style="color: #963E3E;">Zarejestruj się</a> na tej stronie z kodem z aplikacji i zagraj w grę Wild Jump.',
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
                'description' => '150 000 punktów BPme (równowartość 1500 zł)',
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

        $dailyRanking = [
            ['place' => 1, 'name' => 'Piotr Wiśniewski', 'score' => 34836, 'datetime' => '07:22:51 30.12.2025'],
            ['place' => 2, 'name' => 'Barbara Mazur', 'score' => 32541, 'datetime' => '08:15:23 30.12.2025'],
            ['place' => 3, 'name' => 'Jan Kowalski', 'score' => 31245, 'datetime' => '09:30:12 30.12.2025'],
            ['place' => 4, 'name' => 'Anna Nowak', 'score' => 29876, 'datetime' => '10:45:34 30.12.2025'],
            ['place' => 5, 'name' => 'Marek Zieliński', 'score' => 28543, 'datetime' => '11:20:15 30.12.2025'],
            ['place' => 6, 'name' => 'Katarzyna Wójcik', 'score' => 27210, 'datetime' => '12:10:45 30.12.2025'],
            ['place' => 7, 'name' => 'Tomasz Krawczyk', 'score' => 25987, 'datetime' => '13:25:30 30.12.2025'],
            ['place' => 8, 'name' => 'Magdalena Lewandowska', 'score' => 24765, 'datetime' => '14:40:22 30.12.2025'],
            ['place' => 9, 'name' => 'Paweł Szymański', 'score' => 23542, 'datetime' => '15:55:10 30.12.2025'],
            ['place' => 10, 'name' => 'Aleksandra Dąbrowska', 'score' => 22319, 'datetime' => '16:30:55 30.12.2025'],
        ];

        $mainRanking = [
            ['place' => 1, 'name' => 'Michał Wiśniewski', 'score' => 125436, 'datetime' => '10:15:30 25.12.2025'],
            ['place' => 2, 'name' => 'Ewa Kowalczyk', 'score' => 118542, 'datetime' => '14:22:45 26.12.2025'],
            ['place' => 3, 'name' => 'Robert Nowak', 'score' => 112389, 'datetime' => '09:30:12 27.12.2025'],
            ['place' => 4, 'name' => 'Joanna Zielińska', 'score' => 106754, 'datetime' => '11:45:20 28.12.2025'],
            ['place' => 5, 'name' => 'Krzysztof Wójcik', 'score' => 101298, 'datetime' => '16:20:35 29.12.2025'],
            ['place' => 6, 'name' => 'Monika Krawczyk', 'score' => 95876, 'datetime' => '08:10:15 30.12.2025'],
            ['place' => 7, 'name' => 'Dariusz Lewandowski', 'score' => 90432, 'datetime' => '12:35:50 30.12.2025'],
            ['place' => 8, 'name' => 'Natalia Szymańska', 'score' => 85109, 'datetime' => '15:50:25 30.12.2025'],
            ['place' => 9, 'name' => 'Łukasz Dąbrowski', 'score' => 79865, 'datetime' => '13:25:40 30.12.2025'],
            ['place' => 10, 'name' => 'Sylwia Kozłowska', 'score' => 74621, 'datetime' => '17:05:18 30.12.2025'],
        ];

        return view('home', [
            'steps' => $steps,
            'rewards' => $rewards,
            'drinks' => $drinks,
            'dailyRanking' => $dailyRanking,
            'mainRanking' => $mainRanking,
        ]);
    }
}
