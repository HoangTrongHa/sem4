import axios from "axios"

export const getMenu = ({ commit }) => {
    axios.get('http://localhost:5000/menu')
    .then(response => {
        commit('SET_MENU', response.data);
    })
}