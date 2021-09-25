
import axios from "axios";

class Axios {
    get(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                timeout: 30000, // in ms
                data: data,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => reject(error));
        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                timeout: 30000, // in ms
                data: data,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => reject(error));
        })
    }
}

export default new Axios()