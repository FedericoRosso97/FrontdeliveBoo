<template>
    <footer>
        <section class="blue-bg">
            <div class="container text-center py-5">
                <div class="row">
                    <div class="col-12 col-md-4 mb-4">
                        <p class="white_text text-uppercase mb-0 mt-4">
                            location
                        </p>
                        <p class="white_text text-center">
                            2215 John Daniel Drive Clark, MO 54243
                        </p>
                    </div>

                    <div class="col-12 col-md-4 mb-5">
                        <p class="white_text text-uppercase mb-0 mt-3">
                            around the web
                        </p>
                        <div class="white_text mt-2">
                            <a href="https://www.facebook.com/DeliverooIT/"><i class="fa-brands fa-facebook-f fs-4 p-2" ></i></a>
                            <a href="https://deliveroo.it/it/"><i class="fa-brands fa-google-plus-g fs-4 p-2"></i></a>
                            <a href="https://twitter.com/Deliveroo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa-brands fa-twitter fs-4 p-2"></i></a>
                            <a href="https://www.linkedin.com/company/deliveroo/?originalSubdomain=it"><i class="fa-brands fa-linkedin-in fs-4 p-2"></i></a>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <p class="white_text text-uppercase mb-0 mt-2">
                            about deliveboo
                        </p>
                        <p class="white_text">
                            Deliveroo is a food delivery service that connects customers with a wide range of restaurants and eateries.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="dark_blue-bg">
            <div class="container">
                <div class="row text-center p-5 ">
                    <div class="col-12">
                        <p class="white_text fw-light mb-0">
                            Copyright <i class="fa-regular fa-copyright"></i> Your Website 2019
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    name:'AppFooter'
}
</script>

<style scoped lang="scss">

section.blue-bg{
    background-color: #24afc1;
    color: white;
}

section.dark_blue-bg{
    background-color: #1795A8;
}

a{
    color: white;
}
</style>