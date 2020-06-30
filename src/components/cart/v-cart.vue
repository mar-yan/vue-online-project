<template>
    <div class="v-cart">
        <router-link :to="{name:'catalog'}">
            <div class="v-catalog_link_to_cart btn">Back to Catalog</div>
        </router-link>
        <h1>Cart</h1>
        <h4 v-if="!cart_data.length">There are no products in cart...</h4>
        <v-cart-item
                v-for="(item, index) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
                @increment="increment(index)"
                @decrement="decrement(index)"
        />
        <div class="v-cart_total">
            <h3 class="total_name">Total:</h3>
            <h4>{{cartTotalCost}}</h4>
        </div>
    </div>
</template>

<script>
    import VCartItem from "./v-cart-item";
    import {mapActions} from "vuex"

    export default {
        name: "v-cart",
        components: {VCartItem},
        props: {
            cart_data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        computed: {
            cartTotalCost() {
                let result = []

                if (this.cart_data.length) {
                    for (let item of this.cart_data) {
                        result.push(item.price * item.quantity)
                    }
                    result = result.reduce(function (sum, el) {
                        return sum + el;
                    })
                    return result;
                } else {
                    return 0
                }
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_ITEM',
                'DECREMENT_ITEM'

            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
            increment(index) {
                this.INCREMENT_ITEM(index)
            },
            decrement(index) {
                this.DECREMENT_ITEM(index)
            }
        }
    }
</script>

<style lang="scss">
    .v-cart {
        padding-bottom: 150px;

        &_total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            display: flex;
            justify-content: center;
            padding: $padding*2;
            background: #1d8951;
            color: #f1f3f5;

        }

        .total_name {
            margin-right: $margin*2;
        }
    }
</style>