<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class InvoiceItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->data;
        // $today = Carbon::now();
        // dd($data, $request->all(), $request->user()->id, now()->toDateString());
        // dd($data, $request->all(), $request->user()->id, now()->toDateString());
        // dd($data, $request->all(), $request->user()->id, now()->toDateString());
        DB::table('invoices')->insert([['customer_id'=>$request->customer_id, 'user_id'=>$request->user()->id, 'date'=>now()->toDateString(),'status'=>'Done']]);
        foreach($data as $key => $val){
            $data[$key]['invoice_id'] = 3;
        }
        DB::table('invoice_items')->insert($data);
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
