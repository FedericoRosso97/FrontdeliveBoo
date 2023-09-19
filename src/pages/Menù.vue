<template>
    <div class="type-restaurant-title">
        <h2>
            Scegli dal menù:
        </h2>
    </div>

    <!--CHOOSE FROM THE MENù-->
    <div>
        <ul>
            <li>antpasto</li>
            <li>primo</li>
            <li>secondo</li>
            <li>dolci</li>
            <li>bevande</li>
            <li>caffetteria</li>
        </ul>
    </div>


</template>


<script>
export default {
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