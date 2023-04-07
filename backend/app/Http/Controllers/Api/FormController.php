<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        $forms = Form::all();
        return $forms;
    }

    public function store(Request $request)
    {
        $form = new Form();
        $form->name = $request->name;
        $form->save();
    }

    public function show(string $id)
    {
        $form = Form::with('questions')->find($id);
        return $form;
    }

    public function update(Request $request, string $id)
    {
        $form = Form::findOrFail($request->id);
        $form->name = $request->name;
        $form->save();
        return $form;
    }

    public function destroy(string $id)
    {
        $form = Form::destroy($id);
        return $form;
    }
}
