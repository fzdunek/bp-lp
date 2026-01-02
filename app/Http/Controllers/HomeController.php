<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\RankingService;
use Illuminate\View\View;

final class HomeController extends Controller
{
    public function __construct(
        private readonly RankingService $rankingService
    ) {}

    public function index(): View
    {
        $dailyRanking = $this->rankingService->getCachedDailyRanking(100);
        $mainRanking = $this->rankingService->getCachedGlobalRanking(100);

        return view('home', [
            'steps' => __('home.steps'),
            'rewards' => __('home.rewards'),
            'drinks' => __('home.drinks'),
            'dailyRanking' => $dailyRanking,
            'mainRanking' => $mainRanking,
        ]);
    }
}
