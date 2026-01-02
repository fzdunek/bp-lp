<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ScoresRelationManager extends RelationManager
{
    protected static string $relationship = 'scores';

    protected static ?string $title = 'Wyniki';

    protected static ?string $modelLabel = 'Wynik';

    protected static ?string $pluralModelLabel = 'Wyniki';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('result')
                    ->label('Wynik')
                    ->numeric()
                    ->nullable(),

                Forms\Components\DateTimePicker::make('start_timestamp')
                    ->label('Czas rozpoczęcia')
                    ->required(),

                Forms\Components\DateTimePicker::make('end_timestamp')
                    ->label('Czas zakończenia')
                    ->required(),

                Forms\Components\TextInput::make('duration_ms')
                    ->label('Czas trwania (ms)')
                    ->numeric()
                    ->nullable(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->modifyQueryUsing(fn (Builder $query) => $query->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]))
            ->recordTitleAttribute('id')
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('ID')
                    ->sortable(),

                Tables\Columns\TextColumn::make('result')
                    ->label('Wynik')
                    ->sortable()
                    ->numeric(),

                Tables\Columns\TextColumn::make('start_timestamp')
                    ->label('Czas rozpoczęcia')
                    ->dateTime()
                    ->sortable(),

                Tables\Columns\TextColumn::make('end_timestamp')
                    ->label('Czas zakończenia')
                    ->dateTime()
                    ->sortable(),

                Tables\Columns\TextColumn::make('duration_ms')
                    ->label('Czas trwania (ms)')
                    ->sortable()
                    ->numeric()
                    ->formatStateUsing(fn ($state) => $state ? number_format($state).' ms' : '-'),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Utworzono')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('deleted_at')
                    ->label('Usunięto')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->icon('heroicon-o-pencil')
                    ->label('Edytuj'),
                Tables\Actions\DeleteAction::make()
                    ->icon('heroicon-o-trash')
                    ->label('Usuń')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->modalHeading('Usuń wynik')
                    ->modalDescription('Czy na pewno chcesz usunąć ten wynik?')
                    ->modalSubmitActionLabel('Usuń')
                    ->visible(fn ($record) => ! $record->trashed()),
                Tables\Actions\RestoreAction::make()
                    ->icon('heroicon-o-arrow-path')
                    ->label('Przywróć')
                    ->color('success')
                    ->visible(fn ($record) => $record->trashed()),
                Tables\Actions\ForceDeleteAction::make()
                    ->icon('heroicon-o-x-circle')
                    ->label('Usuń trwale')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->modalHeading('Trwale usuń wynik')
                    ->modalDescription('Czy na pewno chcesz trwale usunąć ten wynik? Tej operacji nie można cofnąć.')
                    ->modalSubmitActionLabel('Usuń trwale')
                    ->visible(fn ($record) => $record->trashed()),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->label('Usuń zaznaczone')
                        ->requiresConfirmation()
                        ->modalHeading('Usuń zaznaczone wyniki')
                        ->modalDescription('Czy na pewno chcesz usunąć zaznaczone wyniki?'),
                    Tables\Actions\RestoreBulkAction::make()
                        ->label('Przywróć zaznaczone'),
                    Tables\Actions\ForceDeleteBulkAction::make()
                        ->label('Usuń trwale zaznaczone')
                        ->requiresConfirmation()
                        ->modalHeading('Trwale usuń zaznaczone wyniki')
                        ->modalDescription('Czy na pewno chcesz trwale usunąć zaznaczone wyniki? Tej operacji nie można cofnąć.'),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
}
