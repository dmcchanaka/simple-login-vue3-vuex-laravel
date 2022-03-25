<?php

use App\Http\Controllers\API\V1\UserController;
use Illuminate\Support\Facades\Route;

Route::post('login', [UserController::class, 'login']);