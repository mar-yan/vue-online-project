<template>
    <div class="v-cart-item">
        <img class="v-cart-item_img" v-bind:src=" require( '../../assets/images/'+ cart_item_data.image )" alt="img">
        <div class="v-cart-item_info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item_quantity">
            <p>Qty: </p>
            <span>
                 <span class="quantity_btn" @click="decrementItem"> - </span>
                            {{cart_item_data.quantity}}
                 <span class="quantity_btn" @click="incrementItem"> + </span>
            </span>


        </div>
        <button class="btn" @click="deleteFromCart">DELETE</button>
    </div>
</template>

<script>
    export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods:{
            deleteFromCart(){
                this.$emit('deleteFromCart')
            },
            decrementItem(){
                this.$emit('decrement')
            },
            incrementItem(){
                this.$emit('increment')
            }
        },


    }
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #f1f3f5;
        padding: $padding*2;
        margin-bottom: $margin*2;
         &_img{
            width: 100px;
        }
    }
    .quantity_btn {
        cursor: pointer;
    }

</style>