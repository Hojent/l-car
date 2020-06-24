<?php

namespace App\Models\Dictes;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Group extends Model
{
    use Sluggable;

    protected $fillable = [ 'group'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'group'
            ]
        ];
    }
}
