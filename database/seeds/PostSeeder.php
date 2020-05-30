<?php

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'id' => 1,
            'title' => 'Post # 1 - первый пост',
            'slug' => 'post-1',
            'content' => '<p>slkdjfhn <b>a;dkjf</b> salkdjfh alkjsdfhlaksjehf alksdjnf</p>',
            'image' => null,
            'category_id' => 1,
            'user_id' => 1,
            'status' => false,
            'views' => 0,
            'is_featured' => false,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('posts')->insert([
            'id' => 2,
            'title' => 'Post # 2 - второй пост',
            'slug' => 'post-2',
            'content' => '<p>текст простой <b>жирый</b> salkdjfh alkjsdfhlaksjehf alksdjnf</p>',
            'image' => null,
            'category_id' => 2,
            'user_id' => 2,
            'status' => false,
            'views' => 0,
            'is_featured' => false,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
