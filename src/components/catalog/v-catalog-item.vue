<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item_image" v-bind:src=" require( '../../assets/images/'+ product_data.image )" alt="img">
        <p class="v-catalog-item_name">{{product_data.name}}</p>
        <p class="v-catalog-item_price">price:{{product_data.price}}:AMD</p>
<!--        <button class="v-catalog-item_add_to_cart_btn btn" @click="showArticule">click</button>-->
        <button class="v-catalog-item_add_to_cart_btn btn" @click="addToCart">click</button>
    </div>
</template>

<script>
    export default {
        name: "v-catalog-item",
        props:{
            product_data:{
                type: Object,
                default(){
                    return{}
                }
            }
        },
        data(){
            return{}
        },
        computed:{},
        methods:{
            // showArticule(){
            //     this.$emit('poxancelArticul', this.product_data.article)
            // }
            addToCart(){
                this.$emit('addToCart', this.product_data)
            }
        },
        mounted() {
            this.$set(this.product_data,"quantity",1)
        },

    }
</script>

<style lang="scss">
.v-catalog-item{
    background: $bg_color;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #f1f3f5;
    padding: $padding*2;
    margin-bottom: $margin*2;

    &_image{
        width: 200px;
        height: 300px;
    }


}

</style>