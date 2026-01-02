@props([
    'title' => 'Zatrzymaj się.<br/> Poczuj smak chwili.',
    'subtitle' => 'Oferta sezonowa Wild Bean Cafe',
    'drinks' => [],
    'footerTitle' => 'Czas na Twoją chwilę przyjemności.',
    'footerDescription' => 'Zatrzymaj się na chwilę w codziennym biegu i odkryj świat Wild Bean Moments – miejsce, gdzie każdy łyk staje się wyjątkowym doświadczeniem. To nie tylko aromatyczne kawy, ale także kolekcja sześciu kubków, które zamieniają gorący napój w podróż pełną emocji. Każdy wzór to inna opowieść – razem tworzą świat, w którym liczy się nie tylko cel, ale i droga.',
    'footerNote' => 'Kubki dostępne na wybranych stacjach. Zdjęcie poglądowe.',
    'footerImage' => 'images/kawy.png',
    'footerImageAlt' => 'Wild Bean Cafe kubki',
    'footerButtonText' => 'Znajdź najbliższą stację',
    'footerButtonUrl' => '#',
])

<section id="smaki-chwili" class="w-full py-12 md:py-16 lg:py-20 bg-promotion-bg">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center space-y-4 mb-12 md:mb-16">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-wild-bean-dark leading-tight">
                {!! $title !!}
            </h2>
            <p class="text-3xl font-bold text-wild-bean-dark leading-tight">
                {{ $subtitle }}
            </p>
        </div>

        <!-- Drink Cards Grid -->
        <div class="mb-12 md:mb-16">
            <x-ui.drinks-grid :drinks="$drinks" />
        </div>

        <!-- Footer Promotional Section -->
        <div class="bg-white rounded-[20px] shadow-md p-6 md:p-8 lg:p-10">
            <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                <!-- Image Section -->
                <div class="flex items-center justify-center">
                    <img
                        src="{{ asset($footerImage) }}"
                        alt="{{ $footerImageAlt }}"
                        class="max-h-full max-w-full object-contain"
                    />
                </div>

                <!-- Text Section -->
                <div class="flex-1 text-left space-y-4">
                    <h3 class="wild-bean-footer-header text-reward-value">
                        {{ $footerTitle }}
                    </h3>
                    <div class="space-y-2">
                        <p class="wild-bean-footer-text">
                            {{ $footerDescription }}
                        </p>
                        @if($footerNote)
                            <p class="wild-bean-footer-note text-reward-value">
                                {{ $footerNote }}
                            </p>
                        @endif
                    </div>
                </div>

                <!-- Button Section -->
                <div class="flex items-center justify-center">
                    <a
                        href="{{ $footerButtonUrl }}"
                        class="wild-bean-footer-button"
                    >
                        {{ $footerButtonText }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
