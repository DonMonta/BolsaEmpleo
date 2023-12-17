<?php

namespace App\Http\Controllers;

use App\Models\Postulacion;
use Illuminate\Http\Request;

class PostulacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Postulacion::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($param)
    {
        $res = Postulacion::select(
            'postulacions.id',
            'empresas.nombre as nombre_empresa',
            'oferta__empleos.titulo',
            'oferta__empleos.descripcion',
            'users.firts_name',
            'users.last_name',
            'users.email',
            'users.imagen',
            'postulacions.created_at'
        )
        ->join('oferta__empleos', 'oferta__empleos.id', '=', 'postulacions.oferta_id')
        ->join('users', 'users.id', '=', 'postulacions.usuario_id')
        ->join('empresas', 'empresas.id', '=', 'oferta__empleos.empresa_id')
        ->where('users.firts_name', $param)
        ->orWhere('oferta__empleos.titulo', $param)
        ->get();
    
        if ($res->count() > 0) {
            return response()->json([
                'data' => $res,
                'mensaje' => "Encontrado con Éxito!!",
            ]);
        } else {
            return response()->json([
                'error' => true,
                'mensaje' => "No se encontraron postulaciones para los criterios dados",
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
