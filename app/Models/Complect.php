<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Model as CarModel;
use App\Models\Dictes\Motor;
use App\Models\Dictes\Volume;
use App\Models\Dictes\Body;
use App\Models\Dictes\Year;
use Illuminate\Support\Facades\Storage;

class Complect extends BaseModel
{
    use Sluggable;

    const IS_DRAFT = 0;
    const IS_PUBLIC = 1;

    protected $fillable = ['title', 'description', 'doors', 'color'];

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
//Brand relations
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function getBrand()
    {
        return ($this->brand != null)
            ? $this->brand->title
            : 'Марка не выбрана';
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

    //Car Model relations

    public function model()
    {
        return $this->belongsTo(CarModel::class);
    }

    public function getModel()
    {
        return ($this->model != null)
            ? $this->model->title
            : ' -- ';
    }

    public function getModelID()
    {
        return $this->model != null ? $this->model->id : null;
    }

    public function setModel($id)
    {
        if ($id == null) return;
        $this->model_id = $id;
        $this->save();
    }

    //Motor relations

    public function motor()
    {
        return $this->belongsTo(Motor::class);
    }

    public function getMotor()
    {
        return ($this->motor != null)
            ? $this->motor->motor
            : ' - ';
    }

    public function getMotorID()
    {
        return $this->motor != null ? $this->motor->id : null;
    }

    public function setMotor($id)
    {
        if ($id == null) return;
        $this->motor_id = $id;
        $this->save();
    }

    //Body relations

    public function body()
    {
        return $this->belongsTo(Body::class);
    }

    public function getBody()
    {
        return ($this->body != null)
            ? $this->body->body
            : ' - ';
    }

    public function getBodyID()
    {
        return $this->body != null ? $this->body->id : null;
    }

    public function setBody($id)
    {
        if ($id == null) return;
        $this->body_id = $id;
        $this->save();
    }

    //Year relations

    public function year()
    {
        return $this->belongsTo(Year::class);
    }

    public function getYear()
    {
        return ($this->year != null)
            ? $this->year->year
            : ' - ';
    }

    public function getYearID()
    {
        return $this->year != null ? $this->year->id : null;
    }

    public function setYear($id)
    {
        if ($id == null) return;
        $this->year_id = $id;
        $this->save();
    }

    //Volume relations

    public function volume()
    {
        return $this->belongsTo(Volume::class);
    }

    public function getVolume()
    {
        return ($this->volume != null)
            ? $this->volume->title
            : ' - ';
    }

    public function getVolumeID()
    {
        return $this->volume != null ? $this->volume->id : null;
    }

    public function setVolume($id)
    {
        if ($id == null) return;
        $this->volume_id = $id;
        $this->save();
    }

    protected function setDraft()
    {
        $this->status = Complect::IS_DRAFT;
        $this->save();
    }

    protected function setPublic()
    {
        $this->status = Complect::IS_PUBLIC;
        $this->save();
    }

    public function toggleStatus($value)
    {
        if ($value == null) {
            return $this->setDraft();
        }

        return $this->setPublic();
    }

    public function remove()
    {
        $this->removeImage();
        $this->delete();
    }

    public function removeImage()
    {
        if ($this->images != null) {
            Storage::delete('/uploads/cars/' . $this->images);
        }
    }

    public function uploadImage($image)
    {
        if ($image == null) {
            return;
        }
        Storage::delete('uploads/cars' . $this->images);
        $this->removeImage();
        $filename = 'car' . $this->id . '.' . $image->extension();
        $image->storeAs('uploads/cars/', $filename);
        $this->images = $filename;
        $this->save();
    }

    public function getImage()
    {
        if ($this->images == null) {
            return '/uploads/no-image.gif';
        }
        else {
            return '/uploads/cars/'.$this->images;
        }

    }

    public function isStatus($value)
    {
        if ($value == null) {
            return null;
        }
        return true;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function parts()
    {
        return $this->belongsToMany(
            Part::class,
            'complects_parts',
            'complect_id',
            'part_id'
        );
    }

}
