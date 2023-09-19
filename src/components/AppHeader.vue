<template>
    <div class="upper-header">
        <img src="../assets/logo_deliveboo.png" alt="DeliveBoo brand image">
    </div>

    <div class="lower-header">
        <div class="searchBar">
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
                    name: 'restaurant',
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
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 200px;
        margin-left: 10rem;
    }
}


nav {
    width: 100%;
    display: flex;
    justify-content: center;
}

ul {
    display: flex;
    font-size: 2rem;
    list-style-type: none;
}

li {
    margin-right: 2rem;

    a {
        text-decoration: none;
        color:white;
    }
}

.lower-header {
    background-color: #FDCF48;
    height: 150px;
    display: flex;
    justify-content: center;


    .choose-box {
        display: flex;
        justify-content: center;

        h1 {
            color: #F8F8F8;
        }
    }
}
.searchBar {
    width: 50%;
    padding: 2.5rem;
    background-color: #24B0C1;
    border: 7px solid white;
    border-radius: 2rem;
    position: absolute;
    top: 200px;
    text-align: center;
}
</style>