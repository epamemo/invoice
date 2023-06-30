<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\News;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        $invoice = Invoice::all();
        // $grpo = DB::connection('db_sap')->table('OPDN')->where('DocStatus','=','O')->paginate(20);
        // dd($grpo);
        return Inertia::render('User/Dashboard', [
            'title' => 'Dashboard',
            'invoice' => $invoice,
            // 'grpo' => $grpo,
            'userData' => $user
        ]);

        // $news = News::all();
        // $newsTable = News::all()->sortByDesc('id');
        // $user = User::all();
        // return Inertia::render('User/Dashboard',[
        //     'title' => 'Dashboard',
        //     'myNews' => $news,
        //     'newsTable' => $newsTable,
        //     'userData' => $user
        // ]);
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
        dd($request);
        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->title;
        $news->author = auth()->user()->email;
        $news->save();

        return redirect()->back()->with('message', 'berita berhasil dibuat');
    }
    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $myNews = $news::where('author', auth()->user()->email)->get();
        return Inertia::render('User/History', [
            'myNews' => $myNews
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        //
    }
}
