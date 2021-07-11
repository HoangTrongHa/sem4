import axios from "axios"

export const getMenu = ({ commit }) => {
    axios.get('http://localhost:15000/menu')
    .then(response => {
        commit('SET_MENU', response.data);
    })
}

export const getBanner = ({ commit }) => {
    axios.get('http://localhost:15000/banner')
    .then(response => {
        commit('SET_BANNER', response.data);
    })
}

export const getCategories = ({ commit }) => {
    axios.get('http://localhost:15000/category')
    .then(response => {
        commit('SET_CATEGORY', response.data)
    })
}

export const getInforCompany = ({ commit }) => {
    axios.get('http://localhost:15000/inforcompany')
    .then(res => {
        commit('SET_INFOR_COMPANY',res.data)
    })
}

export const getMaterial = ({ commit }) => {
    axios.get('http://localhost:15000/material')
    .then(res => {
        commit('SET_MATERIAL',res.data)
    })
}

export const getAllProduct = ({ commit }) => {
    axios.get('http://localhost:15000/product')
    .then(res => {
        commit('SET_PRODUCT',res.data)
    })
}

export const getBannerProduct = ({ commit }) => {
    axios.get('http://localhost:15000/shop-banner')
    .then(res => {
        commit('SET_BANNER_PRODUCT',res.data)
    })
}

export const addProductToCart = ({ commit }, { item }) => {
    commit('ADD_TO_CART',{item})
}