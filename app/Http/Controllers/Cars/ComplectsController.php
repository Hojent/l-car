<?php

namespace App\Http\Controllers\Cars;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complect;

class ComplectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cars = Complect::with(['brand', 'model', 'volume', 'motor', 'body', 'year'])
            ->where('status', 1)
            ->orderBy('created_at', 'desc')
            ->paginate(12);

        return view('cars.index', [
            'cars' => $cars
        ]);
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)

    {
        $car = Complect::where('id', $id)->firstOrFail();
        //$brands = Brand::all();
        //$parts = Part::all();
        $brand = $car->getBrand();
        return view('cars.detail', [
            'car' => $car,
            'brand' => $brand,
        ]);

    }

}
