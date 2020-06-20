<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@index')->name('home');

//Blog & Documents
Route::get('/blog/category/{id}', 'BlogController@index')->name('blog');
Route::get('/blog/tag/{slug}', 'BlogController@tag')->name('tag');
Route::get('/blog/{slug}', 'BlogController@show')->name('article');
//-----

//Auth::routes();
Auth::routes(['register' => false]);
// Admin Panel
Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' =>'auth'],
    function () {
    Route::get('/', 'DashboardController@index')->name('admin');
    Route::resource('/categories', 'CategoriesController');
    Route::resource('/posts', 'PostsController');
    Route::resource('/tags', 'TagsController');
    //Route::resource('/profile', 'ProfileController' );
    Route::get('/profile', 'ProfileController@index')->name('profile.index');
    Route::get('/profile/edit', 'ProfileController@edit')->name('profile.edit');
    Route::put('/profile', 'ProfileController@update')->name('profile.update');

});
Route::get('/admin/category/{id}', 'Admin\PostsController@category')->name('category')->middleware('auth');;
//-----

//Cars Service
Route::group(['prefix' => 'cars', 'namespace' => 'Cars'], function () {
    Route::get('/', 'ComplectsController@index')->name('complects');
});

//-----------

