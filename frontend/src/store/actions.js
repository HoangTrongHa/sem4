import axios from "axios"

export const getMenu = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/menu')
        .then(response => {
            commit('SET_MENU', response.data);
        })
}

export const getBanner = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/banner/')
        .then(response => {
            commit('SET_BANNER', response.data);
        })
}

export const getCategories = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/category')
        .then(response => {
            commit('SET_CATEGORY', response.data)
        })
}

export const getInforCompany = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/infor-company/')
        .then(res => {
            commit('SET_INFOR_COMPANY', res.data)
        })
}

export const getMaterial = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/material')
        .then(res => {
            commit('SET_MATERIAL', res.data)
        })
}

export const getAllProduct = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/product')
        .then(res => {
            commit('SET_PRODUCT', res.data)
        })
}

export const getOverview = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/overview')
        .then(res => {
            commit('SET_OVERVIEW_INFOR', res.data)
        })
}

export const getNews = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/news')
        .then(res => {
            // console.log(res.data);
            commit('SET_NEWS', res.data)
        })
}


export const getBannerProduct = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/shop-banner/')
        .then(res => {
            commit('SET_BANNER_PRODUCT', res.data)
        })
}

export const getStoreSystem = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/store-system')
        .then(res => {
            commit('SET_STORE_SYSTEM', res.data)
        })
}

export const getStoreContact = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/store-contact')
        .then(res => {
            commit('SET_STORE_CONTACT', res.data)
        })
}

export const getCity = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/city')
        .then(res => {
            commit('SET_CITY', res.data)
        })
}

export const getDistrict = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/district')
        .then(res => {
            commit('SET_DISTRICT', res.data)
        })
}

export const getWard = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/ward')
        .then(res => {
            commit('SET_WARD', res.data)
        })
}

export const getGallery = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/gallery-lookbook')
        .then(res => {
            commit('SET_GALLARY', res.data)
        })
}

export const getAllOrder = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/order/')
        .then(res => {
            commit('SET_ORDER', res.data)
        })
}

export const getCart = ({commit}) => {
    let getCart = JSON.parse(localStorage.getItem('Cart')) || [];
    commit('SET_CART', getCart)
}

export const updateCart = ({commit}, payload) => {
    commit('SET_CART', payload)
}

export const getToken = ({commit}) => {
    let getToken = JSON.parse(localStorage.getItem('token')) || [];
    commit('SET_TOKEN', getToken)
}

export const updateUser = ({commit}, payload) => {
    commit('SET_USER', payload)
}

export const updateToken = ({commit}, payload) => {
    commit('SET_TOKEN', payload)
}

export const getThue = ({commit}, payload) => {
    commit('SET_THUE', payload)
}
