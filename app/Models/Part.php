<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Dictes\Group;
use Cviebrock\EloquentSluggable\Sluggable;


class Part extends Model
{
    use Sluggable;

    protected $fillable = ['title'];

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function getGroup()
    {
        return ($this->group != null)
            ? $this->group->group
            : ' - ';
    }

    public function getGroupID()
    {
        return $this->group != null ? $this->group->id : null;
    }

    public function setGroup($id)
    {
        if ($id == null) return;
        $this->group_id = $id;
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

    /**
     *Query constraint
     */
    public function scopeFilter($builder, $filters)
    {
        return $filters->apply($builder);
    }

}
