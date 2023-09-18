<template>
    <div class="upper-header">
        <img src="../assets/logo_deliveboo.png0" alt="DeliveBoo brand image">
    </div>
    <nav>
        <nav>
            <ul>
                <li>
                    <router-link :to="{name: 'restaurant'}">
                        Restaurant
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'edit'}">
                        Edit
                    </router-link>
                </li>
            </ul>
        </nav>
    </nav>
</template>

<script>
export default {
    name:'AppHeader'
}
</script>

<style scoped lang="scss">
    nav{
        width: 50%;
        padding:  1rem 3rem;
        background-color: yellow;

        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 2rem;
            list-style-type: none;
        }

        li{
            margin-right: 2rem;
            a{
                text-decoration: none;
                color:blue
            }
        }
    }
</style>