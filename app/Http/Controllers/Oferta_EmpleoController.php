<?php

namespace App\Http\Controllers;

use App\Models\Oferta_Empleo;
use Illuminate\Http\Request;

class Oferta_EmpleoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Oferta_Empleo::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inputs = $request->input();
        $res = Oferta_Empleo::create($inputs);
        return response()->json([
            'data'=>$res,
            'mensaje'=>"Agregado con Éxito!!",
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($param)
    {
            $res = Oferta_Empleo::select('oferta__empleos.id', 'oferta__empleos.titulo', 'oferta__empleos.descripcion', 'oferta__empleos.requisistos', 'empresas.nombre as empresa')
            ->join('empresas', 'oferta__empleos.empresa_id', '=', 'empresas.id')
            ->where('empresas.nombre', $param)
            ->orWhere('oferta__empleos.titulo', $param)
            ->first();

        if ($res) {
            return response()->json([
                'data' => $res,
                'mensaje' => "Encontrado con Éxito!!",
            ]);
        } else {
            return response()->json([
                'error' => true,
                'mensaje' => "La Oferta de Empleo no Existe",
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
