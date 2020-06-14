<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->sentence,
        'content' => $faker->sentence,
        'image' => 'product-2.jpg',
        'views'	=>	$faker->numberBetween(0, 5000),
        'category_id'	=>	1,
        'user_id'	=>	1,
        'status'	=>	1,
        'is_featured'	=>	0, ];
});
