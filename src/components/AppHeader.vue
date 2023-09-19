<template>
    <div class="upper-header">
        <img src="../assets/logo_deliveboo.png" alt="DeliveBoo brand image">
    </div>
    <nav>
        <ul>
            <li v-for="link in links">
                <router-link :to="{ name: link.route }">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            links : [
                {
                    route: 'restaurant',
                    name: 'restaurant'
                },
                {
                    route: 'menù',
                    name: 'menù'
                },
            ]

            }
        }
    }
</script>

<style scoped lang="scss">
.upper-header{
    background-color: #1695A6;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
        img{
                height: 100px;
                margin-left:10rem;
            }
    }


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