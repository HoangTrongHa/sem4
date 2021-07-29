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

// export const getProvince = ({ commit }) => {
    
//     // axios.get('https://thongtindoanhnghiep.co/api/city',{ "body":data }, {
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     }
//     // } )
//     // .then(res => {
//     //     commit('SET_PROVINCE', res.data)
//     // })
//     var options = {
//         method: 'GET',
//         url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
//         params: {location: 'vietnamese'},
//         headers: {
//           'x-rapidapi-key': '7a2dec306dmsh1d2b6935b15b08ep14820ajsn10cc97694aa0',
//           'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
//         }
//       };
      
//       axios.request(options).then(function (response) {
//             commit('SET_PROVINCE', response.data)
//       }).catch(function (error) {
//           console.error(error);
//       });
// }

// export const addProductToCart = ({ commit }, { state }) => {
//         state.cart = userData
//         console.log(userData)
//         localStorage.setItem('user', JSON.stringify(userData))
//         axios.defaults.headers.common.Authorization = `Bearer ${userData.access_token}`
// }
// export const addProductToCart = ({ commit }, { item =  }) => {
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

export const getCity = ({ commit }) => {
    axios.get('http://localhost:15000/city')
    .then(res => {
        commit('SET_CITY', res.data)
    })
}

export const getDistrict = ({ commit }) => {
    axios.get('http://localhost:15000/district')
    .then(res => {
        commit('SET_DISTRICT', res.data)
    })
}

export const getWard = ({ commit }) => {
    axios.get('http://localhost:15000/ward')
    .then(res => {
        commit('SET_WARD', res.data)
    })
}

export const getGallery = ({ commit }) => {
    axios.get('http://localhost:15000/gallery-lookbook')
    .then(res => {
        commit('SET_GALLARY', res.data)
    })
}

export const getDataUser = ({ commit }) => {
    commit('SET_USER', localStorage.getItem('user'))
}

export const getAllOrder = ({ commit }) => {
    axios.get('http://localhost:15000/order')
    .then(res => {
        commit('SET_ORDER', res.data)
    })
}