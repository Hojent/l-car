<?php

namespace App\Http\Controllers\Admin\Cars;

use App\Http\Controllers\Controller;
use App\Models\Dictes\Motor;
use Illuminate\Http\Request;

class MotorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $motors = Motor::all();
        return view('admin.dictes.motors.index', ['motors' => $motors]);
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
            'motor' => 'required'
        ]);
        Motor::create($request->all());
        return redirect(route('motors.index'));
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dictes\Motor  $motor
     * @return \Illuminate\Http\Response
     */
    public function edit(Motor $motor)
    {
        return view('admin.dictes.motors.edit', [
            'motor' => $motor,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dictes\Motor  $motor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Motor $motor)
    {
        $this->validate($request, [
            'motor'	=>	'required' //обязательно
        ]);
        $motor->update($request->all());
        return redirect(route('motors.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dictes\Motor $motor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Motor $motor)
    {
        $motor->delete();
        return redirect()->route('motors.index');
    }
}
