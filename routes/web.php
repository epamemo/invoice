<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\InvoiceItemController;
use App\Http\Controllers\DashboardController;
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

// Route::post('/createNews', [CustomerController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');
// Route::get('/create-news', [InvoiceController::class, 'create'])->middleware(['auth', 'verified'])->name('page.news');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::inertia('/404', 'Error/404')->name('error.404');

Route::inertia('/testtest', 'User/Test')->middleware(['auth', 'verified'])->name('page.test');
Route::inertia('/test2', 'User/FormAdd')->middleware(['auth', 'verified'])->name('page.test2');

Route::prefix('/customer')->middleware(['auth','verified'])->group(function(){
    Route::post('/delete', [CustomerController::class, 'destroy'])->name('delete.customer');
    Route::post('/edit', [CustomerController::class, 'update'])->name('update.customer');
    Route::get('/edit', [CustomerController::class, 'edit'])->name('edit.customer');
    Route::post('/create', [CustomerController::class, 'store'])->name('store.customer');
    Route::get('/create', [CustomerController::class, 'create'])->name('create.customer');
    Route::get('/', [CustomerController::class, 'index'])->name('index.customer');
});

Route::prefix('/invoice')->middleware(['auth', 'verified'])->group(function()
{
    Route::get('/history', [InvoiceController::class, 'show'])->name('history.invoice');
    Route::get('/edit', [InvoiceController::class, 'edit'])->name('edit.invoice');
    Route::post('/edit', [InvoiceController::class, 'update'])->name('update.invoice');
    Route::post('/delete', [InvoiceController::class, 'destroy'])->name('delete.invoice');
    Route::get('/print', [InvoiceController::class, 'print'])->name('print.invoice');
    Route::post('/', [InvoiceItemController::class, 'store'])->name('create.invoice');
    Route::get('/', [InvoiceController::class, 'create'])->name('index.invoice');
});


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

require __DIR__ . '/auth.php';
