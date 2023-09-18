<template>
    <div class="Registration-container">
        <form @submit.prevent="sendRegistrationForm">

            <h2>
                Registrati come ristorante!
            </h2>

            <!-- USERNAME -->

            <div class="form-group">
                <label for="username">
                    Inserisci il tuo username:
                </label>
                <input type="username" v-model="username">
            </div>

            <!-- EMAIL -->

            <div class="form-group">
                <label for="email">
                    Inserisci la tua email:
                </label>
                <input type="text" v-model="email">
            </div>

            <!-- PASSWORD -->

            <div class="form-group">
                <label for="password">
                    Inserisci la tua password:
                </label>
                <input type="text" v-model="password">
            </div>

            <!-- NAME -->

            <div class="form-group">
                <label for="name">
                    Inserisci il nome del tuo ristorante:
                </label>
                <input type="name" v-model="name">
            </div>

            <!-- ADDRESS -->

            <div class="form-group">
                <label for="address">
                    Inserisci il tuo indirizzo:
                </label>
                <input type="address" v-model="address">
            </div>

            <!-- VAT_NUMBER -->

            <div class="form-group">
                <label for="VAT_number">
                    Inserisci il tuo VAT_number:
                </label>
                <input type="VAT_number" v-model="VAT_number">
            </div>

            <!-- OPENING_TIME -->

            <div class="form-group">
                <label for="opening_time">
                    Inserisci il tuo orario di apertura:
                </label>
                <input type="opening_time" v-model="opening_time">
            </div>

            <!-- IMAGE -->
            <!-- !!!!!!!!!!!!!!! AGGIUNGERE EXPORT FILE.IMG !!!!!!!!!!!!!!! -->
            <div class="form-group">
                <label for="image">
                    Inserisci un'immagine dell'attività:
                </label>
                <input type="text" v-model="password">
            </div>

            <!-- TELEPHONE_NUMBER -->

            <div class="form-group">
                <label for="telephone_number">
                    Inserisci il tuo numero di telefono:
                </label>
                <input type="telephone_number" v-model="telephone_number">
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
export default {
    name:'RegistrationApp',
    data(){
        return{
            userName:'',
            email:'',
            password:'',
            name: '',
            address: '',
            VAT_number: '',
            opening_time: '',
            image: '',
            telephone_number: '',
        }
    },
    methods: {
        sendRegistrationForm(){
            axios.post(this.apiUrl, {
                userName: this.userName,
                email: this.email,
                password: this.password,
                name: this.name,
                address: this.address,
                VAT_number: this.VAT_number,
                opening_time: this.opening_time,
                image: this.image,
                telephone_number: this.telephone_number,
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