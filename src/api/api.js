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


    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
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

export const profileAPI = {

    getProfile(userId) {       
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    }
}


export const authAPI = {
    me(){
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
    // loginMe(email, password, rememberMe){
    //     return instance.post(`login/${email, password, rememberMe}`);
    // }
}
