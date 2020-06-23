<?php

namespace App\Http\Controllers\Admin\Cars;

use App\Models\Dictes\Body;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BodiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::all();
        return view('admin.tags.index', ['tags' => $tags]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Body  $body
     * @return \Illuminate\Http\Response
     */
    public function show(Body $body)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Body  $body
     * @return \Illuminate\Http\Response
     */
    public function edit(Body $body)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Body  $body
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Body $body)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Body  $body
     * @return \Illuminate\Http\Response
     */
    public function destroy(Body $body)
    {
        //
    }
}
