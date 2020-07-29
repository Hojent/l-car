<?php
/**
 * Created by PhpStorm.
 * User: German
 * Date: 01.07.2020
 * Time: 19:29
 */

namespace App\Filters;

use App\Filters\AbstractFilter;


class ComplectsFilter extends AbstractFilter
{
        /**
     * @return mixed
     */
    public function brand_id($value)
    {
        if ($value != null) {
            $this->builder->where('brand_id', $value);
        }

        return $this->builder;
    }

    public function model_id($value)
    {
        if ($value != null) {
            $this->builder->where('model_id', $value);
        }

        return $this->builder;
    }
    public function year_id($value)
    {
        if ($value != null) {
            $this->builder->where('year_id', $value);
        }

        return $this->builder;
    }

    public function body_id($value)
    {
        if ($value != null) {
            $this->builder->where('body_id', $value);
        }

        return $this->builder;
    }

    public function volume_id($value)
    {
        if ($value != null) {
            $this->builder->where('volume_id', $value);
        }

        return $this->builder;
    }

    public function motor_id($value)
    {
        if ($value != null) {
            $this->builder->where('motor_id', $value);
        }

        return $this->builder;
    }

    public function group_id($value)
    {
        if ($value != null) {
            //$this->builder->where('group_id', $value);
            $this->builder->whereHas('parts', function ($builder) use ($value) {
                $builder->where('group_id', $value);
            });
        }
        return $this->builder;
    }



}