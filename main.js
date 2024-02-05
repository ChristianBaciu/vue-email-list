const {createApp} = Vue
createApp({
    data(){
        return{

        }
    },
    methods:{

        generaEmail(){

            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                console.log(email.data.response)

                })
            }
        },
    }
}).mount('#app');