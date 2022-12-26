<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable=['name','excerpt','description','image','url','category_courses_id'];
    use HasFactory;
}
