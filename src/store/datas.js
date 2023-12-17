
import {mostraralertas, enviarsoli} from '@/store/funciones'
export default {
   data(){
        return{
            nombre:'',
            apellido:'',
            email:'',
            password:'',
            rol:'',
            telf:'',
            direccion:'',
            imagen:'',
            url:'http://bolsaempleobackend.test/api/v1/users',
            cargando: false,
        }
    },
    methods:{
        guardar(event){
            event.preventDefault();
            var mifoto = document.getElementById('fotoimg');
            this.imagen = mifoto.src;
            if(this.nombre.trim()==''){
                mostraralertas('Ingrese Nombre de Usuario','warning','nombre');
            }
            else if(this.apellido.trim()==''){
                mostraralertas('Ingrese Apellido de Usuario','warning','apellido');
            }
            else if(this.email.trim()==''){
                mostraralertas('Ingrese Email de Usuario','warning','email');
            }
            
            else if(this.telf.trim()==''){
                mostraralertas('Ingrese Telf de Usuario','warning','telf');
            }
            else if(this.direccion.trim()==''){
                mostraralertas('Ingrese Direccion de Usuario','warning','direccion');
            }
            else{
                var parametros = {
                    firts_name:this.nombre.trim(),
                    last_name:this.apellido.trim(),
                    email:this.email.trim(),
                    password:this.password.trim(),
                    rol:this.rol.trim(),
                    telefono:this.telf.trim(),
                    direccion:this.direccion.trim(),
                    imagen:this.imagen.trim()
                }
                enviarsoli('POST',parametros,this.url,'Guardado');
            }
        },
        cargarfoto(event){
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function(){
                var mifoto = document.getElementById('fotoimg');
                mifoto.src = reader.result;
                this.imagen = mifoto.src;
            }
        }

    }
};