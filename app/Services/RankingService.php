<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Score;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

final class RankingService
{
    /**
     * Pobiera ranking dzienny dla konkretnego dnia
     */
    public function getDailyRanking(Carbon $date, ?int $limit = null): array
    {
        $query = Score::select('scores.user_id', 'users.name', DB::raw('MAX(scores.result) as max_result'), DB::raw('MAX(scores.end_timestamp) as latest_timestamp'))
            ->join('users', 'scores.user_id', '=', 'users.id')
            ->whereDate('scores.end_timestamp', $date)
            ->whereNotNull('scores.result')
            ->groupBy('scores.user_id', 'users.name')
            ->orderByDesc('max_result');

        if ($limit !== null) {
            $query->limit($limit);
        }

        return $query->get()
            ->map(function ($item, $index) {
                return [
                    'place' => $index + 1,
                    'name' => $item->name,
                    'bpme_card_number' => $item->bpme_card_number,
                    'score' => $item->max_result,
                    'datetime' => Carbon::parse($item->latest_timestamp)->format('H:i:s d.m.Y'),
                ];
            })
            ->toArray();
    }

    /**
     * Pobiera ranking dzienny z cache (dla aktualnego dnia)
     */
    public function getCachedDailyRanking(int $limit = 100): array
    {
        return Cache::remember('daily_ranking', 60, function () use ($limit) {
            return $this->getDailyRanking(Carbon::today(), $limit);
        });
    }

    /**
     * Pobiera ranking globalny (wszystkie wyniki)
     */
    public function getGlobalRanking(?int $limit = null): array
    {
        $query = Score::select('scores.user_id', 'users.name', DB::raw('MAX(scores.result) as max_result'), DB::raw('MAX(scores.end_timestamp) as latest_timestamp'))
            ->join('users', 'scores.user_id', '=', 'users.id')
            ->whereNotNull('scores.result')
            ->groupBy('scores.user_id', 'users.name')
            ->orderByDesc('max_result');

        if ($limit !== null) {
            $query->limit($limit);
        }

        return $query->get()
            ->map(function ($item, $index) {
                return [
                    'place' => $index + 1,
                    'name' => $item->name,
                    'bpme_card_number' => $item->bpme_card_number,
                    'score' => $item->max_result,
                    'datetime' => Carbon::parse($item->latest_timestamp)->format('H:i:s d.m.Y'),
                ];
            })
            ->toArray();
    }

    /**
     * Pobiera ranking globalny z cache
     */
    public function getCachedGlobalRanking(int $limit = 100): array
    {
        return Cache::remember('main_ranking', 60, function () use ($limit) {
            return $this->getGlobalRanking($limit);
        });
    }
}
