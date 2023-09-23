<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Compare;
use Illuminate\Http\Request;
use OpenAI;

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
    public function comparecandidates(Request $request)
    {
        $yourApiKey = getenv('OPENAI_API_KEY');
        $client = OpenAI::client($yourApiKey);
        $jsonresult = $client->completions()->create([
            'model' => 'gpt-3.5-turbo-instruct',
            'prompt' => $request->prompt,
            'max_tokens' => 2048,
        ]);
        $resultData = json_decode($jsonresult['choices'][0]['text'], true);
        while (!isset($resultData['result'])) {
            $jsonresult = $client->completions()->create([
                'model' => 'gpt-3.5-turbo-instruct',
                'prompt' => $request->prompt,
                'max_tokens' => 2048,
            ]);
            $resultData = json_decode($jsonresult['choices'][0]['text'], true);
        }
        return $jsonresult['choices'][0]['text'];
    }
}
