@props([
    'title' => 'Mechanika',
    'image' => 'images/mechnika.png',
    'imageAlt' => '',
    'heading' => 'Co muszę zrobić?',
    'steps' => [],
    'appDownloadText' => 'Pobierz BPme',
    'appStoreUrl' => null,
    'googlePlayUrl' => null,
    'promotionDuration' => null,
])

<div id="mechanika" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="bg-promotion-bg rounded-[20px] p-8 md:p-12 lg:p-16">
        <!-- Main Title -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 text-promotion-text">
            {{ $title }}
        </h2>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 md:gap-8 items-start">
            <!-- Left Column - Image -->
            <div class="w-full">
                @if($image)
                    <img
                        src="{{ asset('images/mechanika.png') }}"
                        alt="{{ $imageAlt }}"
                        class="w-full h-auto rounded-[20px] object-cover"
                    />
                @else
                    <div class="w-full aspect-square bg-promotion-gray rounded-[20px] flex items-center justify-center">
                        <span class="text-gray-500 text-sm">Obrazek</span>
                    </div>
                @endif
            </div>

            <!-- Right Column - Content -->
            <div class="w-full space-y-6 md:space-y-8">
                <!-- Sub Heading -->
                <h3 class="text-xl md:text-2xl font-black text-promotion-text -mb-5">
                    {{ $heading }}
                </h3>

                <!-- Steps List -->
                @if(!empty($steps))
                    <ol class="space-y-1 list-decimal list-inside font-roboto -mt-4">
                        @foreach($steps as $step)
                            <li class="text-base md:text-lg leading-relaxed" style="color: #333333;">
                                @if(is_array($step))
                                    @if(isset($step['text']))
                                        {!! $step['text'] !!}
                                    @elseif(isset($step['link']) && isset($step['linkText']))
                                        {{ $step['before'] ?? '' }}<a href="{{ $step['link'] }}" class="font-bold underline" style="color: #963E3E;">{{ $step['linkText'] }}</a>{{ $step['after'] ?? '' }}
                                    @else
                                        {{ $step }}
                                    @endif
                                @else
                                    {!! $step !!}
                                @endif
                            </li>
                        @endforeach
                    </ol>
                @endif

                <!-- App Download Section -->
                @if($appDownloadText || $appStoreUrl || $googlePlayUrl)
                    <div class="grid grid-cols-3 gap-4 items-center">
                        @if($appDownloadText)
                            <p class="text-lg md:text-xl font-bold" style="color: #4CAF50;">
                                {{ $appDownloadText }}
                            </p>
                        @else
                            <div></div>
                        @endif

                        @if($appStoreUrl)
                            <a
                                href="{{ $appStoreUrl }}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="{{ asset('images/App Store.png') }}"
                                    alt="Pobierz w App Store"
                                    class="w-full h-auto"
                                />
                            </a>
                        @else
                            <div></div>
                        @endif

                        @if($googlePlayUrl)
                            <a
                                href="{{ $googlePlayUrl }}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="{{ asset('images/Google Play.png') }}"
                                    alt="Pobierz z Google Play"
                                    class="w-full h-auto"
                                />
                            </a>
                        @else
                            <div></div>
                        @endif
                    </div>
                @endif

                <!-- Promotion Duration -->
                @if($promotionDuration)
                    <p class="text-base md:text-lg font-bold pt-4 text-promotion-text">
                        {!! $promotionDuration !!}
                    </p>
                @endif
            </div>
        </div>
    </div>
</div>
