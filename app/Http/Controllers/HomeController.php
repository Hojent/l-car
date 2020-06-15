<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

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
        $posts = Post::where([
            ['is_featured', '=', 1],
            ['status', '=', 1]
            ])
            ->orderBy('created_at', 'desc')
            ->paginate(3);
        return view('blog.index', [
            'posts' => $posts,
        ]);
    }
}
