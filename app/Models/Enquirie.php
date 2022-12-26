<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enquirie extends Model
{
    protected $fillable=['username','branch','year','subject_id','question','suggestion','isView','answers','userid'];
    use HasFactory;
}
