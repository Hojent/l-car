<?php

namespace App\Models\Dictes;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Complect;

class Year extends Model
{
    use Sluggable;

    protected $fillable = [ 'year'];

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
                'source' => 'year'
            ]
        ];
    }
}
