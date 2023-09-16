<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Candidate;
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

        return back()->with('success', 'Candidate added successfully.');
    }
}
