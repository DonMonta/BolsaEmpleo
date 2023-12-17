<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Postulacion extends Model
{
    use HasFactory;
    protected $table = 'postulacions';
    protected $fillable = [
        'usuario_id', 'oferta_id',
    ];   
    
     public function usuario()
     {
         return $this->belongsTo(User::class, 'usuario_id');
     }
 
    
     public function ofertaEmpleo()
     {
         return $this->belongsTo(Oferta_Empleo::class, 'oferta_id');
     }
}
