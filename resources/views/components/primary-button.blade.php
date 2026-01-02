<button {{ $attributes->merge(['type' => 'submit', 'class' => 'wild-bean-auth-button']) }}>
    {{ $slot }}
</button>
