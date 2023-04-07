<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Contracts\Queue\Queue;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::all();
        return $questions;
    }
    public function store(Request $request)
    {
        $question = new Question();
        $question->statement = $request->statement;
        $question->type = $request->type;
        $question->statement = $request->statement;
        $question->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $question = Question::with('alternatives')->find($id);
        return $question;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $question = Question::findOrFail($request->id);
        $question->statement = $request->statement;
        $question->type = $request->type;
        $question->statement = $request->statement;
        $question->save();
        return $question;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $question = Question::destroy($id);
        return $question;
    }
}
