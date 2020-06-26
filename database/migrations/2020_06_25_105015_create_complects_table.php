<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->longText('description')->nullable();
            $table->integer('doors');
            $table->string('color')->default('no color');
            $table->string('images')->default('/images/no-car.jpg')->comment('Main photo');
            $table->integer('brand_id');
            $table->integer('model_id');
            $table->integer('year_id');
            $table->integer('volume_id');
            $table->integer('motor_id');
            $table->integer('body_id');
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('complects');
    }
}
