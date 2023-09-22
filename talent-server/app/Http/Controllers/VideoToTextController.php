<?php

namespace App\Http\Controllers;

use App\Models\UserCandidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;

class VideoToTextController extends Controller
{
    public function transcribe(Request $request)
    {
        $user = Auth::user();
        $user_id = $user->id;
        if ($request->hasFile('video')) {
            $videoFile = $request->file('video');
            if (!$videoFile->isValid()) {
                return response()->json(['error' => 'Invalid video file'], 400);
            }

            $headers = [
                'Authorization' => 'Bearer ' . config('services.openai.api_key'),
            ];

            $data = [
                'model' => 'whisper-1',
            ];
            $response = Http::withHeaders($headers)
                ->attach('file', file_get_contents($videoFile->path()), $videoFile->getClientOriginalName())
                ->post('https://api.openai.com/v1/audio/transcriptions', $data);

            if ($response->successful()) {
                $transcription = $response->json();
                $destinationPath = storage_path('app/public/candidatestext');
                if (!File::isDirectory($destinationPath)) {
                    File::makeDirectory($destinationPath, 0755, true, true);
                }
                $fileName = $request->id . '.txt';
                $filePath = $destinationPath . '/' . $fileName;
                $text = "Candidate Interview:" . PHP_EOL;
                file_put_contents($filePath, $text . $transcription['text'], FILE_APPEND);

                $user_candidate = new UserCandidate([
                    'user_id' => $user_id,
                    'candidate_id' => $request->id
                ]);
                $user_candidate->save();
                return response()->json($transcription);
            } else {
                return response()->json(['error' => 'Error connecting to the Whisper API'], 500);
            }
        } else {
            return response()->json(['error' => 'No file was uploaded'], 400);
        }
    }
}
