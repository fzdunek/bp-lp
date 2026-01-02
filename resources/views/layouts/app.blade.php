<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Wild Bean Moments') }}</title>

        <link rel="stylesheet" href="https://use.typekit.net/msd0ubc.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased bg-page-bg">
        <div class="min-h-screen flex flex-col">
            @include('layouts.navigation')

            <main class="w-full flex-grow">
                {{ $slot }}
            </main>

            <x-footer />
        </div>
    </body>
</html>
