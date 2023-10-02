<template>
    <div class="type-restaurant-title">
        <h2>
            Scegli il tipo di ristorante:
        </h2>
    </div>
    <div class="restaurant-types">
        <ul>
            <li v-for="typology in typologies">
                <button @click="changeAdvancedSrcType(typology.id)">
                    {{ typology.name }}
                </button>
            </li>
        </ul>
    </div>

    <div class="wave mt-5"></div>

        <section class="jumbotron text-center">
            <div class="d-flex big-container row align-items-center">
                <div class="text-box col-12 col-md-6 col-sm-12">
                    <h1>I tuoi piatti preferiti, consegnati da noi.</h1>
                    <p class="main-paragraph">Mettiti comodo, ovunque tu sei ti consegnamo il tuo piatto preferito in pochissimi minuti!</p>
                </div>
                <div class="d-flex img-box col-12 col-md-6 col-sm-12">
                    <img class="hamburger" src="/hamburger.png" alt="picture of image2">
                </div>
            </div>
        </section>
    
        <div class="wave reverse mb-5"></div>

<div class="container-fluid">

        <div class="row">
            <div class="col-12 col-lg-6 mb-3 rider-card">
                <div class="details-card">
                    <h3>
                        Rider
                    </h3>
                    <p>
                        Diventa un rider: flessibilità, serietà, ottimi guadagni e un mondo di vantaggi per te.
                    </p>
                </div>

                <div class="title-wrapper">
                    <button>
                        <a href="https://riders.deliveroo.it/it/apply">
                            Diventa un Rider
                        </a>
                    </button>
                </div>

            </div>
            <div class="col-12 col-lg-6 work-card">
                <div class="details-card">
                    <h3>
                        Lavora con noi
                    </h3>
                    <p>
                        La nostra missione è trasformare il modo in cui le persone mangiano, e ci servono persone che ci aiutino a raggiungerlo. 
                    </p>
                </div>

                <div class="title-wrapper">
                    <button>
                        <a href="https://restaurants.deliveroo.com/it-it/?utm-campaign=workwithus&utm-medium=organic&utm-source=landingpage">
                            Lavora con noi
                        </a>
                    </button>
                    
                </div>
            </div>
        </div>
</div>

</template>

<script>
import { store } from '../store';
import axios from 'axios';

    export default{
        name: 'AppHome',
        data(){
            return{
                store,
                typologyApiUrl: 'http://127.0.0.1:8000/api/typologies',
                typologies: [],
                emptyimput: 'Cerca tra centinaia di piatti e ristoranti',
            }
        },
        methods:{
            getTypology(){
                axios.get(this.typologyApiUrl, {
                    params: {
                    }
                })
                    .then( (response) => {
                        this.typologies = response.data.result;
                        // console.log(this.typologies);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            changeAdvancedSrcType(type){
                this.store.FirstselectedType = type;
                this.$router.push({
                    name: 'AdvancedSearch',
                    params:{
                        input: this.emptyimput
                    }
            });
        }
        },
        mounted(){
            store.searchBar = true;
            this.getTypology();
        }
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
    div.type-restaurant-title{
        margin-top: 10rem;
        h2{
            text-align: center;
        }
    }

    div.restaurant-types{
        margin: 0 auto;
        width: 85%;
        ul{
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li{
                text-align: center;
                width: 30%;
                background-color: $BlueColor;
                margin-top: 2rem;
                padding: 4rem 0;
                border-radius: 32px 64px;
                display: block;
                position: relative;
                margin: 12px;
                text-decoration: none;
                z-index: 0;
                overflow: hidden;
                background: linear-gradient(110deg, #24afc1 60%, #1795a8 60%);
                // background-image: url(https://img.freepik.com/free-vector/hand-drawn-w-colours-pattern_23-2149865117.jpg?w=826&t=st=1695994129~exp=1695994729~hmac=7b23b6e437dee540e66613cf);

                &:before {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    top: -16px;
                    right: -16px;
                    // background: rgb(23, 149, 168, 0.6);
                    background: rgb(253, 207, 72, 0.6);
                    height: 32px;
                    width: 32px;
                    border-radius: 32px;
                    transform: scale(1);
                    transform-origin: 50% 50%;
                    transition: transform 0.25s ease-out;
                    color: white;

                }

                &:hover:before {
                    transform: scale(21);
                }
                
            }
        }
    }

    li button{
        background: none;
        border: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
        color: #fdcf48;
        text-shadow: 3px 3px #107e8f;

    }


    .jumbotron {
        background-color: #f6f6f6;
        height: 400px;
        align-items: center;
        display: flex;
    .big-container{
        width: 70%;
        margin: 0 auto;
        max-width: 1200px;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;

            .text-box{
            // height: 600px;
            // width: 30%;

                h1{
                // margin-top: 9.5rem;
                font-size: 3.2rem;
                    .img-box{
                    width: 70%;
                    margin-bottom: 120px;

                    }
                }
            }
        } 
    }




    div.wave{
    height: 80px;
    background-image: url('/wave.svg');
    filter: opacity(0.04);
    background-size: cover;
    padding-top: 10rem;
    }

    div.wave.reverse{
        height: 80px;
        transform: rotateX(0.5turn);
    }

    img.hamburger{
        width: 100%;
    }

    p.main-paragraph{
        line-height: 30px;
        margin-top: 30px;
        font-size:25px;
    }


    div.container-fluid{
        max-width: 65%;
        margin-top: 8rem;
        margin-bottom: 8rem;

        div.rider-card{
        height: 600px;
        background-image: url(https://img.freepik.com/free-photo/busy-deliveryman-driving-yellow-scooter-while-holding-pizza-boxes_273609-31761.jpg?size=626&ext=jpg&ga=GA1.2.1372780751.1695983464&semt=ais);
        background-repeat: no-repeat;
        position: relative;
        object-position: 50% 50%;
        text-align: center;
    }


    
}

div.title-wrapper{
    background-color: rgb(253, 207, 72, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    transform: translateX(0);
    font-weight: 700;
    font-size: 1.3rem;
    color: white;
    transition: all .3s ease-in-out;
    opacity: 0;


}

div.rider-card:hover div.title-wrapper{
    transform: translateX(0);
    opacity: 1;
}

div.details-card{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1.3rem;
    background-color: #1795a8;
    width: 100%;
}

div.details-card h3{
    margin-bottom: .8rem;
    color: white;
}

div.details-card p{
    color: #ffff;
}

div.work-card{
    background-image: url(https://img.freepik.com/free-photo/hiring-concept-with-people-coming-together_23-2149519873.jpg?t=st=1695983463~exp=1695984063~hmac=c4d5db5d96cbfac78c9056070938a8b71b756972514f76c4ad34d8fe29c2f16f);
    height: 600px;
    border-left: 4px solid white;
    position: relative;
    object-fit: cover;
    text-align: center;

}

div.work-card:hover div.title-wrapper{
    transform: translateX(0);
    opacity: 1;
}

div.title-wrapper button{
        background-color: #24afc1;
        border: none;
        color: #fff;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover{
            background-color: #fdcf48;
            transform: scale(1.1);
            border: 2px solid black;
        }
    }



</style>