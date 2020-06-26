<?php

namespace App\Models\Dictes;

use Illuminate\Database\Eloquent\Model;
use App\Models\Complect;

class Volume extends Model
{
    protected $fillable = [ 'title'];

    public function complects() {
        return $this->hasMany(Complect::class);
    }
}
