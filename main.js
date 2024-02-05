const {createApp} = Vue
createApp({
    data(){
        return{
            listaEmail: '',
            
            // listaEmail: [ ],
        }
    },
    methods:{

        generaEmail(){
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                console.log(email.data.response)
                this.listaEmail = email.data.response

                })
            }
        },
    }
}).mount('#app');