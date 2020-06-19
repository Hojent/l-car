<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Post;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('layouts._footer', function($view)
        {
            $view->with('payLinks', Post::getFooterLinks(1));
            $view->with('welinks', Post::getFooterLinks(4));
        });
    }
}