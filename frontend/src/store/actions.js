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

export const getHotProduct = ({ commit }) => {
    axios.get('http://localhost:15000/product_hot')
    .then(res => {
        commit('SET_HOT_PRODUCT',res.data)
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
        commit('SET_MATERIAL')
    })
}

export const getOverview = ({ commit }) => {
    axios.get('http://localhost:15000/overview')
    .then(res => {
        commit('SET_OVERVIEW_INFOR',res.data)
    })
}

export const getNews = ({ commit }) => {
    axios.get('http://localhost:15000/news')
    .then(res => {
        // console.log(res.data);
        commit('SET_NEWS',res.data)
    })
}