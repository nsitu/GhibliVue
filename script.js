

const app = Vue.createApp({ 
    data(){
        return { 
            films: null,
            film: null, 
            loading: true
        }
    },
    methods:{       
        showFilm(id){
            console.log(id);
            this.film = this.films[id]
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    },  
    mounted () {
        axios.get('https://ghibliapi.herokuapp.com/films/')
            .then(response => {
                this.films = response.data ,
                this.loading = false
            })
            .catch(error => console.log(error));
    } 
}).component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
  }).mount('#app')



/*
fetch('https://ghibliapi.herokuapp.com/films/')
    .then(response => response.json())
    .then(films => this.films = films)
    .catch(error => console.log(error));*/