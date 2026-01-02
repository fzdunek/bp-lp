<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ScoreResource\Pages;
use App\Models\Score;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Carbon;

class ScoreResource extends Resource
{
    protected static ?string $model = Score::class;

    protected static ?string $navigationIcon = 'heroicon-o-trophy';

    protected static ?string $navigationLabel = 'Wyniki';

    protected static ?string $modelLabel = 'Wynik';

    protected static ?string $pluralModelLabel = 'Wyniki';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->label('Użytkownik')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->required()
                    ->createOptionForm([
                        Forms\Components\TextInput::make('name')
                            ->label('Imię i nazwisko')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->required()
                            ->maxLength(255)
                            ->unique(),
                    ]),

                Forms\Components\TextInput::make('result')
                    ->label('Wynik')
                    ->numeric()
                    ->nullable(),

                Forms\Components\DateTimePicker::make('start_timestamp')
                    ->label('Czas rozpoczęcia')
                    ->required()
                    ->native(false)
                    ->displayFormat('d/m/Y H:i'),

                Forms\Components\DateTimePicker::make('end_timestamp')
                    ->label('Czas zakończenia')
                    ->required()
                    ->native(false)
                    ->displayFormat('d/m/Y H:i'),

                Forms\Components\TextInput::make('duration_ms')
                    ->label('Czas trwania (ms)')
                    ->numeric()
                    ->nullable()
                    ->helperText('Czas trwania w milisekundach'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->modifyQueryUsing(fn (Builder $query) => $query->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]))
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('ID')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('user.name')
                    ->label('Użytkownik')
                    ->sortable()
                    ->searchable()
                    ->url(fn (Score $record) => $record->user ? UserResource::getUrl('view', ['record' => $record->user]) : null)
                    ->openUrlInNewTab(),

                Tables\Columns\TextColumn::make('user.email')
                    ->label('Email użytkownika')
                    ->sortable()
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('result')
                    ->label('Wynik')
                    ->sortable()
                    ->numeric()
                    ->default('-'),

                Tables\Columns\TextColumn::make('start_timestamp')
                    ->label('Czas rozpoczęcia')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),

                Tables\Columns\TextColumn::make('end_timestamp')
                    ->label('Czas zakończenia')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),

                Tables\Columns\TextColumn::make('duration_ms')
                    ->label('Czas trwania')
                    ->sortable()
                    ->numeric()
                    ->formatStateUsing(fn ($state) => $state ? number_format($state).' ms' : '-'),

                Tables\Columns\IconColumn::make('deleted_at')
                    ->label('Usunięty')
                    ->boolean()
                    ->getStateUsing(fn ($record) => ! is_null($record->deleted_at))
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Utworzono')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Zaktualizowano')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
                Tables\Filters\SelectFilter::make('user_id')
                    ->label('Użytkownik')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload(),
                Tables\Filters\Filter::make('today')
                    ->label('Dzisiaj')
                    ->query(fn (Builder $query): Builder => $query->whereDate('start_timestamp', Carbon::today()))
                    ->toggle(),
                Tables\Filters\Filter::make('this_week')
                    ->label('Ten tydzień')
                    ->query(fn (Builder $query): Builder => $query->whereBetween('start_timestamp', [
                        Carbon::now()->startOfWeek(),
                        Carbon::now()->endOfWeek(),
                    ]))
                    ->toggle(),
                Tables\Filters\Filter::make('this_month')
                    ->label('Ten miesiąc')
                    ->query(fn (Builder $query): Builder => $query->whereBetween('start_timestamp', [
                        Carbon::now()->startOfMonth(),
                        Carbon::now()->endOfMonth(),
                    ]))
                    ->toggle(),
                Tables\Filters\Filter::make('date_range')
                    ->label('Zakres dat')
                    ->form([
                        Forms\Components\Select::make('date_type')
                            ->label('Filtruj według')
                            ->options([
                                'start' => 'Czas rozpoczęcia',
                                'end' => 'Czas zakończenia',
                                'created' => 'Data utworzenia',
                            ])
                            ->default('start')
                            ->required(),
                        Forms\Components\DatePicker::make('date_from')
                            ->label('Od')
                            ->native(false)
                            ->displayFormat('d/m/Y')
                            ->placeholder('Wybierz datę początkową'),
                        Forms\Components\DatePicker::make('date_to')
                            ->label('Do')
                            ->native(false)
                            ->displayFormat('d/m/Y')
                            ->placeholder('Wybierz datę końcową')
                            ->after('date_from'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        $dateType = $data['date_type'] ?? 'start';
                        $dateFrom = $data['date_from'] ?? null;
                        $dateTo = $data['date_to'] ?? null;

                        $column = match ($dateType) {
                            'start' => 'start_timestamp',
                            'end' => 'end_timestamp',
                            'created' => 'created_at',
                            default => 'start_timestamp',
                        };

                        return $query
                            ->when(
                                $dateFrom,
                                fn (Builder $query, $date): Builder => $query->whereDate($column, '>=', $date),
                            )
                            ->when(
                                $dateTo,
                                fn (Builder $query, $date): Builder => $query->whereDate($column, '<=', $date),
                            );
                    })
                    ->indicateUsing(function (array $data): array {
                        $indicators = [];
                        $dateType = $data['date_type'] ?? 'start';
                        $dateTypeLabel = match ($dateType) {
                            'start' => 'rozpoczęcia',
                            'end' => 'zakończenia',
                            'created' => 'utworzenia',
                            default => 'rozpoczęcia',
                        };

                        if ($data['date_from'] ?? null) {
                            $indicators[] = Tables\Filters\Indicator::make('Od: '.Carbon::parse($data['date_from'])->format('d/m/Y'))
                                ->removeField('date_from');
                        }

                        if ($data['date_to'] ?? null) {
                            $indicators[] = Tables\Filters\Indicator::make('Do: '.Carbon::parse($data['date_to'])->format('d/m/Y'))
                                ->removeField('date_to');
                        }

                        if (! empty($indicators)) {
                            $indicators[] = Tables\Filters\Indicator::make('Według: '.$dateTypeLabel)
                                ->removeField('date_type');
                        }

                        return $indicators;
                    }),
            ], layout: Tables\Enums\FiltersLayout::AboveContentCollapsible)
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->label('Usuń')
                    ->visible(fn ($record) => ! $record->trashed()),
                Tables\Actions\RestoreAction::make()
                    ->label('Przywróć')
                    ->visible(fn ($record) => $record->trashed()),
                Tables\Actions\ForceDeleteAction::make()
                    ->label('Usuń trwale')
                    ->visible(fn ($record) => $record->trashed()),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->label('Usuń zaznaczone'),
                    Tables\Actions\RestoreBulkAction::make()
                        ->label('Przywróć zaznaczone'),
                    Tables\Actions\ForceDeleteBulkAction::make()
                        ->label('Usuń trwale zaznaczone'),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListScores::route('/'),
            'create' => Pages\CreateScore::route('/create'),
            'view' => Pages\ViewScore::route('/{record}'),
            'edit' => Pages\EditScore::route('/{record}/edit'),
        ];
    }
}
