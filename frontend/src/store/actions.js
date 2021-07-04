import axios from "axios"

export const getMenu = ({ commit }) => {
    axios.get('http://localhost:5000/menu')
    .then(response => {
        commit('SET_MENU', response.data);
    })
}

export const getBanner = ({ commit }) => {
    axios.get('http://localhost:5000/banner')
    .then(response => {
        commit('SET_BANNER', response.data);
    })
}

export const getHotProduct = ({ commit }) => {
    axios.get('http://localhost:5000/product_hot')
    .then(res => {
        commit('SET_HOT_PRODUCT',res.data)
    })
}