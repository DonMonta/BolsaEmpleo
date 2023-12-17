
import { mostraralertas } from '@/store/funciones';
import { enviarsolilogin } from '@/store/loginfuncion';
import store from '@/store';
export default {
  data() {
    return {
      emaillo: '',
      clave: '',
      url2: 'http://bolsaempleobackend.test/api/login',
    };
  },
  methods: {
    async login(event) {
        event.preventDefault();
        try {
            var parametros = {
              email: this.emaillo.trim(),
              password: this.clave.trim(),
            };
    
            var response = await enviarsolilogin('POST', parametros, this.url2, 'Logueado');
    
            if (response && response.token) {
                console.log('Inicio de sesión exitoso');
                //console.log(store.commit('setRol', response.rol));
                console.log(store.state.rol=response.rol);
                console.log(response.rol);
                mostraralertas('Bienvenido','success');
                this.$router.push('/principal/'+response.id);
              
            } else {
                mostraralertas('Usuario Invalido','warning');
              console.error('Respuesta inesperada:', response);
            }
          } catch (error) {
            console.error('Error:', error.response.data);
            
          }
    }
  }
};
