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
        $customers = Customer::get();$notification = session('notification');
        return Inertia::render('Customer/IndexCustomer', [
            'title' => 'Data Customer',
            'notification' => $notification,
            'customer' => $customers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    public function create(Customer $customer)
    {
        $customers = $customer::get();
        $lastid = $customer::select('id')->latest()->get();
        return Inertia::render('Customer/CreateCustomer', [
            'title' => 'Pembuatan Customer',
            'lastid' => $lastid,
            'customer' => $customers
        ]);
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

        return to_route('index.customer')->with('notification', ['show' => true, 'statusNotif' => 'success', 'message' => 'Invoice berhasil dibuat!']);
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
    public function edit(Customer $customers, Request $request)
    {
        return Inertia::render('Customer/EditCustomer', [
            'title' => 'Edit Customer',
            'customer' => $customers->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        Customer::where('id', $request->id)->update([
            'name' => $request->name,
            'phone' => $request->phone
        ]);
        return to_route('index.customer');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $customers = Customer::find($request->id);
        $customers->delete();
        return redirect()->back()->with('message', 'berita berhasil dihapus');
    }
}
