<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complect;
use App\Models\Dictes\Group;

class DashboardController extends Controller
{
    public function index()
    {
        $lastcars = Complect::orderBy('updated_at','desc')->take(2)->get();
        $groups = Group::take(5)->get();
        return view('admin.dashboard' , compact('lastcars', 'groups'));
    }
}
