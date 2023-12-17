<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;
    protected $table = 'empresas';
    protected $fillable = [
        'id','nombre', 'descripcion', 'contacto', 'telefono', 'direccion',
    ];

   
    public function ofertasEmpleo()
    {
        return $this->hasMany(Oferta_Empleo::class, 'empresa_id');
    }
}
