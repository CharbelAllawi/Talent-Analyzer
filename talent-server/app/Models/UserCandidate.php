<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCandidate extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'user_candidates';
    protected $fillable = ['user_id', 'candidate_id'];
    
}
