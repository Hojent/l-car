<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'id' => 1,
            'title' => 'Citroen',
            'slug' => 'citroen-blog',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('categories')->insert([
            'id' => 2,
            'title' => 'Peugeot',
            'slug' => 'peugeot-blog',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
