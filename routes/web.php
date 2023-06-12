<?php

use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/createNews', [NewsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');
Route::get('/createNews', [InvoiceController::class, 'create'])->middleware(['auth', 'verified'])->name('page.news');
Route::get('/history', [NewsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.news');
Route::get('/', [NewsController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::inertia('/404', 'Error/404')->name('error.404');
Route::inertia('/testtest', 'User/Test')->middleware(['auth', 'verified'])->name('page.test');



Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
