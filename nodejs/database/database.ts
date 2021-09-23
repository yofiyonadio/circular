import { Pool } from 'pg'
import { Color, Logger } from '..'


class Database {

    async pool() {
        return new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT as any,
        })
    }

    async init() {
        await this.pool()
            .then(async client => {
                client.connect((error, client) => {
                    if (error) {
                        throw 'Database Connection Error!'
                    }
                    client.release()
                    Logger.log('Database Connection success!', Color.blue)
                })
            })
    }

    async client(query: string) {
        return new Promise((resolve, reject) => {
            this.pool()
                .then(client => {
                    client.connect(async (error, client) => {
                        if (error) {
                            reject(error)
                        }
                        await client.query(query)
                            .then(res => {
                                client.release()
                                resolve(res)
                            })
                            .catch(err => {
                                client.release()
                                reject(err)
                            })
                    })
                })
        })
    }
}



export default new Database()