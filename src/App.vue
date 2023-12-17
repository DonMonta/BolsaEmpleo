<template>
  <!-- Navbar start -->
  <div class="container-fluid sticky-top px-0">
    <div class="container topbar bg-primary d-none d-lg-block" v-if="showNavbar">
      <div class="d-flex justify-content-between">
        <div class="top-info ps-2">
          <small class="me-3"><i class="fas fa-building me-2 text-white"></i> <a href="#" class="text-white">{{ role }}</a></small>
          <small class="me-3"><i class="fas fa-envelope me-2 text-white"></i><a href="#"
              class="text-white">{{ emaile }}</a></small>
          <small class="me-3"><i class="fas fa-envelope me-2 text-white"></i><a href="#"
              class="text-white">{{ idus }}</a></small>    
        </div>
        
      </div>
    </div>
    <div class="container-fluid">
      <div class="container px-0">
        <nav class="navbar navbar-light navbar-expand-xl" id="navBar">
          <router-link to="/" class="navbar-brand">
            <h4 class="text-primary display-6 fw-bold mb-0">Bolsa<strong class="text-secondary">-</strong>Empleo</h4>
          </router-link>
          <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse">
            <span class="fa fa-bars text-primary"></span>
          </button>
          <div class="collapse navbar-collapse py-3" id="navbarCollapse" v-if="showNavbar">
            <div class="navbar-nav mx-auto border-top">
              <router-link to="/" class="nav-item nav-link" :class="{ 'active': $route.path === '/' }"
                v-if="mostrarOp">Home</router-link>
              <router-link :to="{path:'/principal/'+idus}" class="nav-item nav-link"
                :class="{ 'active': $route.path === '/principal/'+idus }">Inicio</router-link>
              <router-link to="/about" class="nav-item nav-link" v-if="mostrarOpciones"
                :class="{ 'active': $route.path === '/about' }">About</router-link>
              <router-link to="/" class="nav-item nav-link" :class="{ 'active': $route.path === '/' }">Story</router-link>
              <router-link to="/" class="nav-item nav-link"
                :class="{ 'active': $route.path === '/' }">Timeline</router-link>
              <router-link to="/" class="nav-item nav-link"
                :class="{ 'active': $route.path === '/' }">Gallery</router-link>
              <router-link to="/" class="nav-item nav-link" :class="{ 'active': $route.path === '/' }">RSVP</router-link>
            </div>
            <div class="d-flex m-3 me-0">

              <router-link :to="{path:'/perfil/'+idus}" href="#" class="my-auto">
                <i class="fas fa-user fa-2x"></i>
              </router-link>
            </div>

          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- Navbar End -->

  <div class="container-fluid">
    <router-view />
  </div>
</template>
<style>
@import url('@/assets/styles.css');
</style>
<script src="@/assets/custom.js">

</script>


