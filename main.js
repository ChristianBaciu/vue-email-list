const {createApp} = Vue
createApp({
    data(){
        return{

        }
    },
    methods:{

        generaEmail(){
            // Quando effettuiamo una chiamata HTTP e tutto funziona correttamente,
            // otteniamo un'istruzione da inserire nel blocco THEN
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then ((risultato) => {
                console.log(risultato)
            })
        }

    },
}).mount('#app')
