<?php
/**
 * Created by PhpStorm.
 * User: German
 * Date: 01.07.2020
 * Time: 19:29
 */

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class AbstractFilter
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @return mixed
     */
    public function apply(Builder $builder)
    {
       $this->builder = $builder;
       foreach ($this->filters() as $filter => $value ) {
           if (method_exists($this, $filter)) {
               $this->$filter($value);
           }
       }
        return $this->builder;
    }

    /**
     * @return mixed
     */
    public function filters()  //вернет динамический список всех доступных фильтров
    {
        return $this->request->all();
    }
}