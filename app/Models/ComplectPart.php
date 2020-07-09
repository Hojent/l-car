<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;


class ComplectPart extends Pivot
{
    public $incrementing = true;

    public function getGroups ()
    {
        return;
    }
}
