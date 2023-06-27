<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Invoice $invoice)
    {
        $invoiceu = $invoice::where('user_id', auth()->user()->id)->get();
        return Inertia::render('User/CreateNews',[
            'invoice' => $invoiceu
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $user = User::all();
        // $grpo = DB::connection('db_sap')->table('OPDN')->where('DocStatus','=','O')->paginate(20);
        // // dd($grpo);
        // return Inertia::render('User/CreateNews',[
        //     'title' => 'Pembuatan Tanda Terima',
        //     'grpo' => $grpo,
        //     'userData' => $user
        // ]);
        // $grpo = DB::connection('db_sap')->table('OPOR')->where('DocStatus','=','O')->paginate(20);
        $customer = DB::table('customers')->get();
        // dd($customer);
        return Inertia::render('Invoice/CreateInvoice',[
            'title' => 'Pembuatan Tanda Terima',
            'customer' => $customer
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
    public function show(Invoice $invoice)
    {
        $invoiceu = $invoice::select('c.name','invoices.id','invoices.date','invoices.status')->join('invoice_items as itm', 'itm.invoice_id','invoices.id')->join('customers as c','c.id','invoices.customer_id')->groupby('c.name','invoices.id','invoices.date','invoices.status')->where('user_id', auth()->user()->id)->get();
        return Inertia::render('User/History',[
            'title' => 'History Tanda Terima',
            'invoice' => $invoiceu
        ]);
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
