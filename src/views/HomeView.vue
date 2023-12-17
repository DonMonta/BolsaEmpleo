<template>
  <div class="container-fluid">
    <div class="main">

      <div class="contenedor a-container" id="a-container" ref="aContainer">
        <form class="form" id="b-form" method="" action="">
          <h2 class="form_title title">Inicia Sesión</h2>
          <span class="form__span">Llene los campos para Iniciar Sesion</span>
          <input class="form__input" type="text" v-model="emaillo" id="emaillo" required placeholder="Email">
          <input class="form__input" type="password" v-model="clave" id="clave" required placeholder="Password">
          <button v-on:click="login" class="form__button button submit">INICIAR SESIÓN</button>
        </form>
      </div>
      <div class="contenedor b-container" id="b-container" ref="bContainer">
        
        <form v-on:submit="guardar" class="form" id="a-form" method="" action="">
          <h2 class="form_title title">Regístrate</h2>
          <div class="from-row row g-6">
            <div class="col-md-6">

              <select v-model="rol" id="inputState" class=" form__input">
                <option value="" selected>Elija Su Rol</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Empresa">Empresa</option>
              </select>
              <input class="form__input" type="text" v-model="nombre" id="nombre" required placeholder="Nombres">
              <input class="form__input" type="text" v-model="apellido" id="apellido" required placeholder="Apellidos">
              <input class="form__input" type="text" v-model="email" id="email" required placeholder="Email">
              <input class="form__input" type="password" v-model="password" id="password" required placeholder="Password">
              <input class="form__input" type="text" v-model="telf" id="telf" required placeholder="Telf">
              <input class="form__input" type="text" v-model="direccion" id="direccion" required placeholder="Direccion">

            </div>


            <div class="col align-self-center offset-md-2">
              <!-- Imagen -->
              <div class="text-center">
                <img v-if="this.imagen" height="100" :src="this.imagen" id="fotoimg" class="img-thumbnail" alt="">
                <img v-else style="height: 120px;"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"
                  id="fotoimg" class="img-thumbnail" alt="">
                <div class="input-group mb-3">
                  <input v-on:change="cargarfoto" type="file" accept="image/png, image/jpeg, image/gif, image/jpg"
                    class="form-control">
                </div>
              </div>
            </div>
          </div>


          <button class="form__button button submit">REGISTRARSE</button>
        </form>
      </div>
      <div class="switch" id="switch-cnt" ref="switchCtn" @click="changeForm">
        <div class="switch__circle" ref="switchCircle1"></div>
        <div class="switch__circle switch__circle--t" ref="switchCircle2"></div>
        <div class="switch__container" :class="{ 'is-hidden': isFormB }" ref="switchC1">
          <h2 class="switch__title title">Binevenido !</h2>
          <p class="switch__description description">No Tienes Cuenta? Regístrate aquí</p>
          <button class="switch__button button switch-btn">REGISTRARSE</button>
        </div>
        <div class="switch__container" :class="{ 'is-hidden': !isFormB }" ref="switchC2">

          <h2 class="switch__title title">Bienvenido!</h2>
          <p class="switch__description description">Ya Estás Resgitrado? Si es Así Inicia Sesión</p>
          <button class="switch__button button switch-btn">INICIAR SESIÓN</button>
        </div>
      </div>

    </div>
  </div>
</template>
<style>
@import url('@/assets/stylelogin.css');
</style>
<script>
  import script1 from '@/store/scripts.js';
  import script2 from '@/store/datas.js';
  import script3 from '@/store/login.js';

  export default {
    mixins: [script1,script2,script3],
  };
</script>
