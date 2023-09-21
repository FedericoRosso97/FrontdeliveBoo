<template>
    <section class="input-search">
        <input type="text" placeholder="Cerca un film o serie tv" v-model="inputSearch" @keyup.enter="$emit('searchedMovies', inputSearch)">
        <button @click="$emit('searchedMovies', inputSearch),$emit('searchedTv', inputSearch)">
                Search
        </button>
    </section>
</template>

<script>
export default {
    name: 'AppSearchbar',
    data() {
        return {

        }
    },
}
</script>


<style lang="scss" scoped>
    @use '../styles/partials/mixins.scss' as *;
    @use '../styles/partials/variables.scss' as *;
    section.input-search{
        @include flex();
        padding: 2rem;
        input,
        button{
            padding: 0.5rem;
            margin-right: 1rem;
        }
        input{
            width: 30%;
        }
        button{
            font-size: $fontSizeS;
        }
    }
</style>