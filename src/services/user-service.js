import { httpService } from './http-service'
export const userService = {
    getUser,
    updateUser,
    newUser,
    updateQueuerMeeting,

}
const ENDPOINT = 'queue'

async function getUser(userId){
    return await httpService.get(ENDPOINT + '/' + userId)
   }
async function updateUser(user){
    return await httpService.put(ENDPOINT + '/', user)
   }
async function updateQueuerMeeting(meeting){
    return await httpService.put(ENDPOINT + '/meeting/', meeting)
   }
async function newUser(user){
    return await httpService.post(ENDPOINT + '/', user)
   }
