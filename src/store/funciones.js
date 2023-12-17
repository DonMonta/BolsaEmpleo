import Swal from 'sweetalert2';
import axios from 'axios';

export function mostraralertas(titulo,icono,foco=''){
    if(foco!=''){
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btnprimary', popup:'animated zoonIn'},
        buttonsStyling:false
    });
}
export function confimar(urlconslash,id,titulo,mensaje){
    var url = urlconslash+id;
    const swalwithboostrapbutton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3',cancelButton:'btn btn-danger'},
    });
    swalwithboostrapbutton.fire({
        title:titulo,
        text:mensaje,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, Eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((res)=>{
        if(res.isConfirmed){
            enviarsoli('DELETE',{
                id:id
            },url,'Eliminado');
        }else{
            mostraralertas('Operacion cancelada','info');
        }
    });
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary',popup:'animated zooIn'},
        buttonsStyling:false
    });
}
export function enviarsoli(metodo,parametros,url,mensaje){
    axios({
        method:metodo,
        url:url,
        data:parametros
    }).then(function(res){
        var estado = res.status;
        if(estado==200){
            mostraralertas(mensaje,'success');
            window.setTimeout(function(){
                window.location.href='/'
            },2000);
        }else{
            mostraralertas('No se pudo recuperar la respuesta','error');
        }
    }).catch(function(error){
        mostraralertas('Servidor no Disponible','error');
    });
}
export async function enviarsoliedit(metodo,parametros,url,mensaje){
    try {
        var response = await axios({
        method: metodo,
        url: url,
        data: parametros
      });
  
      
      if (response.data) {
        console.log(mensaje + ': ' + response.data.mensaje);
        mostraralertas(mensaje,'success');
        return { 
            id: response.data.id,  
        };
        
        
      } else{
        mostraralertas('No se pudo recuperar la respuesta','error');
        return null;
        }
    } catch (error) {
      console.error('Error:', error.response.data);
      mostraralertas('Servidor no Disponible','error');
      throw error;
    }
}