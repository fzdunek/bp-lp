@props([
    'illustration' => null,
    'illustrationAlt' => '',
    'title' => '',
    'description' => '',
    'condition' => '',
])

<div class="w-full bg-promotion-bg rounded-[20px] p-6 md:p-8 flex flex-col items-center h-full">
    @if($illustration)
        <div class="mb-12 flex-shrink-0">
            <img
                src="{{ str_starts_with($illustration, 'http://') || str_starts_with($illustration, 'https://') || str_starts_with($illustration, '/') ? $illustration : asset($illustration) }}"
                alt="{{ $illustrationAlt }}"
                class="w-full max-w-[300px] h-auto mx-auto"
            />
        </div>
    @endif

    @if($title)
        <h3 class="reward-title mb-5 md:mb-8">
            {{ $title }}
        </h3>
    @endif

    @if($description)
        <p class="reward-description mb-4 md:mb-6">
            {!! $description !!}
        </p>
    @endif

    @if($condition)
        <p class="reward-condition w-full mt-auto">
            <span class="font-bold">Warunek:</span> {{ $condition }}
        </p>
    @endif
</div>
