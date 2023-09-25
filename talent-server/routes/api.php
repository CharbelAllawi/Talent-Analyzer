<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CompareController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\OpenAIController;
use App\Http\Controllers\UploadFileController;
use App\Http\Controllers\UserCRUDController;
use App\Http\Controllers\VideoToTextController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
Route::get('/read-text-file', [FileController::class, 'readTextFile']);
Route::post('/write-text-file', [FileController::class, 'writeTextFile']);
Route::post('/addcandidate', [CandidateController::class, 'addcandidate']);
Route::post('/upload-file', [UploadFileController::class, 'uploadFile']);
Route::post('/get-result', [CandidateController::class, 'getResult']);
Route::get('/get-candidates', [CandidateController::class, 'getcandidates']);
Route::post('/compare', [CompareController::class, 'compare']);
Route::post('/uncompare', [CompareController::class, 'uncompare']);
Route::post('/updatecandidate', [CandidateController::class, 'updatecandidate']);
Route::post('/deletecandidate', [CandidateController::class, 'deletecandidate']);
Route::post('/transcribe', [VideoToTextController::class, 'transcribe']);
Route::post('/openai', [OpenAIController::class, 'openai']);
Route::post('/comparecandidates', [CompareController::class, 'comparecandidates']);
Route::get('/get_users/{id?}', [UserCRUDController::class, "get_users"]);
Route::post('/addOrUpdateUser/{id?}', [UserCRUDController::class, "addOrUpdateUser"]);
Route::post('/remove-user/{id?}', [UserCRUDController::class, "removeuser"]);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
