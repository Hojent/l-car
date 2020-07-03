<?php

namespace App\Http\Controllers\Admin\Cars;

use App\Http\Controllers\Controller;
use App\Models\Complect;
use App\Models\Brand;
use App\Models\Model as CarModel;
use App\Models\Dictes\Motor;
use App\Models\Dictes\Year;
use App\Models\Dictes\Volume;
use App\Models\Dictes\Body;
use Illuminate\Http\Request;

class ComplectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($brandId = 0)
    {

        $complects = Complect::with(['brand','model', 'volume', 'motor', 'body', 'year']);
        if($brandId != 0) {
            $complects = $complects->where('brand_id', $brandId);
        }
         $complects = $complects->get();
        return view ('admin.cars.complects.index', [
            'complects' => $complects,
            'cid' => false
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $brands = Brand::pluck('title', 'id');
        //$models = CarModel::pluck('title', 'id');
        $years = Year::pluck('year', 'id');
        $motors = Motor::pluck('motor', 'id');
        $bodies = Body::pluck('body', 'id');
        $volumes = Volume::pluck('title', 'id');
        $doors = array(2=>2, 3=>3, 4=>4, 5=>5); //array for select tag
        return view ('admin.cars.complects.create', compact(
            'brands',
            'years',
            'motors',
            'bodies',
            'volumes',
            'doors'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $complect = Complect::create($request->all());
        //$complect->uploadMainImage($request->file('images'));
        $complect->setBrand($request->get('brand_id'));
        $complect->setModel($request->get('model_id'));
        $complect->setBody($request->get('body_id'));
        $complect->setMotor($request->get('motor_id'));
        $complect->setVolume($request->get('volume_id'));
        $complect->setYear($request->get('year_id'));
        $complect->toggleStatus($request->get('status'));
        return redirect(route('complects.index'));

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Complect  $complect
     * @return \Illuminate\Http\Response
     */
    public function edit(Complect $complect)
    {
        $brands = Brand::pluck('title', 'id');
        $years = Year::pluck('year', 'id');
        $motors = Motor::pluck('motor', 'id');
        $bodies = Body::pluck('body', 'id');
        $volumes = Volume::pluck('title', 'id');
        $doors = array(2=>2, 3=>3, 4=>4, 5=>5); //array for select tag
        //real data
        //$carParts = $complect->parts->pluck('id')->all();
        $brand = $complect->getBrandID();
        $models = CarModel::where('brand_id', '=', $brand)->pluck('title', 'id');
        $model = $complect->getModelID();
        $year = $complect->getYearID();
        $motor = $complect->getMotorID();
        $body = $complect->getBodyID();
        $volume = $complect->getVolumeID();
        $door = $complect->doors;
        return view ('admin.cars.complects.edit', compact(
   'complect',
   'brands','models', 'years', 'motors', 'bodies','volumes','doors',
      'brand', 'model', 'year', 'motor', 'body', 'volume', 'door'
            ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Complect  $complect
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Complect $complect)
    {
        $this->validate($request, [
            'title'	=>	'required',
        ]);
        $complect->update($request->all());
        //$complect->uploadMainImage($request->file('images'));
        $complect->setBrand($request->get('brand_id'));
        $complect->setMotor($request->get('motor_id'));
        $complect->setYear($request->get('year_id'));
        $complect->setVolume($request->get('volume_id'));
        $complect->setModel($request->get('model_id'));
        $complect->setBody($request->get('body_id'));
                //$complect->setParts($request->get('parts'));
        $complect->toggleStatus($request->get('status'));

        return redirect(route('complects.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Complect  $complect
     * @return \Illuminate\Http\Response
     */
    public function destroy(Complect $complect)
    {
        $complect->delete();
        return redirect(route('complects.index'));
    }
}
