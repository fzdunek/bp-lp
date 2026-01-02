@props(['status'])

@if ($status)
    <div {{ $attributes->merge(['class' => 'font-medium text-sm text-tertiary font-roboto']) }}>
        {{ $status }}
    </div>
@endif
