import { httpService } from './http-service'
export const hostService = {
    getHost,
    updateHost,
    newHost,
    updateQueuerMeeting,

}
const ENDPOINT = 'queue'

async function getHost(hostId){
    return await httpService.get(ENDPOINT + '/' + hostId)
   }
async function updateHost(host){
    return await httpService.put(ENDPOINT + '/', host)
   }
async function updateQueuerMeeting(meeting){
    return await httpService.put(ENDPOINT + '/meeting/', meeting)
   }
async function newHost(host){
    return await httpService.post(ENDPOINT + '/', host)
   }
