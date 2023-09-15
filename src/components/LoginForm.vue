<template>
    <div class="Login-container">
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
                <label for="email">
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
    
</style>