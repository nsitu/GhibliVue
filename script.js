
const app = Vue.createApp({ 
    data(){
        return { 
            films: null,    /* axios stores all the Ghibli films here after fetching them */ 
            film: null,     /* this variable updates to hold whatever film is clicked on. */ 
            loading: true
        }
    },
    methods:{       
        showFilm(id){ 
            this.film = this.films[id]
            /*Scroll to the top whenever a film is chosen*/ 
            window.scrollTo({ top: 0, behavior: "smooth" }) 
        }
    },  
    mounted () {
        /* Using axios to fetch data. 
        You could also use Fetch API if you prefer*/ 
        axios.get('https://ghibliapi.herokuapp.com/films/')
            .then(response => {
                this.films = response.data ,
                this.loading = false
            })
            .catch(error => console.log(error));
    } 
}).mount('#app')