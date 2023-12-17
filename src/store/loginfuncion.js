import axios from 'axios';
import store from '@/store';
export async function enviarsolilogin(method, parametros, url, mensaje) {
    try {
        var response = await axios({
        method: method,
        url: url,
        data: parametros
      });
  
      
      if (response.data) {
        console.log(mensaje + ': ' + response.data.mensaje);
        store.commit('setRol', response.data.rol);
        store.commit('setemail', response.data.email);
        store.commit('setid', response.data.id);
        console.log(store);
        return {
            token: response.data.token,
            rol: response.data.rol, 
            email: response.data.email,  
            id: response.data.id,  
        };
      } else {
        console.error('Respuesta inesperada:', response);
        return null;
      }
    } catch (error) {
      console.error('Error:', error.response.data);
      throw error;
    }
}