<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Candidate;
use App\Models\Result;
use App\Models\User;
use App\Models\UserCandidate;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class CandidateController extends Controller
{
    public function addcandidate(Request $request)
    {

        $user = Auth::user();
        $user_id = $user->id;
        $destination_path = storage_path('app/public/candidatesprofile');

        if (!File::isDirectory($destination_path)) {
            File::makeDirectory($destination_path, 0755, true, true);
        }

        $file = $request->file('image');
        $original_file_name = $file->getClientOriginalName();
        $timestamp = now()->format('Ymd_His');
        $file_name = $timestamp . '_' . $original_file_name;
        $file->storeAs('public/candidatesprofile', $file_name);
        $path = 'candidatesprofile/' . $file_name;

        $candidate = new Candidate([
            'full_name' => $request->full_name,
            'date_of_birth' => Carbon::createFromFormat('Y-m-d', $request->date_of_birth)->format('Y-m-d'),
            'email' => $request->email,
            'phone' => $request->phone,
            'image_url' => $file_name,
            'position' => $request->position
        ]);

        $candidate->save();
        $candidateid = $candidate->id;
        return response()->json(['candidate_id' =>   $candidateid]);
    }
    public function getResult(Request $request)
    {
        $candidateId = $request->candidate_id;
        $user = Auth::user();

        $authorizedCandidate = $user->candidates->first(function ($candidate) use ($candidateId) {
            return $candidate->id == $candidateId;
        });

        if ($authorizedCandidate) {
            $results = Result::where('candidate_id', $candidateId)->get();
            return response()->json(['result' => $results]);
        }

        return response()->json(['result' => 'Not Authorized Or Not Found']);
    }


    public function getcandidates()
    {
        $user = Auth::user();

        $candidates = $user->candidates->map(function ($candidate) {
            $candidate = Candidate::find($candidate->id);
            $compares = $candidate->compares;
            if ($compares->count() > 0) {
                return [
                    'id' => $candidate->id,
                    'full_name' => $candidate->full_name,
                    'email' => $candidate->email,
                    'phone_number' => $candidate->phone,
                    'dob' => $candidate->date_of_birth,
                    'position' => $candidate->position,
                    'image_url' => $candidate->image_url,
                    'iscompared' => true,
                ];
            } else {
                return [
                    'id' => $candidate->id,
                    'full_name' => $candidate->full_name,
                    'email' => $candidate->email,
                    'phone_number' => $candidate->phone,
                    'dob' => $candidate->date_of_birth,
                    'position' => $candidate->position,
                    'image_url' => $candidate->image_url,
                    'iscompared' => false
                ];
            }
        });


        return $candidates;
    }
}
