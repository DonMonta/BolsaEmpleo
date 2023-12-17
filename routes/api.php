<?php

use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\Oferta_EmpleoController;
use App\Http\Controllers\PostulacionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource("v1/empresas",EmpresaController::class);
Route::apiResource("v1/users",UserController::class);
Route::apiResource("v1/oferta__empleos",Oferta_EmpleoController::class);
Route::apiResource("v1/postulacions",PostulacionController::class);
Route::post('/login', [UserController::class, 'login']);
