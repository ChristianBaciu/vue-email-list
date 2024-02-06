const {createApp} = Vue
createApp({
    data(){
        return{
            listaEmail: [ ],
        }
    },
    methods:{

        generaEmail(){
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                console.log(email.data)

                this.listaEmail.push(email.data.response)

                })
            }
            console.log(this.listaEmail)
        },
    }
}).mount('#app');