<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    public function user()
    {
        // return $this->belongsTo(User::class, 'user_id');
        return $this->belongsTo('App\User');
    }
    public function answers()
    {
        return $this->hasMany('App\Answer');
    }
}
