import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios("http://localhost:3000/products", {
            methods: 'GET'
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    Add_To_Cart({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit("DELETE_FROM_CART", index)
    },
    INCREMENT_ITEM({commit}, index) {
        commit("INCREMENT", index)
    },
    DECREMENT_ITEM({commit}, index) {
        commit("DECREMENT", index)
    }
}