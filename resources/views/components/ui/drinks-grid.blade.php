@props([
    'drinks' => [],
])

@if(!empty($drinks))
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        @foreach($drinks as $drink)
            <div class="bg-white rounded-[20px] shadow-md p-16 flex flex-col items-center text-center">
                <div class="mb-4 h-64 flex items-center justify-center">
                    <img
                        src="{{ asset($drink['image'] ?? 'images/kawa.jpg') }}"
                        alt="{{ $drink['name'] ?? '' }}"
                        class="max-h-full max-w-full object-contain"
                    />
                </div>
                <h3 class="font-sans font-black text-[24px] leading-[27.6px] text-gray-900 mb-2 text-center align-middle">{{ $drink['name'] ?? '' }}</h3>
                <p class="font-roboto font-normal text-base leading-[22px] text-gray-600 mb-3 text-center align-middle">{{ $drink['volume'] ?? '' }}</p>
                <p class="font-sans font-black text-[32px] leading-[36.8px] text-wild-bean-dark text-center align-middle">{{ $drink['price'] ?? '' }}</p>
            </div>
        @endforeach
    </div>
@endif
