<?php

use App\Http\Controllers\apicon;
use App\Http\Controllers\floodapi;
use App\Http\Controllers\FloodController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\WaterLevelController;
use Illuminate\Support\Facades\Route;



Route::post('/sensor_data', [WaterLevelController::class, 'store']);

Route::get('/flood-data', [FloodController::class, 'getFloodData']);

Route::get('/', function () {
    return view('map');
});


                                      