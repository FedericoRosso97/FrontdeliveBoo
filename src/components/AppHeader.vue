<template>
    <div class="upper-header">
        <img src="../assets/logo_deliveboo.png" alt="DeliveBoo brand image">
    </div>

    <div class="lower-header">
        <div class="choose-box">
            <h1>
                Cosa vuoi vedere?
            </h1>
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
    </div>






</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            links: [
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
.upper-header {
    background-color: #1695A6;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 100px;
        margin-left: 10rem;
    }
}


nav {
    width: 100%;
    display: flex;
    justify-content: center;


    ul {
        display: flex;
        font-size: 2rem;
        list-style-type: none;
    }

    li {
        margin-right: 2rem;

        a {
            text-decoration: none;
            color: blue
        }
    }
}

.lower-header {
    background-color:#FDCF48;;
    height: 100px;
}
.choose-box{
    display: flex;
    justify-content: center;
}

</style>