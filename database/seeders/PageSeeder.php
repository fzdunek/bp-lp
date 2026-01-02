<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Page::updateOrCreate(
            ['slug' => 'regulamin'],
            [
                'title' => 'Regulamin',
                'content' => '<h2>1. Postanowienia ogólne</h2>
<p>Niniejszy regulamin określa zasady korzystania z serwisu Wild Bean Moments oraz uczestnictwa w programie lojalnościowym.</p>

<h2>2. Definicje</h2>
<ul>
    <li><strong>Serwis</strong> - platforma internetowa Wild Bean Moments</li>
    <li><strong>Użytkownik</strong> - osoba korzystająca z serwisu</li>
    <li><strong>Program lojalnościowy</strong> - system nagradzania użytkowników za aktywność</li>
</ul>

<h2>3. Zasady uczestnictwa</h2>
<p>Uczestnictwo w programie lojalnościowym jest dobrowolne i bezpłatne. Aby wziąć udział, użytkownik musi:</p>
<ul>
    <li>Posiadać aktywną kartę BPme</li>
    <li>Zarejestrować się w serwisie</li>
    <li>Zaakceptować niniejszy regulamin</li>
</ul>

<h2>4. Nagrody i punkty</h2>
<p>Użytkownicy mogą zdobywać punkty za różne aktywności, które następnie mogą wymieniać na nagrody zgodnie z aktualnym cennikiem.</p>

<h2>5. Postanowienia końcowe</h2>
<p>Organizator zastrzega sobie prawo do zmiany regulaminu. Wszelkie zmiany będą publikowane na stronie serwisu.</p>',
                'is_active' => true,
            ]
        );

        Page::updateOrCreate(
            ['slug' => 'polityka-prywatnosci'],
            [
                'title' => 'Polityka prywatności',
                'content' => '<h2>1. Informacje ogólne</h2>
<p>Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych użytkowników serwisu Wild Bean Moments.</p>

<h2>2. Administrator danych</h2>
<p>Administratorem danych osobowych jest BP Polska Sp. z o.o. z siedzibą w Warszawie.</p>

<h2>3. Zakres zbieranych danych</h2>
<p>Zbieramy następujące dane osobowe:</p>
<ul>
    <li>Imię i nazwisko</li>
    <li>Adres e-mail</li>
    <li>Numer karty BPme</li>
    <li>Dane dotyczące aktywności w programie lojalnościowym</li>
</ul>

<h2>4. Cel przetwarzania danych</h2>
<p>Dane osobowe są przetwarzane w celu:</p>
<ul>
    <li>Realizacji programu lojalnościowego</li>
    <li>Komunikacji z użytkownikami</li>
    <li>Analizy statystycznej</li>
    <li>Wypełnienia obowiązków prawnych</li>
</ul>

<h2>5. Prawa użytkownika</h2>
<p>Użytkownik ma prawo do:</p>
<ul>
    <li>Dostępu do swoich danych</li>
    <li>Sprostowania danych</li>
    <li>Usunięcia danych</li>
    <li>Ograniczenia przetwarzania</li>
    <li>Przenoszenia danych</li>
    <li>Wniesienia sprzeciwu wobec przetwarzania</li>
</ul>

<h2>6. Pliki cookies</h2>
<p>Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania oraz analizy ruchu na stronie.</p>

<h2>7. Kontakt</h2>
<p>W sprawach dotyczących przetwarzania danych osobowych można kontaktować się z administratorem pod adresem e-mail: privacy@bp.pl</p>',
                'is_active' => true,
            ]
        );
    }
}
