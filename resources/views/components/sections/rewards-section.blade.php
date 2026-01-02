@props([
    'title' => 'Nagrody',
    'rewards' => [],
])

<section id="nagrody" class="w-full py-12 md:py-16 lg:py-20">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <h2 class="rewards-header mb-12 md:mb-16">
            {{ $title }}
        </h2>

        <!-- Rewards Grid -->
        @if(!empty($rewards))
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                @foreach($rewards as $reward)
                    <x-ui.reward-box
                        :illustration="$reward['illustration'] ?? null"
                        :illustrationAlt="$reward['illustrationAlt'] ?? ''"
                        :title="$reward['title'] ?? ''"
                        :description="$reward['description'] ?? ''"
                        :condition="$reward['condition'] ?? ''"
                    />
                @endforeach
            </div>
        @endif
    </div>
</section>
