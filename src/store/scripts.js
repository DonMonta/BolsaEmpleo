export default {
    data() {
      return {
        
        isFormB: false,
      };
    },
    
    methods: {
      getButtons(e) {
        e.preventDefault();
      },
      changeForm() {
        this.$refs.switchCtn.classList.add("is-gx");
        setTimeout(() => {
          this.$refs.switchCtn.classList.remove("is-gx");
        }, 1500);
  
        this.$refs.switchCtn.classList.toggle("is-txr");
  
        this.$refs.switchC1.classList.toggle("is-hidden");
        this.$refs.switchC2.classList.toggle("is-hidden");
        this.$refs.aContainer.classList.toggle("is-txl");
        this.$refs.bContainer.classList.toggle("is-txl");
        this.$refs.bContainer.classList.toggle("is-z200");
  
        // Cambiar el estado del formulario actual
        this.isFormB = !this.isFormB;
      },
    },
    mounted() {
      // Eventos de clic para los botones
      
    },
};