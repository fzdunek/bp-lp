<x-app-layout>
    <div class="space-y-8">
        <h1 class="text-4xl font-bold text-gray-900">Panel użytkownika</h1>
        <p class="text-lg text-gray-600">Witaj, {{ Auth::user()->name }}!</p>
    </div>
</x-app-layout>
