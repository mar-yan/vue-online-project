import Vue from 'vue'
import Router from 'vue-router'

import vCart from '../components/cart/v-cart'
import vCatalog from '../components/catalog/v-catalog'

Vue.use(Router);

let router = new Router({
 routes:[
     {
         path: '/',
         name:'catalog',
         component: vCatalog
     },
     {
         path: '/cart',
         name:'cart',
         component: vCart,
         props:true
     }
 ],
    mode: 'history',

})
export default router