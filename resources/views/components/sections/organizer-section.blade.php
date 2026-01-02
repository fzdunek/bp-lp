@props([
    'logo' => 'images/GoodGame_Logo 1.png',
    'companyName' => 'Good Game Sp. z o. o.',
    'email' => 'info@ggleague.pl',
])

<section class="w-full py-8 md:py-12 mt-12">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div class="flex flex-col sm:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <!-- Logo - Left Side -->
            @if($logo)
                <div class="flex-shrink-0">
                    <img
                        src="{{ asset($logo) }}"
                        alt="{{ $companyName }}"
                        class="h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                </div>
            @endif

            <!-- Content - Right Side -->
            <div class="text-start">
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
