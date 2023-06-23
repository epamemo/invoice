<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $grpo = DB::connection('db_sap')->table('OPOR')->where('DocStatus','=','O')->paginate(20);
        return Inertia::render('Invoice/CreateInvoice',[
            'title' => 'Pembuatan Tanda Terima',
            // 'grpo' => $grpo
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = User::all();
        $grpo = DB::connection('db_sap')->table('OPDN')->where('DocStatus','=','O')->paginate(20);
        // dd($grpo);
        return Inertia::render('User/CreateNews',[
            'title' => 'Pembuatan Tanda Terima',
            'grpo' => $grpo,
            'userData' => $user
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
