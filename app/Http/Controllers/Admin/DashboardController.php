<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complect;

class DashboardController extends Controller
{
    public function index()
    {
        $lastcar = Complect::where('updated_at', Complect::max('updated_at'))->orderBy('updated_at','desc')->first();

        return view('admin.dashboard' , compact('lastcar'));
    }
}
