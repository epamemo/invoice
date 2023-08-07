<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Aplikasi Penerimaan Invoice adalah sebuah sistem yang digunakan untuk mengelola proses penerimaan invoice di dalam organisasi. Fitur-fitur utama meliputi pencatatan detail barang, verifikasi kualitas, pencatatan riwayat penerimaan, dan laporan analisis. Meningkatkan efisiensi dan pengelolaan persediaan barang dalam lingkungan kantor Anda.">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        <script src="https://kit.fontawesome.com/fd7d09c07f.js" crossorigin="anonymous"></script>
    </body>
</html>
