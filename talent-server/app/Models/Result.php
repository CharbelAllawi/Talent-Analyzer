<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = ['candidate_id', 'result', 'percentage'];

    public function candidate()
    {
        return $this->belongsTo('App\Candidate');
    }
}
