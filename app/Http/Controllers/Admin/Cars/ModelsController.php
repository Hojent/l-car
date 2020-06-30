<?php

namespace App\Http\Controllers\Admin\Cars;

use App\Http\Controllers\Controller;
use App\Models\Model;
use Illuminate\Http\Request;
use App\Models\Brand;

class ModelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = Model::with('brand')->get();
        return view('admin.cars.models.index', ['models' => $models, 'cid' => false]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $brands =Brand::pluck('title','id');
        return view('admin.cars.models.create', [
            'brands' => $brands,
        ]);
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
            'title' => 'required',
        ]);
        $model = Model::create($request->all());
        $model->setBrand($request->get('brand_id'));
        return redirect(route('models.index'));
    }

       /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Model  $model
     * @return \Illuminate\Http\Response
     */
    public function edit(Model $model)
    {
        $brands = Brand::pluck('title','id');
        $brand = $model->getBrandID();
        return view('admin.cars.models.edit', compact(
            'brands','model','brand'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Model  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Model $model)
    {
        $this->validate($request, [
            'title'	=>	'required',
        ]);
        $model->update($request->all());
        $model->setBrand($request->get('brand_id'));
        return redirect(route('models.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Model  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy(Model $model)
    {
        $model->delete();
        return redirect(route('models.index'));
    }

    /**
     * Creats Models list by Brand ID
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\Response
     */
    public function get_by_brand(Request $request)
    {
        //abort_unless(\Gate::allows('city_access'), 401);
        if (!$request->brand_id) {
            $html = '<option value="">Модель</option>';
        } else {
            $html = '';
            $models = Model::where('brand_id', $request->brand_id)->get();
            foreach ($models as $model) {
                $html .= '<option value="'.$model->id.'">'.$model->title.'</option>';
            }
        }

        return response()->json(['html' => $html]);
    }
}
