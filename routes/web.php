<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@index')->name('home');
Route::post('/send-email', 'FeedbackController@send')->name('send');
//Route::get('/send-email', 'FeedbackController@send')->name('sent');

//Blog & Documents
Route::get('/blog/category/{id}', 'BlogController@index')->name('blog');
Route::get('/blog/tag/{slug}', 'BlogController@tag')->name('tag');
Route::get('/blog/{slug}', 'BlogController@show')->name('article');
//-----
//Cars Service
Route::group(['prefix' => 'cars', 'namespace' => 'Cars'], function () {
    Route::get('/', 'ComplectsController@index')->name('complects');
});
//-----------

//Auth::routes();
Auth::routes(['register' => false]);
// Admin Panel
Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' =>'auth'],
    function () {
    Route::get('/', 'DashboardController@index')->name('admin');
// cars's directory part
    Route::resource('/years', 'Cars\YearsController');
    Route::resource('/bodies', 'Cars\BodiesController');
    Route::resource('/motors', 'Cars\MotorsController');
    Route::resource('/groups', 'Cars\GroupsController');
//blog part
    Route::resource('/categories', 'CategoriesController');
    Route::resource('/posts', 'PostsController');
    Route::resource('/tags', 'TagsController');
    //Route::resource('/profile', 'ProfileController' );
//user profile part
    Route::get('/profile', 'ProfileController@index')->name('profile.index');
    Route::get('/profile/edit', 'ProfileController@edit')->name('profile.edit');
    Route::put('/profile', 'ProfileController@update')->name('profile.update');

});
Route::get('/admin/category/{id}', 'Admin\PostsController@category')->name('category')->middleware('auth');;
//-----



