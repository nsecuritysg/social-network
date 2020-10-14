import * as Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '62b324e3-3c7b-4be0-920f-135e6d9024c3' }

})

export const usersAPI = {

    getUsers( currentPage = 1, pageSize = 10 ) {
        return instance.get(`users?page=${ currentPage }&${ pageSize }`)
            .then(response => response.data);
    },

    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },

    getUserProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${ userId }`)
            .then(response => response.data);
    },

    unfollow(userId) {
        return instance.delete(`follow/${ userId }`)
            .then(response => response.data);
    }
}

// export const unfollowUser = (userId) => {
//     return Axios.delete(
//         `https://social-network.samuraijs.com/api/1.0/follow/${
//             userId
//         }`,
//         {},
//         {
//           withCredentials: true,
//           headers: {
//             'API-KEY': '62b324e3-3c7b-4be0-920f-135e6d9024c3'
//           }
//         }
//       ).then(response => response.data);
// }
