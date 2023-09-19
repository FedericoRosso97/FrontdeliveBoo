<template lang="">
    <div>
        <h1>
            Menu
        </h1>

        <h2>
            Crea il menù per del tuo Risporante
        </h2>

        <!--NOME Piatto-->
        <div class="ms-5 mt-3">
            <label for="nome-Piatto">
                Inserisci il nome del tuo Piatto:
            </label>
            <input type="text">
        </div>

        <!--DESCRIZIONE-->
        <div class="ms-5 mt-3">
            <label for="descrizione">
                Inserisci la descrizione del tuo piatto:
            </label>
            <input type="text">
        </div>

        <!--PREZZO-->
        <div class="ms-5 mt-3"> 
            <label for="prezzo">
                Inserisci il prezzo del tuo piatto:
            </label>
            <input type="text">
        </div>
    </div>

    <!--  bottoni
    -->
    <div class="ms-5 mt-3">
        <button class="ms-5 mt-3">
            Modifica piatto
        </button>
        <button class="ms-5 mt-3">
                Aggiungi piatto
        </button>
    </div>


</template>


<script>
export default {
}
</script>


<style lang="">

</style>