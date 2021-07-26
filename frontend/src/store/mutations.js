export const SET_MENU = (state, menus) => {
    state.menu = menus;
}

export const SET_BANNER = (state, item) => {
    state.banner = item;
}

export const SET_HOT_PRODUCT = (state,item) => {
    state.product_hot = item
}

export const SET_CATEGORY = (state, item) => {
    state.categories = item
}

export const SET_INFOR_COMPANY = (state, item) => {
    state.infor_company = item
}


export const SET_OVERVIEW_INFOR = (state, item) => {
    state.overview_infor = item
}

export const SET_NEWS = (state, item) => {
    state.news = item
}


export const SET_MATERIAL = (state, item) => {
    state.materials = item
}

export const SET_PRODUCT = (state, item) => {
    state.products = item
}

export const SET_BANNER_PRODUCT = (state, item) => {
    state.banner_product = item

}

export const ADD_TO_CART = (state, item) => {
    state.cart.push({ item })
}

export const SET_STORE_SYSTEM = (state,  item) => {
    state.store_system = item
}


export const SET_STORE_CONTACT = (state,  item) => {
    state.store_contact = item
}

export const SET_PROVINCE = (state, item) => {
    state.province = item
}

export const SET_CITY = (state, item) => {
    state.city = item
}

export const SET_DISTRICT = (state, item) => {
    state.district = item
}

export const SET_WARD = (state, item) => {
    state.ward = item
}

export const SET_GALLARY = (state, item) => {
    state.gallery = item
}