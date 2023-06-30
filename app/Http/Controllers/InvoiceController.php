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
        $invoiceu = $invoice::select('c.name','invoices.id','invoices.date','invoices.status','invoices.total_price')
        ->join('invoice_items as itm', 'itm.invoice_id','invoices.id')
        ->join('customers as c','c.id','invoices.customer_id')
        ->groupby('c.name','invoices.id','invoices.date','invoices.status','invoices.total_price')->where('user_id', auth()->user()->id)->get();
        return Inertia::render('User/History',[
            'title' => 'History Tanda Terima',
            'invoice' => $invoiceu
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice $invoice, InvoiceItem $invoiceit, Customer $customer, Request $request)
    {
        $invoiceItem=InvoiceItem::select()->where('invoice_id',1)->get();
        $inv= $invoice->find($request->id);
        $cs = $customer->find($inv->customer_id);

        // dd($invoiceItem,$inv,$cs);
        
        return Inertia::render('Invoice/EditInvoice', [
            'title' => 'Edit Invoice',
            'invoice_item' => $invoiceItem,
            'invoice'=>$inv,
            'customer'=>$customer->get(),
            'cs'=>$cs,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data = $request->data;
        $customerId = $request->customer_id;
        $userId = $request->user()->id;
        $date = $request->date;
        $totalPrice = $request->total_price;

        dd($request->$data);

        // Update the invoice
        // DB::table('invoices')
        //     ->where('id', $request->id)
        //     ->update([
        //         'customer_id' => $customerId,
        //         'user_id' => $userId,
        //         'date' => $date,
        //         'total_price' => $totalPrice,
        //         'status' => 'Done'
        //     ]);

        // DB::table('invoice_items')
        //     ->where('invoice_id', $request->id)
        //     ->delete();

        foreach ($data as $key => $val) {
            $data[$key]['invoice_id'] = $request->id;
        }
        // DB::table('invoice_items')->insert($data);

        return to_route('history.invoice');
    }
    //     Customer::where('id', $request->id)->update([
    //         'name' => $request->name,
    //         'phone' => $request->phone
    //     ]);
    //     return to_route('index.customer');
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function print(Invoice $invoice, InvoiceItem $invoiceit, Customer $customer, Request $request)
    {
        $invoiceItem=InvoiceItem::select()->where('invoice_id',1)->get();
        $inv= $invoice->find($request->id);
        $cs = $customer->find($inv->customer_id);

        // dd($invoiceItem,$inv,$cs);
        
        return Inertia::render('Invoice/PrintInvoice', [
            'title' => 'Edit Invoice',
            'invoice_item' => $invoiceItem,
            'invoice'=>$inv,
            'customer'=>$customer->get(),
            'cs'=>$cs,
        ]);
    }
}
