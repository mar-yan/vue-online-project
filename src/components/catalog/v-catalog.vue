<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params:{cart_data: CART}}">
            <div class="v-catalog_link_to_cart btn">Cart: {{CART.length}}</div>
        </router-link>
     <h1>Catalog</h1>
        <div class="v-catalog_list">
            <v-catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                v-bind:product_data="product"
                @addToCart="addToCart"
        />
        </div>
    </div>
<!--    @poxancelArticul="stanalArticul"-->
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'Add_To_Cart'
            ]),

            // stanalArticul(data) {
            //     console.log(data);
            // }
            addToCart(data){
                this.Add_To_Cart(data);
            }

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response => {
                        if (response.data) {
                            console.log("success")
                        }
                    })
                )
        }

    }
</script>

<style lang="scss">
    .v-catalog {

        &_list{
            /*background: #2c3e50;*/
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &_link_to_cart{
            background: $main-color;
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #2c3e29;
        }
    }


</style>