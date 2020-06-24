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
        $bodies = Body::all();
        return view('admin.dictes.bodies.index', ['bodies' => $bodies]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'body' => 'required'
        ]);
        Body::create($request->all());
        return redirect(route('bodies.index'));
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dictes\Body  $body
     * @return \Illuminate\Http\Response
     */
    public function edit(Body $body)
    {
        return view('admin.dictes.bodies.edit', [
            'body' => $body,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dictes\Body  $body
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Body $body)
    {
        $this->validate($request, [
            'body'	=>	'required' //обязательно
        ]);
        $body->update($request->all());
        return redirect(route('bodies.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dictes\Year  $year
     * @return \Illuminate\Http\Response
     */
    public function destroy(Body $body)
    {
        $body->delete();
        return redirect()->route('bodies.index');
    }
}
