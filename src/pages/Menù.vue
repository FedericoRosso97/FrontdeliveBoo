<template>
    <div class="type-restaurant-title">
        <h2>
            Scegli dal menù:
        </h2>
    </div>

    <!--CHOOSE FROM THE MENù-->
    <div class="restourant-types">
        <ul>
            <li v-for="plate in plates">
                <h3>
                    {{ plate.name }}
                </h3>
            </li>
        </ul>
    </div>


</template>


<script>
export default {
    name: 'Menù',
    data() {
        return {
            plates: [
                {
                    name:'antipasto'
                },
                {
                    name:'primo'
                },
                {
                    name:'secondo'
                },
                {
                    name:'bevande'
                },
                {
                    name:'dolci'
                },
                {
                    name:'caffetteria'
                },
            ],
        }
    },
}
</script>


<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;

div.type-restaurant-title {
    margin-top: 10rem;

    h2 {
        text-align: center;
    }
}

.restourant-types{
    margin: 0 auto;
    width: 85%;
}

ul {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        li {
            text-align: center;
            width: 30%;
            background-color: $BlueColor;
            margin-top: 2rem;
            padding: 1rem 0;
            border-radius: 1rem;
            border: 2px solid $LightBlueColor;
            color: white;

            h3 {
                color: white;
            }
        }
    }

</style>