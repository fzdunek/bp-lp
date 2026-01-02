<footer class="relative w-full mt-auto">
    <div class="w-full h-1 bg-black">
        <div class="w-full h-0.5 bg-bp-green"></div>
        <div class="w-full h-0.5 bg-bp-green mt-0.5"></div>
    </div>

    <div class="bg-white relative">
        <div class="max-w-[1218px] mx-auto px-4 sm:px-0 relative">
            <div class="flex flex-col md:flex-row items-center justify-between  md:py-8 gap-4 md:gap-6">
                <!-- Left: Wild Bean Moments Branding -->
                <div class="flex items-center">
                    <div class="flex flex-col">
                        <x-application-logo src="{{ asset('images/navbar-logo.png') }}" alt="Wild Bean Moments" class="h-24" />
                    </div>
                </div>

                <!-- Center: Navigation Links -->
                <div class="flex items-center space-x-6 md:space-x-8">
                    <a href="{{ route('page.show', 'regulamin') }}" class="text-wild-bean-dark hover:text-wild-bean-light transition-colors duration-200 text-base md:text-lg whitespace-nowrap">Regulamin</a>
                    <a href="{{ route('page.show', 'polityka-prywatnosci') }}" class="text-wild-bean-dark hover:text-wild-bean-light transition-colors duration-200 text-base md:text-lg whitespace-nowrap">Polityka prywatności</a>
                </div>

                <!-- Right: BP Logo Column (only visible on larger screens) -->
                <div class="hidden lg:flex flex-col items-center justify-start bg-[#F5F5DC] px-6  rounded-lg space-y-3 min-w-[120px]">
                    <!-- BP Text -->
                    <span class="text-2xl font-bold text-bp-green">bp</span>
                </div>
            </div>
        </div>
    </div>
</footer>
