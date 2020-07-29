<?php

namespace App\Http\Controllers\Cars;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complect;
use App\Models\Brand;
use App\Models\Model as CarModel;
use App\Models\Dictes\Motor;
use App\Models\Dictes\Year;
use App\Models\Dictes\Volume;
use App\Models\Dictes\Body;
use App\Models\Dictes\Group;
use App\Filters\ComplectsFilter;

class ComplectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ComplectsFilter $filters)
    {
        $brands = Brand::pluck('title', 'id');
        $years = Year::pluck('year', 'id');
        $motors = Motor::pluck('motor', 'id');
        $bodies = Body::pluck('body', 'id');
        $volumes = Volume::pluck('title', 'id');
        $groups = Group::pluck('group', 'id');

        $cars = Complect::with(['brand', 'model', 'volume', 'motor', 'body', 'year'])
            ->where('status', 1)->filter($filters)
            ->get();


        return view('cars.index', [
            'cars' => $cars,
            'brands' => $brands,
            'years' => $years,
            'bodies' => $bodies,
            'motors' => $motors,
            'volumes' => $volumes,
            'groups' => $groups,
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

    public function searchCar()
    {
        //
    }

}
