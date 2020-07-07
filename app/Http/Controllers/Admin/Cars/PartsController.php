<?php

namespace App\Http\Controllers\Admin\Cars;

use App\Filters\PartsFilter;
use App\Http\Controllers\Controller;
use App\Models\Part;
use App\Models\Dictes\Group;
use Illuminate\Http\Request;

class PartsController extends Controller
{
    const PARTS_PAGES = 4;

    /**
     * Display a listing of the resource.
     * @var integer $gid - group ID
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, PartsFilter $filters)
    {
        //$parts = Part::with('group');
        $parts = Part::with('group')->filter($filters)    //call scope method scopeFiter() of the Part model
            ->get();
            //->paginate(self::PARTS_PAGES)
            //->appends('group_id', $request->get('group_id'));

        $groups = Group::pluck('group', 'id');
        return view('admin.cars.parts.index', [
            'parts' => $parts,
            'gid' => false,
            'groups' => $groups]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'group_id' => 'required',
        ]);
        $part = Part::create($request->all());
        $part->setGroup($request->get('group_id'));

        return redirect(route('parts.index'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Part $part
     * @return \Illuminate\Http\Response
     */
    public function edit(Part $part)
    {
        $groups = Group::pluck('group', 'id');
        $group = $part->getGroupID();
        return view('admin.cars.parts.edit', compact(
            'groups', 'part', 'group'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Part $part
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Part $part)
    {
        $this->validate($request, [
            'title' => 'required',
        ]);
        $part->update($request->all());
        $part->setGroup($request->get('group_id'));
        return redirect(route('parts.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Part $part
     * @return \Illuminate\Http\Response
     */
    public function destroy(Part $part)
    {
        $part->delete();
        return redirect(route('parts.index'));
    }


    /**
     * Creats Parts list by Group ID
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\Response
     */
    public function get_by_group(Request $request)
    {
        //abort_unless(\Gate::allows('city_access'), 401);
        if (!$request->group_id) {
            $html = '<option value="">Категория запчастей</option>';
        } else {
            $html = '';
            $parts = Part::where('group_id', $request->group_id)->get();
            foreach ($parts as $part) {
                $html .= '<option value="'.$part->id.'">'.$part->title.'</option>';
            }
        }

        return response()->json(['html' => $html]);
    }
}