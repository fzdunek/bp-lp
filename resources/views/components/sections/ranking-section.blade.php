@props([
    'dailyRanking' => [],
    'mainRanking' => [],
])

<div class="w-full py-12 md:py-16 lg:py-20" x-data="{ activeTab: 'daily' }">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12 text-ranking-title">
            Ranking
        </h2>

        <div class="relative">
            <div class="hidden lg:block absolute -left-[140px] top-1/2 -translate-y-1/2 -translate-x-1/4 z-0">
                <img src="{{ asset('images/chmura_2 1.png') }}" alt="" class="w-16 md:w-22 lg:w-28 h-auto">
            </div>

            <div class="hidden lg:block absolute -right-[100px] top-[200px] -translate-y-1/2 translate-x-1/4 z-0">
                <img src="{{ asset('images/chmura_1 1.png') }}" alt="" class="w-16 md:w-22 lg:w-28 h-auto">
            </div>

            <div class="relative z-10 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div class="flex w-full">
                    <button
                        @click="activeTab = 'daily'"
                        :class="activeTab === 'daily' ? 'bg-ranking-active text-white' : 'bg-white text-gray-800'"
                        class="flex-1 px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg transition-all duration-300 relative rounded-tl-[20px]"
                    >
                        Ranking Dzienny
                        <span x-show="activeTab !== 'daily'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></span>
                    </button>

                    <button
                        @click="activeTab = 'main'"
                        :class="activeTab === 'main' ? 'bg-ranking-active text-white' : 'bg-white text-gray-800'"
                        class="flex-1 px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg transition-all duration-300 relative rounded-tr-[20px]"
                    >
                        Ranking Główny
                        <span x-show="activeTab !== 'main'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></span>
                    </button>
                </div>

                <div class="bg-white rounded-b-[20px] overflow-hidden">
                <div x-show="activeTab === 'daily'" x-transition class="max-h-[850px] overflow-y-auto overflow-x-auto">
                    <table class="w-full">
                        <thead class="sticky top-0 z-10 bg-white">
                            <tr class="bg-white">
                                <th class="px-4 md:px-6 py-4 text-center text-gray-900 font-semibold text-sm md:text-base">Miejsce</th>
                                <th class="px-4 md:px-6 py-4 text-start text-gray-900 font-semibold text-sm md:text-base">Nazwa</th>
                                <th class="px-4 md:px-6 py-4 text-start text-gray-900 font-semibold text-sm md:text-base">Godzina i data</th>
                                <th class="px-4 md:px-6 py-4 text-center text-gray-900 font-semibold text-sm md:text-base">Wynik</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($dailyRanking as $index => $entry)
                                <tr class="{{ $index % 2 === 0 ? 'bg-ranking-row-odd' : 'bg-ranking-row-even' }}">
                                    <td class="px-4 md:px-6 py-4 text-center">
                                        <span class="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-ranking-badge text-white font-bold text-sm md:text-base">
                                            {{ $entry['place'] ?? $index + 1 }}
                                        </span>
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['name'] ?? 'Brak danych' }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['datetime'] ?? 'Brak danych' }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-center text-gray-900 font-medium text-sm md:text-base">
                                        {{ number_format($entry['score'] ?? 0, 0, ',', ' ') }}
                                    </td>
                                </tr>
                            @empty
                                @for($i = 1; $i <= 10; $i++)
                                    <tr class="{{ $i % 2 === 0 ? 'bg-ranking-row-odd' : 'bg-ranking-row-even' }}">
                                        <td class="px-4 md:px-6 py-4 text-center">
                                            <span class="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-ranking-badge text-white font-bold text-sm md:text-base">
                                                {{ $i }}
                                            </span>
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                            Przykładowa nazwa
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                            --:--:-- --.--.----
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-center text-gray-900 font-medium text-sm md:text-base">
                                            0
                                        </td>
                                    </tr>
                                @endfor
                            @endforelse
                        </tbody>
                    </table>
                </div>

                <div x-show="activeTab === 'main'" x-transition class="max-h-[850px] overflow-y-auto overflow-x-auto">
                    <table class="w-full">
                        <thead class="sticky top-0 z-10 bg-white">
                            <tr class="bg-white">
                                <th class="px-4 md:px-6 py-4 text-center text-gray-900 font-semibold text-sm md:text-base">Miejsce</th>
                                <th class="px-4 md:px-6 py-4 text-start text-gray-900 font-semibold text-sm md:text-base">Nazwa</th>
                                <th class="px-4 md:px-6 py-4 text-start text-gray-900 font-semibold text-sm md:text-base">Godzina i data</th>
                                <th class="px-4 md:px-6 py-4 text-center text-gray-900 font-semibold text-sm md:text-base">Wynik</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($mainRanking as $index => $entry)
                                <tr class="{{ $index % 2 === 0 ? 'bg-ranking-row-odd' : 'bg-ranking-row-even' }}">
                                    <td class="px-4 md:px-6 py-4 text-center">
                                        <span class="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-ranking-badge text-white font-bold text-sm md:text-base">
                                            {{ $entry['place'] ?? $index + 1 }}
                                        </span>
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['name'] ?? 'Brak danych' }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['datetime'] ?? 'Brak danych' }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-center text-gray-900 font-medium text-sm md:text-base">
                                        {{ number_format($entry['score'] ?? 0, 0, ',', ' ') }}
                                    </td>
                                </tr>
                            @empty
                                @for($i = 1; $i <= 10; $i++)
                                    <tr class="{{ $i % 2 === 0 ? 'bg-ranking-row-odd' : 'bg-ranking-row-even' }}">
                                        <td class="px-4 md:px-6 py-4 text-center">
                                            <span class="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-ranking-badge text-white font-bold text-sm md:text-base">
                                                {{ $i }}
                                            </span>
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                            Przykładowa nazwa
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-start text-gray-900 font-medium text-sm md:text-base">
                                            --:--:-- --.--.----
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-center text-gray-900 font-medium text-sm md:text-base">
                                            0
                                        </td>
                                    </tr>
                                @endfor
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
