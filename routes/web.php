<?php

use App\Http\Controllers\GameUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/game/user', GameUserController::class)->name('game.user');
Route::post('/game/score', [GameUserController::class, 'storeScore'])
    ->middleware('throttle:10,1')
    ->name('game.score.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('{slug}', [PageController::class, 'show'])->name('page.show');
