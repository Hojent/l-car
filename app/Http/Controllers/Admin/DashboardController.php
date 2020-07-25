<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complect;

class DashboardController extends Controller
{
    public function index()
    {
        $lastcars = Complect::orderBy('updated_at','desc')->take(3)->get();
        return view('admin.dashboard' , compact('lastcars'));
    }
}
