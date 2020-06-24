<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Cviebrock\EloquentSluggable\Sluggable;

class Model extends BaseModel
{
    use Sluggable;

    protected $fillable = ['title'];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function getBrand()
    {
        return ($this->brand != null)
            ? $this->brand->title
            : 'Нет категории';
    }

    public function getBrandID()
    {
        return $this->brand != null ? $this->brand->id : null;
    }

    public function setBrand($id)
    {
        if ($id == null) return;
        $this->brand_id = $id;
        $this->save();
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
