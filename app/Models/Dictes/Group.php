<?php

namespace App\Models\Dictes;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Part;

class Group extends Model
{
    use Sluggable;

    protected $fillable = [ 'group'];

    public function parts() {
        return $this->hasMany(Part::class);
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
                'source' => 'group'
            ]
        ];
    }

    public function getGroupsList () {

        //
    }
}
