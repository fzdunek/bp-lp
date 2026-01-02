<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\RankingService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class RankingController extends Controller
{
    public function __construct(
        private readonly RankingService $rankingService
    ) {}

    public function index(Request $request): JsonResponse
    {
        // Weryfikacja klucza API
        $apiKey = $request->query('api_key') ?? $request->header('X-API-Key') ?? $request->bearerToken();
        $expectedApiKey = config('services.ranking.api_key');

        if (empty($expectedApiKey)) {
            return response()->json([
                'error' => 'API key nie jest skonfigurowany',
            ], 500);
        }

        if ($apiKey !== $expectedApiKey) {
            return response()->json([
                'error' => 'Nieprawidłowy klucz API',
            ], 401);
        }

        $date = $request->query('date');

        if ($date) {
            // Ranking dzienny dla konkretnego dnia
            try {
                $targetDate = Carbon::parse($date);
            } catch (\Exception $e) {
                return response()->json([
                    'error' => 'Nieprawidłowy format daty. Użyj formatu Y-m-d (np. 2026-01-15)',
                ], 400);
            }

            $ranking = $this->rankingService->getDailyRanking($targetDate);

            return response()->json([
                'type' => 'daily',
                'date' => $targetDate->format('Y-m-d'),
                'ranking' => $ranking,
                'total' => count($ranking),
            ]);
        }

        // Ranking globalny (wszystkie wyniki)
        $ranking = $this->rankingService->getGlobalRanking();

        return response()->json([
            'type' => 'global',
            'ranking' => $ranking,
            'total' => count($ranking),
        ]);
    }
}
