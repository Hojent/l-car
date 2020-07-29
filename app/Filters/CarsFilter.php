<?php
/**
 * Created by PhpStorm.
 * User: German
 * Date: 01.07.2020
 * Time: 19:29
 */

namespace App\Filters;

use App\Filters\AbstractFilter;


class CarsFilter extends AbstractFilter
{
        /**
     * @return mixed
     */
    public function brand_id($value)
    {
        $this->builder->where('brand_id', $value);

        return $this->builder;
    }


}