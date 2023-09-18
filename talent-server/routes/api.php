<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CompareController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UploadFileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
