<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Model as CarModel;

class Brand extends BaseModel
{
    use Sluggable;

    protected $fillable = [ 'title'];

    public function models() {
        return $this->hasMany(CarModel::class);
    }

    public function complects() {
        return $this->hasMany(Complect::class);
    }

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
