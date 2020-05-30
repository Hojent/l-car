<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'username', 'email', 'phone', 'city'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function posts () {
        return $this->hasMany(Post::class);
    }

    public function add($fields) {
        $user = new static();
        $user->fill($fields);
        $user->password = bycrypt($fields['password']);
        $user->admin = 0;
        $user->save();

        return $user;
    }

    public function edit($fields) {
        $this->fill($fields);
        $this->password = $fields['password'];
        $this->save();
    }

    public function remove()
    {
        $this->removeAvatar();
        $this->delete();
    }

    public function removeAvatar()
    {
        if($this->avatar != null)    //avatar - имя колонки
        {
            Storage::delete('uploads/user/' . $this->avatar);
        }
    }

    public function uploadAvatar($image)  //image - просто имя переменной, имя файла
    {
        if($image == null) { return; }
        Storage::delete('uploads/user/' . $this->image);
        $this->removeAvatar();
        $filename = $this->author()->get('username'). '.' . $image->extension();
        $image->storeAs('uploads/user/', $filename);
        $this->avatar = $filename;
        $this->save();
    }

    public function getImage()
    {
        if($this->avatar == null)
        {
            return '/img/no-image.png';
        }

        return '/uploads/' . $this->avatar;
    }

    public function isAdmin() {
        if($this->admin) return true;
        return false;
    }

    public function setAdmin () {
        $this->admin = true;
    }

    public function unsetAdmin() {
        $this->admin = false;
    }

    public function toggleAdmin($value)
    {
        if($value == null)
        {
            return $this->setAdmin();
        }
        return $this->unsetAdmin();
    }



}
