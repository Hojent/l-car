<?php

use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->insert([
            'id' => 1,
            'title' => 'мотор',
            'slug' => 'engine',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('tags')->insert([
            'id' => 2,
            'title' => 'подвеска',
            'slug' => 'podveska',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
