<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = ['full_name', 'date_of_birth', 'email', 'phone', 'image_url', 'position'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_candidates', 'candidate_id', 'user_id');
    }
    public function results()
    {
        return $this->hasOne(Result::class, 'candidate_id', 'id');
    }

    public function compares()
    {
        return $this->hasMany(Compare::class, 'candidate_id', 'id');
    }
}
