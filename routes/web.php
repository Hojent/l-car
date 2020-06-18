<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@index')->name('home');

Auth::routes();

//Blog & Documents
Route::get('/blog/category/{id}', 'BlogController@index')->name('blog');
Route::get('/blog/tag/{slug}', 'BlogController@tag')->name('tag');
Route::get('/blog/{slug}', 'BlogController@show')->name('article');
//-----

// Admin Panel
Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {
    Route::get('/', 'DashboardController@index')->name('admin');
    Route::resource('/categories', 'CategoriesController');
    Route::resource('/posts', 'PostsController');
    Route::resource('/tags', 'TagsController');
});
Route::get('/admin/category/{id}', 'Admin\PostsController@category')->name('category');
//-----

//Cars Service
Route::group(['prefix' => 'cars', 'namespace' => 'Cars'], function () {
    Route::get('/', 'ComplectsController@index')->name('complects');
});

//-----------

