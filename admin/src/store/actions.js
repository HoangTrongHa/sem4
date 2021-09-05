import axios from "axios"

export const getOrder = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/order/')
        .then(response => {
            commit('SET_ORDER', response.data);
        })
}

export const getCategories = ({commit}) => {
    axios.get('https://bigboss-api-sem4.herokuapp.com/api/v1/category')
        .then(response => {
            commit('SET_CATEGORIES', response.data);
        })
}
