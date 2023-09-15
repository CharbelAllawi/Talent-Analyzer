<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function readTextFile()
    {
        $filePath = storage_path('app/public/text/candidate.txt');

        if (file_exists($filePath)) {
            $content = file_get_contents($filePath);
            return response()->json(['content' => $content]);
        } else {
            return response()->json(['message' => 'File not found'], 404);
        }
    }

    
}
