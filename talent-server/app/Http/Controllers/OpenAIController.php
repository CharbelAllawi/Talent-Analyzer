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

    $maxRetries = 100;
    $retryCount = 0;

    while ($retryCount < $maxRetries) {
      $jsonresult = $client->completions()->create([
        'model' => 'gpt-3.5-turbo-instruct',
        'prompt' => $existingContent,
        'max_tokens' => 2048,
      ]);

      $response = $jsonresult['choices'][0]['text'];
      $resultData = json_decode($response, true);

      if (is_array($resultData) && isset($resultData['result']) && isset($resultData['candidate_skills'])) {
        break;
      } else {
        error_log("OpenAI API response did not contain expected data: " . $response);
        sleep(2);
        $retryCount++;
      }
    }

    if ($retryCount === $maxRetries) {
      return "Max retries reached, unable to get a valid response.";
    }

    $result = new Result([
      'candidate_id' => $request->id,
      'result' => $resultData['result'],
      'candidate_skills' => $resultData['candidate_skills'],
    ]);

    $result->save();

    return $resultData['result'];
  }
}
