<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alternative extends Model
{
    use HasFactory;
    protected $fillable = ['value','isCorrect'];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
