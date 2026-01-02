<x-app-layout>
    <x-sections.hero-section />
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

    <x-sections.rewards-section :rewards="$rewards" />

    <x-sections.game-section />

    <x-sections.wild-bean-section :drinks="$drinks" />

    <x-sections.ranking-section :dailyRanking="$dailyRanking ?? []" :mainRanking="$mainRanking ?? []" />
    <x-sections.organizer-section />
</x-app-layout>
