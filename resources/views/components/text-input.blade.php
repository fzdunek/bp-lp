@props(['disabled' => false])

<input @disabled($disabled) {{ $attributes->merge(['class' => 'border-gray-300 focus:border-wild-bean-dark focus:ring-wild-bean-dark rounded-lg shadow-sm font-roboto']) }}>
