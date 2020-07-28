<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Models\Brand;
use App\Models\Model as CarModel;
use App\Models\Dictes\Motor;
use App\Models\Dictes\Year;
use App\Models\Dictes\Volume;
use App\Models\Dictes\Body;
use App\Models\Dictes\Group;
use App\Models\Complect;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $brands = Brand::pluck('title', 'id');
        $years = Year::pluck('year', 'id');
        $motors = Motor::pluck('motor', 'id');
        $bodies = Body::pluck('body', 'id');
        $volumes = Volume::pluck('title', 'id');
        $groups = Group::pluck('group', 'id');
        $cars = Complect:: where([
                ['status', '=', 1],
            ])
            ->with('brand')
        ->orderBy('created_at', 'desc')
        ->get();

        $posts = Post::where([
            ['is_featured', '=', 1],
            ['status', '=', 1],
            ['category_id', '=', 3],
            ])
            ->orderBy('created_at', 'desc')
            ->paginate(3);

        return view('blog.home', [
            'posts' => $posts,
            'brands' => $brands,
            'years' => $years,
            'bodies' => $bodies,
            'motors' => $motors,
            'volumes' => $volumes,
            'groups' => $groups,
            'cars' => $cars,
        ]);
    }
}
