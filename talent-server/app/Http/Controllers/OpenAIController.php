<?php

namespace App\Http\Controllers;

use App\Models\Result;
use Illuminate\Http\Request;
use OpenAI;

class OpenAIController extends Controller
{
    public function openai(Request $request)
    {
        $yourApiKey = getenv('OPENAI_API_KEY');
        $client = OpenAI::client($yourApiKey);
        $filePath = storage_path('app/public/candidatestext/' . $request->id . '.txt');
        $existingContent = file_get_contents($filePath);
        $jsonresult = $client->completions()->create([
            'model' => 'gpt-3.5-turbo-instruct',
            'prompt' => $existingContent,
            'max_tokens' => 2048,
        ]);

        $resultData = json_decode($jsonresult['choices'][0]['text'], true);

        $result = new Result([
            'candidate_id' => $request->id,
            'result' => $resultData['result'],
            'percentage' => $resultData['percentage'],
        ]);

        $result->save();
        return $jsonresult['choices'][0]['text'];
    }
}
