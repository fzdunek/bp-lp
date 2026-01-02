<footer class="relative w-full mt-auto">
    <div class="w-full h-1 bg-black">
        <div class="w-full h-0.5 bg-bp-green"></div>
        <div class="w-full h-0.5 bg-bp-green mt-0.5"></div>
    </div>

    <div class="bg-white relative">
        <div class="max-w-[1218px] mx-auto px-4 sm:px-0 relative">
            <div class="flex flex-col md:flex-row items-center justify-between md:py-2 gap-4 md:gap-6">
                <div class="flex items-center">
                    <div class="flex flex-col">
                        <x-application-logo src="{{ asset('images/navbar-logo.png') }}" alt="Wild Bean Moments" class="h-[60px]" />
                    </div>
                </div>

                <div class="flex items-center space-x-6 md:space-x-8 font-roboto">
                    <a href="{{ route('page.show', 'regulamin') }}" class="text-wild-bean-dark hover:text-wild-bean-light transition-colors duration-200 text-base md:text-lg whitespace-nowrap">Regulamin</a>
                    <a href="{{ route('page.show', 'polityka-prywatnosci') }}" class="text-wild-bean-dark hover:text-wild-bean-light transition-colors duration-200 text-base md:text-lg whitespace-nowrap">Polityka prywatności</a>
                </div>
                <div class="flex items-center space-x-6 md:space-x-8 font-roboto">
                    <div class="hidden lg:flex flex-col items-center justify-start absolute bottom-0 right-0">
                        <img src="{{ asset('images/stopka.png') }}">
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
