@props([
    'title' => 'Mechanika',
    'image' => null,
    'imageAlt' => '',
    'heading' => 'Co muszę zrobić?',
    'steps' => [],
    'appDownloadText' => 'Pobierz BPme',
    'appStoreUrl' => null,
    'googlePlayUrl' => null,
    'promotionDuration' => null,
])

<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="bg-promotion-bg rounded-[20px] p-8 md:p-12 lg:p-16">
        <!-- Main Title -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-12" style="color: #963E3E;">
            {{ $title }}
        </h2>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <!-- Left Column - Image -->
            <div class="w-full">
                @if($image)
                    <img
                        src="{{ str_starts_with($image, 'http://') || str_starts_with($image, 'https://') || str_starts_with($image, '/') ? $image : asset($image) }}"
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
                <h3 class="text-xl md:text-2xl font-bold" style="color: #963E3E;">
                    {{ $heading }}
                </h3>

                <!-- Steps List -->
                @if(!empty($steps))
                    <ol class="space-y-4 md:space-y-5 list-decimal list-inside pl-4">
                        @foreach($steps as $step)
                            <li class="text-base md:text-lg leading-relaxed pl-2" style="color: #333333;">
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
                    <div class="space-y-4">
                        @if($appDownloadText)
                            <p class="text-lg md:text-xl font-bold" style="color: #4CAF50;">
                                {{ $appDownloadText }}
                            </p>
                        @endif

                        @if($appStoreUrl || $googlePlayUrl)
                            <div class="flex flex-wrap gap-4">
                                @if($appStoreUrl)
                                    <a
                                        href="{{ $appStoreUrl }}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-[20px] hover:bg-gray-50 transition-colors"
                                    >
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                        </svg>
                                        <span class="text-sm font-medium text-gray-800">Pobierz w App Store</span>
                                    </a>
                                @endif

                                @if($googlePlayUrl)
                                    <a
                                        href="{{ $googlePlayUrl }}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-[20px] hover:bg-gray-50 transition-colors"
                                    >
                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,14.5L15.12,12.42L17.19,10.33L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                        </svg>
                                        <span class="text-sm font-medium text-gray-800">POBIERZ Z Google Play</span>
                                    </a>
                                @endif
                            </div>
                        @endif
                    </div>
                @endif

                <!-- Promotion Duration -->
                @if($promotionDuration)
                    <p class="text-base md:text-lg font-bold pt-4" style="color: #963E3E;">
                        {{ $promotionDuration }}
                    </p>
                @endif
            </div>
        </div>
    </div>
</div>
