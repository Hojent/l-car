<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Category;
use App\Tag;

class BlogController extends Controller

{
    const BLOG_PAGES = 2;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index($category_id)
    {

        $posts = Post::where([
            ['status', '=', 1],
            ['category_id', '=', $category_id],
        ])
            ->orderBy('created_at', 'desc')
            ->paginate(self::BLOG_PAGES);
        $categoryTitle = $posts->first()->getCategory() ?? 'Наш Блог';
        return view('blog.index', [
            'posts' => $posts,
            'cid' => $category_id,
            'categoryTitle' => $categoryTitle
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $post = Post::where('slug', $slug)->firstOrFail();
        $categories = Category::all();
        $tags = Tag::all();
        $category = $post->getCategory();
       return view('blog.article', [
           'post' => $post,
           'category' => $category,
           'categories' => $categories,
           'tags' => $tags,
       ]);
    }

    /**
     * Display a list of resource.
     *
     * @param  int  $tag_id
     * @return \Illuminate\Http\Response
     */
    public function tag($slug)
    {
        $tag = Tag::where ('slug',$slug)->firstOrFail();
        $tagTitle = $tag->title;
        $posts = $tag->posts()->where('status', '=', 1)
            ->orderBy('created_at', 'desc')
            ->paginate(self::BLOG_PAGES);
        return view('blog.index', [
            'posts' => $posts,
            'tagTitle' => $tagTitle,
        ]);
    }

}
