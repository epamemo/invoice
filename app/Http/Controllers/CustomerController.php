<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
class CustomerController extends Controller
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
    
    public function create(Customer $customer)
    {
        $customers = $customer::get();
        $lastid = $customer::select('id')->latest()->get();
        return Inertia::render('Customer/CreateCustomer',[
            'title' => 'Pembuatan Customer',
            'lastid' => $lastid,
            'customer' => $customers
        ]);
    }

    public function store2(Request $request)
    {
        // dd(json_encode($request));
        $news = new Customer();
        $news->name = $request->name;
        $news->phone = $request->phone;
        $news->save();

        return redirect()->back()->with('message', 'berita berhasil dibuat');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new Customer();
        $news->name = $request->name;
        $news->phone = $request->phone;
        $news->save();

        return redirect()->back()->with('message', 'berita berhasil dibuat');
        // dd($request->all());
        // $data = $request->all();
        // foreach ($request as $key => $value) {
            // $customer = new Customer();
            // $customer->name = $data->name;
            // $customer->phone = $data->phone;
            // $customer->save();
        // }
        // DB::table('customers')->insert($data);
            
        // return redirect()->back()->with('message', 'berita berhasil dibuat');
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
