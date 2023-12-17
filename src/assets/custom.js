import $ from 'jquery';
import store from '@/store';
export default {
  data() {
    return {
      idus: '',
      role: '',
      emaile: '',
    };
  },
  mounted() {
    // Fixed Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
      } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
      }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav router-link").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 90
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.navbar-nav').length) {
          $('.navbar-nav .active').removeClass('active');
          $(this).closest('router-link').addClass('active');
        }
      }
    });
  },
  computed: {
    showNavbar() {
      // Lógica para determinar si mostrar o no el navbar
      return this.$route.name !== 'home';
    },
    rolUsuario() {
      //console.log(store);
      return store.state.rol;
    },
    emailUsuario() {
      //console.log(store);
      return store.state.email;
    },
    idUsuario() {
      //console.log(store);
      return store.state.id;
    },
    mostrarOpciones() {
      console.log(this.rolUsuario);
      this.role=this.rolUsuario;
      this.emaile=this.emailUsuario;
      this.idus=this.idUsuario;
      return this.rolUsuario === 'Empresa';
    },
    mostrarid(){

    },
    mostrarOp() {
      
      return this.$route.name === 'home';
    },
  },
};
