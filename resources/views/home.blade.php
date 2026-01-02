<x-app-layout>
    <!-- Hero Section -->
    <x-sections.hero-section />

    <!-- Promotion Box -->
    <x-sections.promotion-box
        title="Mechanika"
        :image="asset('images/hero-reference.png')"
        imageAlt="Mechanika promocja"
        heading="Co muszę zrobić?"
        :steps="$steps"
        appDownloadText="Pobierz BPme"
        appStoreUrl="#"
        googlePlayUrl="#"
        promotionDuration="Czas trwania promocji: <span class='text-black'>19.01-01.03 2026 r.</span>"
    />

    <!-- Rewards Section -->
    <x-sections.rewards-section :rewards="$rewards" />

    <!-- Game Section -->
    <x-sections.game-section />

    <!-- Wild Bean Cafe Section -->
    <x-sections.wild-bean-section :drinks="$drinks" />

    <!-- Ranking Section -->
    <x-sections.ranking-section :dailyRanking="$dailyRanking ?? []" :mainRanking="$mainRanking ?? []" />

    <!-- Organizer Section -->
    <x-sections.organizer-section />
</x-app-layout>
