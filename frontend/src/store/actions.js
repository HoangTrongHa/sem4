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


export const getBannerProduct = ({ commit }) => {
    axios.get('http://localhost:15000/shop-banner')
    .then(res => {
        commit('SET_BANNER_PRODUCT',res.data)
    })
}

// export const addProductToCart = ({ commit }, { item }) => {
//     commit('ADD_TO_CART',{ item })
//     // const parsed = JSON.stringify(item);
//     // localStorage.setItem('add-to-cart', parsed);
// }
// export const addProductToCart = ({ commit }, { item }) => {
//     commit('ADD_TO_CART',{item})
// }

export const getStoreSystem = ({ commit }) => {
    axios.get('http://localhost:15000/store_system')
    .then(res => {
        commit('SET_STORE_SYSTEM',res.data)
    })
}

export const getStoreContact = ({ commit }) => {
    axios.get('http://localhost:15000/store_contact')
    .then(res => {
        commit('SET_STORE_CONTACT',res.data)
    })
}
