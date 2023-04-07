<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Alternative;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::all();
        return $questions;
    }

    public function findByFormId(string $id){
        $questions = Question::with('alternatives')->where('form_id',$id)->get();
        return $questions;
    }

    public function store(Request $request)
    {
        $question = new Question();
        $question->statement = $request->statement;
        $question->type = $request->type;
        $question->form_id = $request->form_id;
        $question->save();
        $alternatives = collect($request->alternatives);
        $alternativesToSave = collect();

        foreach ($alternatives as $alternative) {
            $newAlternative = new Alternative();
            $newAlternative->value = $alternative['value'];
            $newAlternative->isCorrect = $alternative['isCorrect'];
            $alternativesToSave->push($newAlternative);
        }
        $question->alternatives()->createMany($alternativesToSave->toArray());
        return $question;
    }

    public function show(string $id)
    {
        $question = Question::with('alternatives')->find($id);
        return $question;
    }

    public function update(Request $request, string $id)
    {
        $question = Question::findOrFail($request->id);
        $question->statement = $request->statement;
        $question->type = $request->type;
        $question->form_id = $request->form_id;
        $question->save();
        return $question;
    }

    public function destroy(string $id)
    {
        $question = Question::destroy($id);
        return $question;
    }
}
