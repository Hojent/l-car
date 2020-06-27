<?php

namespace App\Http\Controllers\Admin\Cars;

use App\Http\Controllers\Controller;
use App\Models\Dictes\Year;
use Illuminate\Http\Request;

class YearsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $years = Year::all()->sortBy('year');
        return view('admin.dictes.years.index', ['years' => $years]);
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
            'year' => 'required'
        ]);
        Year::create($request->all());
        return redirect(route('years.index'));
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dictes\Year  $year
     * @return \Illuminate\Http\Response
     */
    public function edit(Year $year)
    {
        return view('admin.dictes.years.edit', [
            'year' => $year,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dictes\Year  $year
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Year $year)
    {
        $this->validate($request, [
            'year'	=>	'required' //обязательно
        ]);
        $year->update($request->all());
        return redirect(route('years.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dictes\Year  $year
     * @return \Illuminate\Http\Response
     */
    public function destroy(Year $year)
    {
        $year->delete();
        return redirect()->route('years.index');
    }

}
