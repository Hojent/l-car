<?php
/**
 * Created by PhpStorm.
 * User: German
 * Date: 01.07.2020
 * Time: 19:29
 */

namespace App\Filters;


abstract class AbstractFilter
{
    protected $builder;
    protected $request;

    public function __construct($builder, $request)
    {
        $this->builder =  $builder;
        $this->request = $request;
    }

    /**
     * @return mixed
     */
    public function apply()
    {
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