<template>
    <div class="upper-header">
        <img src="../assets/logo_deliveboo.png0" alt="DeliveBoo brand image">
    </div>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'restaurant' }">
                    Restaurant
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'edit' }">
                    Edit
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped lang="scss">
nav {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: yellow;

    ul {
        display: flex;
        font-size: 2rem;
        list-style-type: none;
    }

    li {
        margin-right:2rem;

        a {
            text-decoration: none;
            color: blue
        }
    }
}
</style>