<template>
    <header class="home-start">
        <div class="upper-header">

            <!-- LOGO -->

            <img src="../assets/logo_deliveboo.png" alt="DeliveBoo brand image">

            <!-- LOG IN / REGISTRAZIONE -->
        
            <div class="logIn">
                <a href="">
                    Log-in
                </a>
                <span>
                    |
                </span>
                <a href="">
                    Registrati
                </a>
            </div>
        </div>
        <div class="bottom-header">
            <!-- SEARCHBAR -->
    
            <div class="searchBar">
                <h1>
                    Cosa vuoi mangiare?
                </h1>
                <form action="" method="GET">
                    <input type="text" placeholder="Cerca tra centinaia di piatti e ristoranti!">
                    <button type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'AppHeader'
}
</script>

<style scoped lang="scss">
    @use '../styles/partials/variables.scss' as *;
    header.home-start{
        height: 35vh;
        padding: 2.5rem 12rem;
        background: linear-gradient(to top,$YellowColor 0%,$YellowColor 50%,$BlueColor 50%,$BlueColor 100%);
        div.upper-header{
            height: 30%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                height: 200%;
            }
            div.logIn{
                a{
                    text-decoration: none;
                    color: white;
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }
        div.bottom-header{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            div.searchBar{
                width: 50%;
                padding: 2.5rem;
                background-color: $LightBlueColor;
                border: 7px solid white;
                border-radius: 2rem;
                position: absolute;
                top: 100px;
                text-align: center;
                h1{
                    color: white;
                    padding-bottom: 1rem;
                }
                form{
                    height: 45px;
                    input{
                        height: 100%;
                        width: 70%;
                        padding: 0.5rem 1rem;
                        border: 1px solid rgb(100, 100, 100);
                        border-bottom-left-radius: 0.7rem;
                        border-top-left-radius: 0.7rem;
                    }
                    button{
                        height: 100%;
                        width: 45px;
                        background-color: white;
                        border: 1px solid rgb(100, 100, 100);
                        border-left: 0px;
                        border-top-right-radius: 0.7rem;
                        border-bottom-right-radius: 0.7rem;
                        i{
                            font-size: 1.3rem;
                            color: rgb(58, 58, 58);
                        }
                    }
                }
            }
        }
    }
</style>