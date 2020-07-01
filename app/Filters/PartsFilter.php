<?php
/**
 * Created by PhpStorm.
 * User: German
 * Date: 01.07.2020
 * Time: 19:29
 */

namespace App\Filters;

use App\Filters\AbstractFilter;


class PartsFilter extends AbstractFilter
{
        /**
     * @return mixed
     */
    public function group_id($value)
    {
        $this->builder->where('group_id', $value);

        return $this->builder;
    }


}