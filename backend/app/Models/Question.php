<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = ['statement','type'];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }
    public function alternatives()
    {
        return $this->hasMany(Alternative::class);
    }
}
