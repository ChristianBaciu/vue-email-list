const {createApp} = Vue
createApp({
    data(){
        return{

        }
    },
    methods:{

        generaEmail() {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                // console.log(email.data.response);

                for (let i = 1; i <= 10; i++) {
                    console.log(email.data.response);
                }
            })
        },
    },
}).mount('#app');