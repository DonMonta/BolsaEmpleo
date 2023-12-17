<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Oferta_Empleo extends Model
{
    use HasFactory;
    public $table = "oferta__empleos";
    protected $fillable = [
        'titulo', 'descripcion', 'requisitos', 'empresa_id',
    ];

    
     public function empresa()
     {
         return $this->belongsTo(Empresa::class, 'empresa_id');
     }
 
     
     public function postulaciones()
     {
         return $this->hasMany(Postulacion::class, 'oferta_id');
     }
    
}
