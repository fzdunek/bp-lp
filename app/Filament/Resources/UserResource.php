<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Hash;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationLabel = 'Użytkownicy';

    protected static ?string $modelLabel = 'Użytkownik';

    protected static ?string $pluralModelLabel = 'Użytkownicy';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Imię i nazwisko')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('email')
                    ->label('Email')
                    ->email()
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true),

                Forms\Components\TextInput::make('bpme_card_number')
                    ->label('Numer karty BPME')
                    ->maxLength(13)
                    ->numeric(),

                Forms\Components\TextInput::make('highscore')
                    ->label('Najlepszy wynik')
                    ->numeric()
                    ->default(0),

                Forms\Components\TextInput::make('password')
                    ->label('Hasło')
                    ->password()
                    ->dehydrated(fn ($state) => filled($state))
                    ->dehydrateStateUsing(fn ($state) => Hash::make($state))
                    ->required(fn (string $context): bool => $context === 'create')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Imię i nazwisko')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('bpme_card_number')
                    ->label('Numer karty BPME')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('highscore')
                    ->label('Najlepszy wynik')
                    ->sortable()
                    ->numeric(),

                Tables\Columns\TextColumn::make('scores_count')
                    ->label('Liczba wyników')
                    ->counts('scores')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Utworzono')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Zaktualizowano')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\ScoresRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'view' => Pages\ViewUser::route('/{record}'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
