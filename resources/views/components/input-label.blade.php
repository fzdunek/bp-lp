@props(['value'])

<label {{ $attributes->merge(['class' => 'block font-medium text-sm text-wild-bean-dark font-roboto']) }}>
    {{ $value ?? $slot }}
</label>
