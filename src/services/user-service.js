import { httpService } from './http-service'
export const userService = {
    getUser,

}
const ENDPOINT = 'queue'

async function getUser(gToken){
    return await httpService.get(ENDPOINT + '/user/' + gToken)
   }

