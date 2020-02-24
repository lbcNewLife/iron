import * as login from '@/api/login.js'

const actions = {
    Login ({ commit }, postData) {
        return new Promise((resolve, reject) => {
            login
                .login(postData)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}

export default actions