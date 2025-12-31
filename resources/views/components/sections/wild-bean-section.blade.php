@props([
    'title' => 'Zatrzymaj się.<br/> Poczuj smak chwili.',
    'subtitle' => 'Oferta sezonowa Wild Bean Cafe',
    'drinks' => [],
    'footerTitle' => 'Czas na Twoją chwilę przyjemności.',
    'footerDescription' => 'Zatrzymaj się na chwilę w codziennym biegu i odkryj świat Wild Bean Moments – miejsce, gdzie każdy łyk staje się wyjątkowym doświadczeniem. To nie tylko aromatyczne kawy, ale także kolekcja sześciu kubków, które zamieniają gorący napój w podróż pełną emocji. Każdy wzór to inna opowieść – razem tworzą świat, w którym liczy się nie tylko cel, ale i droga. Kubki dostępne na wybranych stacjach. Zdjęcie poglądowe.',
    'footerImage' => 'images/kawa-hotdog.png',
    'footerImageAlt' => 'Wild Bean Cafe kubki',
    'footerButtonText' => 'Znajdź najbliższą stację',
    'footerButtonUrl' => '#',
])

<section class="w-full py-12 md:py-16 lg:py-20 bg-promotion-bg">
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
            <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <!-- Left Side: Coffee Cups Image -->
                <div class="flex-shrink-0 w-full lg:w-auto">
                    <div class="h-48 lg:h-64 flex items-center justify-center">
                        <img
                            src="{{ asset($footerImage) }}"
                            alt="{{ $footerImageAlt }}"
                            class="max-h-full max-w-full object-contain"
                        />
                    </div>
                </div>

                <!-- Right Side: Text and Button -->
                <div class="flex-1 text-left space-y-6">
                    <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-wild-bean-dark">
                        {{ $footerTitle }}
                    </h3>
                    <p class="font-roboto text-base sm:text-lg text-gray-900 leading-relaxed">
                        {{ $footerDescription }}
                    </p>
                    <div>
                        <a
                            href="{{ $footerButtonUrl }}"
                            class="inline-block px-6 py-3 rounded-[20px] font-semibold text-lg bg-promotion-green text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            {{ $footerButtonText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
