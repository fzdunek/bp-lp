@props([
    'headline' => 'Zatrzymaj moment,<br>zagraj i zgarnij nagrody!',
    'paragraph1' => 'Wyobraź sobie, że w trasie zjeżdżasz na bp, prosisz baristę o ulubioną kawę z ziarnami intenso lub tę, która tworzy tę taką piękną, delikatną piankę - crema. To idealny moment na chwilę odpoczynku.',
    'paragraph2' => 'A co, jeśli powiemy Ci, że w tym wspaniałym momencie relaksu możesz zagrać o punkty BPme, kawę lub hot-doga za 1 grosz, a nawet 1500 zł w postaci punktów?',
    'ctaText' => 'Chcę zagrać!',
    'ctaLink' => '#graj',
    'backgroundImage' => 'images/hero-bg.png',
    'backgroundImageAlt' => 'Zimowa scena z BP stacją i łyżwiarzem',
])

<section class="relative w-full overflow-hidden">
    <div class="relative z-10 w-full flex items-start justify-center pt-12 md:pt-16 lg:pt-20">
        <div class="w-full max-w-4xl mx-auto px-4 sm:px-8 pt-6 md:pt-8 lg:pt-10">
            <div class="flex justify-center">
                <div class="w-full text-center space-y-6 md:space-y-8">
                    <!-- Headline -->
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-cream">
                        {!! $headline !!}
                    </h1>

                    <!-- Paragraph 1 -->
                    <p class="font-roboto text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-cream">
                        {{ $paragraph1 }}
                    </p>

                    <!-- Paragraph 2 -->
                    <p class="font-roboto text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-cream">
                        {{ $paragraph2 }}
                    </p>

                    <!-- CTA Button -->
                    <div class="pt-4">
                        <a
                            href="{{ $ctaLink }}"
                            class="inline-block px-10 py-4 rounded-full font-bold text-lg bg-bp-green text-cream transition-all duration-300 hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            {{ $ctaText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Background Image -->
    <div class="-mt-8 md:-mt-16 lg:-mt-24 xl:-mt-32 bottom-0 left-0 right-0 w-full z-0">
        <img
            src="{{ asset($backgroundImage) }}"
            alt="{{ $backgroundImageAlt }}"
            class="w-full object-cover object-bottom"
        />
    </div>
</section>
