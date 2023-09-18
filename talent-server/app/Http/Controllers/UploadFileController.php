<?php

namespace App\Http\Controllers;

use App\Models\UserCandidate;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UploadFileController extends Controller
{
    public function uploadFile(Request $request)
    {
        $user = Auth::user();
        $user_id = $user->id;
        $request->validate([
            'file' => 'required|mimes:mp4'
        ]);

        $video = $request->file('file');
        $videoName = Str::random(10) . '.mp3';

        $originalname = $video->getClientOriginalName();
        $originalname = Str::replaceLast('.mp4', '_', $originalname);
        $video->storeAs('uploads',  $originalname . $videoName, 'public');

        $outputPath = storage_path('app/public/uploads/' .  $originalname . $videoName);
        $audioPath = storage_path('app/public/uploads/' . Str::replaceLast('.mp4', '.mp3', $originalname . $videoName));

        exec("ffmpeg -i $outputPath -vn -acodec mp3 -ab 192k -y $audioPath");
        $user_candidate = new UserCandidate([
            'user_id' => $user_id,
            'candidate_id' => $request->candidate_id
        ]);
        $user_candidate->save();
        return response()->json([
            'message' => 'Video converted to audio successfully',
            'audio_filename' => basename($audioPath),
        ]);
    }
}
