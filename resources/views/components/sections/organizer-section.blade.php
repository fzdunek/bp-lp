@props([
    'logo' => 'images/GoodGame_Logo 1.png',
    'companyName' => 'Good Game Sp. z o. o.',
    'email' => 'info@ggleague.pl',
])

<section class="relative w-full py-8 md:py-12 mt-12 overflow-hidden">
    <!-- Cloud 1 - Top Left -->
    <div class="absolute top-4 left-8 md:left-16 lg:left-24 z-0 hidden md:block">
        <img src="{{ asset('images/chmura_1 1.png') }}" alt="" class="w-18 md:w-24 lg:w-30 h-auto">
    </div>
    <!-- Cloud 2 - Left Side (lower) -->
    <div class="absolute top-16 md:top-20 lg:top-24 left-4 md:left-12 lg:left-20 z-0 hidden md:block">
        <img src="{{ asset('images/chmura_2 1.png') }}" alt="" class="w-16 md:w-22 lg:w-28 h-auto">
    </div>
    <!-- Cloud 3 - Top Right -->
    <div class="absolute top-8 right-12 md:right-20 lg:right-32 z-0 hidden md:block">
        <img src="{{ asset('images/chmura_4 1.png') }}" alt="" class="w-20 md:w-28 lg:w-36 h-auto">
    </div>
    
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div class="flex flex-col sm:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <!-- Logo - Left Side -->
            @if($logo)
                <div class="flex-shrink-0" data-aos="fade-right">
                    <img
                        src="{{ asset($logo) }}"
                        alt="{{ $companyName }}"
                        class="h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                </div>
            @endif

            <!-- Content - Right Side -->
            <div class="text-start" data-aos="fade-left" data-aos-delay="200">
                <!-- Title -->
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-ranking-title">
                    Organizator
                </h2>

                <!-- Company Name -->
                <p class="text-base md:text-lg text-ranking-title font-roboto mt-4">
                    Organizatorem konkursu jest {{ $companyName }}.
                </p>

                <!-- Email -->
                <p class="text-base md:text-lg text-ranking-title font-roboto mt-2">
                    e-mail: <a href="mailto:{{ $email }}" class="underline hover:opacity-80">{{ $email }}</a>
                </p>
            </div>
        </div>
    </div>
</section>
