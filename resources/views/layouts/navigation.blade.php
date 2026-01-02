<nav x-data="{ open: false }" class="sticky top-0 z-50 w-full mb-4">
    <div class="max-w-[1216px] mx-auto px-4 sm:px-0">
        <div class="bg-white rounded-b-[20px] shadow-xl">
            <!-- Primary Navigation Menu -->
            <div class="px-4 sm:px-[30px] py-[10px]">
                <div class="flex justify-between items-center h-[67px]">
                    <!-- Logo -->
                    <div class="flex items-center shrink-0">
                        <a href="{{ route('home') }}" class="flex flex-col">
                            <x-application-logo src="{{ asset('images/navbar-logo.png') }}" alt="Wild Bean Moments" class="h-[80px]" />
                        </a>
                    </div>

                    <!-- Desktop Navigation Links - widoczne od md (768px) -->
                    <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="/#mechanika" class="desktop-nav-link nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap font-normal">Mechanika</a>
                        <a href="/#nagrody" class="desktop-nav-link nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap font-normal">Nagrody</a>
                        <a href="/#graj" class="desktop-nav-link nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap font-normal">Chwytam moment</a>
                        <a href="/#smaki-chwili" class="desktop-nav-link nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap font-normal">Smaki chwili</a>
                        <a href="{{ route('page.show', 'regulamin') }}" class="nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap">Regulamin</a>
                        @auth
                            <a href="{{ route('profile.edit') }}" class="nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap">Moje konto</a>
                            <form method="POST" action="{{ route('logout') }}" class="inline">
                                @csrf
                                <button type="submit" class="nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap">Wyloguj</button>
                            </form>
                        @else
                            <a href="{{ route('register') }}" class="nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 whitespace-nowrap">Rejestracja</a>
                        @endauth
                    </div>

                    <!-- Hamburger Menu Button (Mobile) - tylko na małych ekranach -->
                    <div class="flex items-center md:hidden">
                        <button @click="open = ! open" class="inline-flex items-center justify-center p-2 rounded-md text-wild-bean-dark hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Navigation Menu - tylko na małych ekranach -->
            <div :class="{'block': open, 'hidden': ! open}" class="hidden md:hidden border-t border-gray-100">
                <div class="px-4 sm:px-[30px] py-4 space-y-3">
                    <a href="/#mechanika" class="mobile-nav-link nav-link-figma block text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2 font-normal">Mechanika</a>
                    <a href="/#nagrody" class="mobile-nav-link nav-link-figma block text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2 font-normal">Nagrody</a>
                    <a href="/#graj" class="mobile-nav-link nav-link-figma block text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2 font-normal">Chwytam moment</a>
                    <a href="/#smaki-chwili" class="mobile-nav-link nav-link-figma block text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2 font-normal">Smaki chwili</a>
                    <a href="{{ route('page.show', 'regulamin') }}" class="nav-link-figma block text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2">Regulamin</a>
                    @auth
                        <a href="{{ route('profile.edit') }}" class="nav-link-figma block text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2">Moje konto</a>
                        <form method="POST" action="{{ route('logout') }}" class="block">
                            @csrf
                            <button type="submit" class="nav-link-figma text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2 w-full text-left">Wyloguj</button>
                        </form>
                    @else
                        <a href="{{ route('register') }}" class="nav-link-figma block text-wild-bean-dark hover:opacity-80 transition-opacity duration-200 py-2">Rejestracja</a>
                    @endauth
                </div>
            </div>
        </div>
    </div>
</nav>
