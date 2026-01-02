@props([
    'title' => 'Nagrody',
    'rewards' => [],
])

<section id="nagrody" class="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
    <!-- Cloud 1 - Top Right -->
    <div class="absolute top-10 right-8 md:right-16 lg:right-24 z-0 hidden md:block">
        <img src="{{ asset('images/chmura_1 1.png') }}" alt="" class="w-24 md:w-32 lg:w-40 h-auto">
    </div>
    <!-- Cloud 2 - Middle Left -->
    <div class="absolute top-1/2 left-4 md:left-12 lg:left-20 z-0 -translate-y-1/2 hidden md:block">
        <img src="{{ asset('images/chmura_2 1.png') }}" alt="" class="w-20 md:w-28 lg:w-36 h-auto">
    </div>
    <!-- Cloud 3 - Bottom Center -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-0 hidden md:block">
        <img src="{{ asset('images/chmura_4 1.png') }}" alt="" class="w-22 md:w-30 lg:w-38 h-auto">
    </div>
    
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <h2 class="rewards-header mb-12 md:mb-16" data-aos="fade-up">
            {{ $title }}
        </h2>

        <!-- Rewards Grid -->
        @if(!empty($rewards))
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                @foreach($rewards as $index => $reward)
                    <div data-aos="fade-up" data-aos-delay="{{ ($index % 3) * 100 }}">
                        <x-ui.reward-box
                            :illustration="$reward['illustration'] ?? null"
                            :illustrationAlt="$reward['illustrationAlt'] ?? ''"
                            :title="$reward['title'] ?? ''"
                            :description="$reward['description'] ?? ''"
                            :condition="$reward['condition'] ?? ''"
                        />
                    </div>
                @endforeach
            </div>
        @endif
    </div>
</section>
