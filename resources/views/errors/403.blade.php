@auth
    <x-app-layout>
        <div class="min-h-screen flex items-center justify-center px-4 py-16">
            <div class="w-full sm:max-w-2xl bg-white shadow-md rounded-2xl px-6 py-8">
                <div class="text-center">
                    <div class="mb-8">
                        <h1 class="text-9xl font-bold text-wild-bean-dark mb-4">403</h1>
                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Brak dostępu</h2>
                        <p class="text-lg text-gray-600 mb-8">
                            Nie masz uprawnień do dostępu do tej strony.
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="{{ route('home') }}" class="wild-bean-auth-button">
                            Wróć do strony głównej
                        </a>
                        <button onclick="window.history.back()" class="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200">
                            Wróć do poprzedniej strony
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </x-app-layout>
@else
    <x-guest-layout>
        <div class="text-center py-8">
            <div class="mb-8">
                <h1 class="text-9xl font-bold text-wild-bean-dark mb-4">403</h1>
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">Brak dostępu</h2>
                <p class="text-lg text-gray-600 mb-8">
                    Nie masz uprawnień do dostępu do tej strony.
                </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('home') }}" class="wild-bean-auth-button">
                    Wróć do strony głównej
                </a>
                <a href="{{ route('login') }}" class="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200">
                    Zaloguj się
                </a>
            </div>
        </div>
    </x-guest-layout>
@endauth

