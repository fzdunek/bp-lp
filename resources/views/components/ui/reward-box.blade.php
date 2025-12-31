@props([
    'illustration' => null,
    'illustrationAlt' => '',
    'title' => '',
    'description' => '',
    'condition' => '',
])

<div class="w-full bg-promotion-bg rounded-[20px] p-6 md:p-8 flex flex-col items-center h-full">
    <!-- Illustration -->
    @if($illustration)
        <div class="mb-6 flex-shrink-0">
            <img
                src="{{ str_starts_with($illustration, 'http://') || str_starts_with($illustration, 'https://') || str_starts_with($illustration, '/') ? $illustration : asset($illustration) }}"
                alt="{{ $illustrationAlt }}"
                class="w-full max-w-[300px] h-auto mx-auto"
            />
        </div>
    @endif

    <!-- Title -->
    @if($title)
        <h3 class="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4" style="color: #963E3E;">
            {{ $title }}
        </h3>
    @endif

    <!-- Description -->
    @if($description)
        <p class="text-lg md:text-xl font-bold text-center mb-4 md:mb-6" style="color: #963E3E;">
            {{ $description }}
        </p>
    @endif

    <!-- Condition -->
    @if($condition)
        <p class="text-sm md:text-base text-left w-full mt-auto" style="color: #963E3E;">
            <span class="font-bold">Warunek:</span> {{ $condition }}
        </p>
    @endif
</div>
