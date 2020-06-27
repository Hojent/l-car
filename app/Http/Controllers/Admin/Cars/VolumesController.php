<?php

namespace App\Http\Controllers\Admin\Cars;

use App\Http\Controllers\Controller;
use App\Models\Dictes\Volume;
use Illuminate\Http\Request;

class VolumesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $volumes = Volume::all()->sortBy('title');
        return view('admin.dictes.volumes.index', ['volumes' => $volumes]);
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
            'title' => 'required'
        ]);
        Volume::create($request->all());
        return redirect(route('volumes.index'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Volume  $volume
     * @return \Illuminate\Http\Response
     */
    public function edit(Volume $volume)
    {
        return view('admin.dictes.volumes.edit', ['volume' => $volume]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dictes\Volume  $volume
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Volume $volume)
    {
        $this->validate($request, [
            'volume'	=>	'required' //обязательно
        ]);
        $volume->update($request->all());
        return redirect(route('volumes.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dictes\Volume  $volume
     * @return \Illuminate\Http\Response
     */
    public function destroy(Volume $volume)
    {
        $volume->delete();
        return redirect(route('volumes.index'));
    }
}
