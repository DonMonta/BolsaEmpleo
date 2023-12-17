<template>
    <!-- Perfil de Empresa -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <h1 class="mb-4">Perfil</h1>
                <form  action="">
                    <div class="row g-5">
                        <div class="col-md-12 col-lg-6 col-xl-7">
                            <div class="row">
                                <div class="col-md-12 col-lg-6">
                                    <div class="form-item w-100">
                                        <label class="form-label my-3">Nombres<sup>*</sup></label>
                                        <input type="text" class="form-control" v-model="nombre" id="nombre" required>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-6">
                                    <div class="form-item w-100">
                                        <label class="form-label my-3">Apellidos<sup>*</sup></label>
                                        <input type="text" class="form-control" v-model="apellido" id="apellido" required>
                                    </div>
                                </div>
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3">Email<sup>*</sup></label>
                                <input type="email" class="form-control" v-model="email" id="email" required>
                            </div>
                            
                            <div class="form-item">
                                <label class="form-label my-3">Password<sup>*</sup></label>
                                <input type="password" class="form-control" v-model="password" id="password" required>
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3">Rol<sup>*</sup></label>
                                <input type="text" class="form-control" v-model="rol" id="rol" disabled>
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3">Direccion<sup>*</sup></label>
                                <input type="text" class="form-control" v-model="direccion" id="direccion" required>
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3">Telefono<sup>*</sup></label>
                                <input type="tel" class="form-control" v-model="telf" id="telf" required>
                            </div>
                            
                        </div>
                        <div class="col-md-12 col-lg-6 col-xl-5">
                            <div class="row g-4 text-center align-items-center justify-content-center pt-4">
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
                            <div class="row g-4 text-center align-items-center justify-content-center pt-4">
                                 <button v-on:click="actualizar" type="button"
                                class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Actualizar Perfil</button>
                            </div>
                           
                            
                        </div>
                        
                    </div>
                
            </form>
        </div>
    </div>
</template>
<style>
@import url('@/assets/styles.css');
</style>
<script>
  import script2 from '@/store/editar.js';

  export default {
    mixins: [script2],
  };
</script>