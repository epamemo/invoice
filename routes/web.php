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

Route::post('/customer/delete', [CustomerController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.customer');
Route::post('/customer/edit', [CustomerController::class, 'update'])->middleware(['auth', 'verified'])->name('update.customer');
Route::get('/customer/edit', [CustomerController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.customer');
Route::post('/customer/create', [CustomerController::class, 'store'])->middleware(['auth', 'verified'])->name('store.customer');
Route::get('/customer/create', [CustomerController::class, 'create'])->middleware(['auth', 'verified'])->name('create.customer');
Route::get('/customer', [CustomerController::class, 'index'])->middleware(['auth', 'verified'])->name('index.customer');

Route::post('/invoice', [InvoiceItemController::class, 'store'])->middleware(['auth', 'verified'])->name('create.invoice');
Route::get('/invoice', [InvoiceController::class, 'create'])->middleware(['auth', 'verified'])->name('index.invoice');
Route::get('/invoice/history', [InvoiceController::class, 'show'])->middleware(['auth', 'verified'])->name('history.invoice');
Route::get('/invoice/edit', [InvoiceController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.invoice');
Route::post('/invoice/edit', [InvoiceController::class, 'update'])->middleware(['auth', 'verified'])->name('update.invoice');
Route::post('/invoice/delete', [InvoiceController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.invoice');
Route::get('/invoice/print', [InvoiceController::class, 'print'])->middleware(['auth', 'verified'])->name('print.invoice');

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
