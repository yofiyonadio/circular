import { Response, Request } from 'express'

import { Responser, Logger, Random, Axios } from '..'

class Pokemon {

    random(req: Request, res: Response) {

        const random = Random.number(1, 500)

        Axios.get('https://pokeapi.co/api/v2/pokemon-form/' + random, '')
            .then(datas => {
                Responser.good(datas, res)
            })
            .catch(error => {
                Responser.bad(error, res)
            })

    }


}

export default new Pokemon()
