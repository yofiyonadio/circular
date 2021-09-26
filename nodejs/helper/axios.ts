
import axios from 'axios'

class Axios {

    config(urls: string, datas: any, methods: any) {
        return new Promise((resolve, reject) => {
            axios({
                method: methods,
                url: urls,
                timeout: 30000,
                data: datas,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            })
                .then((response: any) => {
                    resolve(response)
                })
                .catch((error: any) => reject(error))
        })
    }

    get(url: string, data: any) {
        return new Promise((resolve, reject) => {
            this.config(url, data, 'GET')
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    post(url: string, data: any) {
        return new Promise((resolve, reject) => {
            this.config(url, data, 'POST')
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}

export default new Axios()