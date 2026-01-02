<?php

namespace App\Filament\Resources\ScoreResource\Pages;

use App\Filament\Resources\ScoreResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewScore extends ViewRecord
{
    protected static string $resource = ScoreResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
