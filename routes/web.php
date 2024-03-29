<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@index')->name('home');
Route::post('/send-email', 'FeedbackController@send')->name('send');
Route::get('/get_by_brand', 'HomeController@get_by_brand')->name('get_by_brand_home');
//Route::get('/send-email', 'FeedbackController@send')->name('sent');
//Route::get('models/get_by_brand', 'ModelsController@get_by_brand')->name('get_by_brand');

//Blog & Documents
Route::get('/blog/category/{id}', 'BlogController@index')->name('blog');
Route::get('/blog/tag/{slug}', 'BlogController@tag')->name('tag');
Route::get('/blog/{slug}', 'BlogController@show')->name('article');
//-----
//Cars Service
Route::group(['prefix' => 'cars', 'namespace' => 'Cars'], function () {
    Route::get('/', 'ComplectsController@index')->name('cars');
    Route::get('/{id}/', 'ComplectsController@show')->name('car');

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
    Route::resource('/volumes', 'Cars\VolumesController');
    Route::resource('/brands', 'Cars\BrandsController');
    Route::resource('/models', 'Cars\ModelsController');
    Route::resource('/parts', 'Cars\PartsController');
    Route::resource('/complects', 'Cars\ComplectsController');
    Route::get('/brand/{brand_id}', 'Cars\ComplectsController@index')->name('complect.brand');
    Route::get('/models/edit/get_by_brand', 'Cars\ModelsController@get_by_brand')->name('get_by_brand');
    Route::get('/parts/{id}/get_by_group', 'Cars\PartsController@get_by_group')->name('get_by_group');
    Route::get('/groups/{id}/parts',  'Cars\PartsController@getgroup')->name('groups.parts');
    Route::put('/complects/parts/{complect}/{part}', 'Cars\ComplectsController@updateparts')
           ->name('complect.updateparts');
    Route::delete('/complects/parts/{complect}/{part}/delete', 'Cars\ComplectsController@detachparts')
           ->name('complect.deletepart');
    Route::delete('/complects/parts/{complect}/delchecked', 'Cars\ComplectsController@deleteChekedParts')
           ->name('complect.deleteparts');

//blog part
    Route::resource('/categories', 'CategoriesController');
    Route::resource('/posts', 'PostsController');
    Route::resource('/tags', 'TagsController');
    Route::get('/category/{id}', 'PostsController@category')->name('category');
//user profile part
    Route::get('/profile', 'ProfileController@index')->name('profile.index');
    Route::get('/profile/edit', 'ProfileController@edit')->name('profile.edit');
    Route::put('/profile', 'ProfileController@update')->name('profile.update');

});

//-----



