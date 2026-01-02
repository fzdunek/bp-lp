@props([
    'dailyRanking' => [],
    'mainRanking' => [],
])

<div class="w-full py-12 md:py-16 lg:py-20" x-data="{ activeTab: 'daily' }">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12 text-ranking-title">
            Ranking
        </h2>

        <!-- Tabs and Table Container -->
        <div class="relative">
            <!-- Left Cloud -->
            <div class="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 z-0">
                <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 60C40 45 50 35 65 35C75 25 90 20 105 30C115 25 130 25 140 35C155 35 165 50 155 60C170 60 180 75 170 90C180 100 175 115 160 115C150 125 135 125 125 115C115 125 100 125 90 115C75 125 60 115 50 100C35 100 25 85 35 70C25 60 35 50 40 60Z"
                          stroke="#8B4513"
                          stroke-width="2.5"
                          fill="none"
                          opacity="0.7"/>
                </svg>
            </div>

            <!-- Right Cloud -->
            <div class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 z-0">
                <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 60C40 45 50 35 65 35C75 25 90 20 105 30C115 25 130 25 140 35C155 35 165 50 155 60C170 60 180 75 170 90C180 100 175 115 160 115C150 125 135 125 125 115C115 125 100 125 90 115C75 125 60 115 50 100C35 100 25 85 35 70C25 60 35 50 40 60Z"
                          stroke="#8B4513"
                          stroke-width="2.5"
                          fill="none"
                          opacity="0.7"/>
                </svg>
            </div>

            <!-- Tabs and Table Container -->
            <div class="relative z-10 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <!-- Tabs -->
                <div class="flex w-full">
                    <!-- Daily Ranking Tab -->
                    <button
                        @click="activeTab = 'daily'"
                        :class="activeTab === 'daily' ? 'bg-ranking-active text-white' : 'bg-white text-gray-800'"
                        class="flex-1 px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg transition-all duration-300 relative rounded-tl-[20px]"
                    >
                        Ranking Dzienny
                        <span x-show="activeTab !== 'daily'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></span>
                    </button>

                    <!-- Main Ranking Tab -->
                    <button
                        @click="activeTab = 'main'"
                        :class="activeTab === 'main' ? 'bg-ranking-active text-white' : 'bg-white text-gray-800'"
                        class="flex-1 px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg transition-all duration-300 relative rounded-tr-[20px]"
                    >
                        Ranking Główny
                        <span x-show="activeTab !== 'main'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></span>
                    </button>
                </div>

                <!-- Table Container -->
                <div class="bg-white rounded-b-[20px] overflow-hidden">
                <!-- Daily Ranking Table -->
                <div x-show="activeTab === 'daily'" x-transition class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-white">
                                <th class="px-4 md:px-6 py-4 text-left text-gray-900 font-semibold text-sm md:text-base">Miejsce</th>
                                <th class="px-4 md:px-6 py-4 text-left text-gray-900 font-semibold text-sm md:text-base">Nazwa</th>
                                <th class="px-4 md:px-6 py-4 text-right text-gray-900 font-semibold text-sm md:text-base">Wynik</th>
                                <th class="px-4 md:px-6 py-4 text-right text-gray-900 font-semibold text-sm md:text-base">Godzina i data</th>
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
                                    <td class="px-4 md:px-6 py-4 text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['name'] ?? 'Brak danych' }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                        {{ number_format($entry['score'] ?? 0, 0, ',', ' ') }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['datetime'] ?? 'Brak danych' }}
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
                                        <td class="px-4 md:px-6 py-4 text-gray-900 font-medium text-sm md:text-base">
                                            Przykładowa nazwa
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                            0
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                            --:--:-- --.--.----
                                        </td>
                                    </tr>
                                @endfor
                            @endforelse
                        </tbody>
                    </table>
                </div>

                <!-- Main Ranking Table -->
                <div x-show="activeTab === 'main'" x-transition class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-white">
                                <th class="px-4 md:px-6 py-4 text-left text-gray-900 font-semibold text-sm md:text-base">Miejsce</th>
                                <th class="px-4 md:px-6 py-4 text-left text-gray-900 font-semibold text-sm md:text-base">Nazwa</th>
                                <th class="px-4 md:px-6 py-4 text-right text-gray-900 font-semibold text-sm md:text-base">Wynik</th>
                                <th class="px-4 md:px-6 py-4 text-right text-gray-900 font-semibold text-sm md:text-base">Godzina i data</th>
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
                                    <td class="px-4 md:px-6 py-4 text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['name'] ?? 'Brak danych' }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                        {{ number_format($entry['score'] ?? 0, 0, ',', ' ') }}
                                    </td>
                                    <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                        {{ $entry['datetime'] ?? 'Brak danych' }}
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
                                        <td class="px-4 md:px-6 py-4 text-gray-900 font-medium text-sm md:text-base">
                                            Przykładowa nazwa
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                            0
                                        </td>
                                        <td class="px-4 md:px-6 py-4 text-right text-gray-900 font-medium text-sm md:text-base">
                                            --:--:-- --.--.----
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
