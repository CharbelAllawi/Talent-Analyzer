<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Compare;
use Illuminate\Http\Request;

class CompareController extends Controller
{
    public function compare(Request $request)
    {
        $compare = new Compare;
        $compare->candidate_id = $request->candidate_id;
        $compare->user_id = auth()->user()->id;
        $compare->save();

        return response()->json(["status" => "Compare successfully"]);
    }
    public function uncompare(Request $request)
    {
        $user_id = auth()->user()->id;
        $candidate = Candidate::find($request->candidate_id);
        if (!$candidate) {
            return response()->json(['status' => 'Candidate was not found']);
        }
        $existingcomprare = Compare::where('user_id', $user_id)->where('candidate_id', $request->candidate_id)->first();
        $existingcomprare->delete();
        return response()->json(['status' => 'UnCompared']);
    }
}
