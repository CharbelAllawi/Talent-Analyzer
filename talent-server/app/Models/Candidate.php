<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = ['full_name', 'date_of_birth', 'email', 'phone', 'image_url', 'position'];


    public function answers()
    {
        return $this->hasMany('App\Answer');
    }
}
