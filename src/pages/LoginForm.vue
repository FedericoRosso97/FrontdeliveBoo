<template>
    <div class="page-container">   
        <div class="login-container">
            <form @submit.prevent="sendLoginForm">
                
                <h2>
                    Effettua il login!
                </h2>
                
                <!-- EMAIL -->
                
                <div class="form-group">
                    <label for="email">
                        Inserisci la tua email:
                    </label>
                    <input type="email" v-model="email">
                </div>
                
                <!-- PASSWORD -->
                
                <div class="form-group">
                    <label for="password">
                        Inserisci la tua password:
                    </label>
                    <input type="text" v-model="password">
                </div>
                
                <div class="submit-button">
                    <button type="submit">
                        Login!
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'LoginForm',
    data(){
        return{
            email: '',
            password: '',
            apiUrl: '',
        }
    },
    methods: {
        sendLoginForm(){
            axios.post(this.apiUrl, {
                email: this.email,
                password: this.password
            })
                .then( (response) => {
                    this.response = response;
                    console.log(response);
                 })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }   
}
</script>

<style scoped lang="scss">

    div.page-container{
        position: absolute;
        top:0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.742);
        div.login-container{
            
        }
    }
    
</style>