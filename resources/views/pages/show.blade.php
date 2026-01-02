<x-app-layout>
    <div class="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <article class="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {{ $page->title }}
            </h1>
            
            <div class="prose prose-lg max-w-none">
                {!! $page->content !!}
            </div>
        </article>
    </div>
</x-app-layout>

