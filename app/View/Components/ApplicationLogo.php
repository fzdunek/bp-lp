<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class ApplicationLogo extends Component
{
    /**
     * The path to the logo image.
     */
    public string $src;

    /**
     * The alt text for the logo.
     */
    public string $alt;

    /**
     * Create a new component instance.
     */
    public function __construct(?string $src = null, ?string $alt = null)
    {
        $this->src = $src ?? 'images/logo.png';
        $this->alt = $alt ?? config('app.name', 'Laravel');
    }

    /**
     * Get the view / contents that represents the component.
     */
    public function render(): View
    {
        return view('components.application-logo');
    }
}
