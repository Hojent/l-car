<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
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
            'username' => 'ira',
            'email' => 'admin@black.com',
            'email_verified_at' => now(),
            'password' => Hash::make('secret'),
            'phone' => '2223344',
            'city' => 'Minsk',
            'admin' => true,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('users')->insert([
            'id' => 2,
            'name' => 'Filin Fox',
            'username' => 'filin',
            'email' => 'filin@black.com',
            'email_verified_at' => now(),
            'password' => Hash::make('secret'),
            'phone' => '111222',
            'city' => 'london',
            'admin' => false,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
