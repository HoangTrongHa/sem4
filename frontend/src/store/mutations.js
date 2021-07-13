export const SET_MENU = (state,menus) => {
    state.menu = menus;
}

export const SET_BANNER = (state,item) => {
    state.banner = item;
}

export const SET_CATEGORY = (state,item) => {
    state.categories = item
}

export const SET_INFOR_COMPANY = (state,item) => {
    state.infor_company = item
}

<<<<<<< HEAD
export const SET_OVERVIEW_INFOR = (state,item) => {
    state.overview_infor = item
}

export const SET_NEWS = (state,item) => {
    state.news = item
=======
export const SET_MATERIAL = (state,item) => {
    state.materials = item
}

export const SET_PRODUCT = (state,item) => {
    state.products = item
}

export const SET_BANNER_PRODUCT = (state,item) => {
    state.banner_product = item
}

export const ADD_TO_CART = (state,item) => {
    state.cart.push({ item })
>>>>>>> test_2021
}