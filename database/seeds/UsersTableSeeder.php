<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'Admin Admin',
            'username' => 'admin',
            'email' => 'admin@web-project.by',
            'email_verified_at' => now(),
            'password' => Hash::make('secret'),
            'phone' => '2223344',
            'city' => 'Minsk',
            'admin' => true,
            'created_at' => now(),
            'updated_at' => now()
        ]);       
    }
}
