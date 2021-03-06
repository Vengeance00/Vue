//Instanciar Vue 
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Platano', cantidad: 11}
        ],
        nuevaFruta:'',
        total: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({nombre:this.nuevaFruta,cantidad:0});
            this.nuevaFruta = "";
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for (fruta of this.frutas) {
                if (typeof(fruta.cantidad) == "number" ) {
                    this.total += fruta.cantidad;
                }
                
            }
            return this.total;
        }
    }
});