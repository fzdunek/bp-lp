@props([
    'title' => 'Chwyć moment - zagraj',
    'description' => 'Aby wziąć udział w konkursie i zdobyć nagrodę gwarantowaną, zarejestruj się lub zaloguj.',
    'backgroundImage' => 'images/Stacja_bp_ranking 1.png',
    'backgroundImageAlt' => 'BP stacja i chmury w tle',
    'gameIframeUrl' => '/game/index.html',
    'gamePlaceholder' => 'Placeholder dla iframe',
])

<section id="graj" class="relative w-full min-h-screen py-16 md:py-24 overflow-hidden">
    <!-- Cloud 2 - Top Left -->
    <div class="absolute top-20 left-8 md:left-16 lg:left-24 z-0 hidden md:block">
        <img src="{{ asset('images/chmura_2 1.png') }}" alt="" class="w-28 md:w-36 lg:w-44 h-auto">
    </div>
    <!-- Cloud 1 - Top Right -->
    <div class="absolute top-32 right-12 md:right-20 lg:right-32 z-0 hidden md:block">
        <img src="{{ asset('images/chmura_1 1.png') }}" alt="" class="w-24 md:w-32 lg:w-40 h-auto">
    </div>
    <!-- Cloud 4 - Middle Right -->
    <div class="absolute top-1/2 right-8 md:right-16 lg:right-24 z-0 -translate-y-1/2 hidden md:block">
        <img src="{{ asset('images/chmura_4 1.png') }}" alt="" class="w-20 md:w-28 lg:w-36 h-auto">
    </div>
    
    <!-- Background Image - Bottom Left -->
    <div class="absolute bottom-0 left-0 z-0 w-full">
        <div class="relative w-full max-w-6xl mx-auto px-4 sm:px-8">
            <img
                src="{{ asset($backgroundImage) }}"
                alt="{{ $backgroundImageAlt }}"
                class="w-auto h-auto max-w-md md:max-w-lg lg:max-w-xl"
            />
        </div>
    </div>
    <!-- Content Overlay -->
    <div class="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 py-12 md:py-16">
        <div class="relative w-full max-w-6xl mx-auto space-y-8 md:space-y-12">
            <div class="text-center space-y-4 md:space-y-6">
                <h2 class="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-cream leading-tight">
                    {{ $title }}
                </h2>
                <p class="text-base sm:text-lg md:text-xl text-cream max-w-3xl mx-auto leading-relaxed">
                    {{ $description }}
                </p>
            </div>

            <div class="flex justify-center mt-8 md:mt-12">
                <div class="w-full max-w-xs md:max-w-sm h-[600px] md:h-[670px] border-2" style="background-color: #F5F5DC; border-color: #1a1a1a;">
                    <div class="w-full h-full flex items-center justify-center relative">
                        @if($gameIframeUrl)
                            <div id="iframe-container">
                                <div id="iframe-placeholder"
                                     class="w-full h-full bg-black flex justify-center items-center cursor-pointer">
                                    <div class="text-white text-lg font-bold p-4 rounded-lg bg-black/70">
                                        Kliknij, aby załadować grę
                                    </div>
                                </div>
                            </div>
                        @else
                            <a href="{{ route('login') }}">
                                <img src="{{ asset('images/placeholder.jpg') }}">
                            </a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
