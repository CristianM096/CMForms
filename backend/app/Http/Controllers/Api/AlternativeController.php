<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Alternative;
use Illuminate\Http\Request;

class AlternativeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $alternatives = Alternative::all();
        return $alternatives;
    }
    public function findByQuestionId(string $id){
        $alternatives = Alternative::where('question_id',$id)->get();
        return $alternatives;
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $alternative = new Alternative();
        $alternative->value = $request->value;
        $alternative->isCorrect = $request->isCorrect;
        $alternative->question_id = $request->question_id;
        $alternative->save();
        return $alternative;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $alternative = Alternative::findOrFail($request->id);
        $alternative->value = $request->value;
        $alternative->isCorrect = $request->isCorrect;
        $alternative->save();
        return $alternative;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $alternative = Alternative::destroy($id);
        return $alternative;
    }
}
