<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@index')->name('home');

//Blog & Documents
Route::get('/blog/category/{id}', 'BlogController@index')->name('blog');
Route::get('/blog/tag/{slug}', 'BlogController@tag')->name('tag');
Route::get('/blog/{slug}', 'BlogController@show')->name('article');
//-----

Auth::routes();
// Admin Panel
Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' =>'auth'],
    function () {
    Route::get('/', 'DashboardController@index')->name('admin');
    Route::resource('/categories', 'CategoriesController');
    Route::resource('/posts', 'PostsController');
    Route::resource('/tags', 'TagsController');
});
Route::get('/admin/category/{id}', 'Admin\PostsController@category')->name('category')->middleware('auth');;
//-----

//Cars Service
Route::group(['prefix' => 'cars', 'namespace' => 'Cars'], function () {
    Route::get('/', 'ComplectsController@index')->name('complects');
});

//-----------

