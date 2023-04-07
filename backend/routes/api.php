<?php

use App\Http\Controllers\Api\FormController;
use App\Http\Controllers\Api\QuestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(FormController::class)->group(function(){
    Route::get('/forms','index');
    Route::post('/form','store');
    Route::get('/form/{id}','show');
    Route::put('/form/{id}','update');
    Route::delete('/form/{id}','destroy');
});

Route::controller(QuestionController::class)->group(function(){
    Route::get('/questions','index');
    Route::get('/questions/{id}','findByFormId');
    Route::post('/question','store');
    Route::get('/question/{id}','show');
    Route::put('/question/{id}','update');
    Route::delete('/question/{id}','destroy');
});
