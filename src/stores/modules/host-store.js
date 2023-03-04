import { hostService } from '../../services/host-service'
import { userService } from '../../services/user-service'


export default {
    state: {
        host:null,
    },
    getters: {
        getHost(state) {
            return state.host
        }
    },
    mutations: {
        setHost(state, { host }) {
            state.host = host
            console.log('host:', state.host)
        },
        setUpdatedHost(state, { updatedHost }) {
            state.host = updatedHost
            console.log('host:', state.host)
        },
    },
    actions: {
        async loadUser(context, gToken) {
            console.log('from loadUser')
            try {
                var host = await userService.getUser(gToken)
                context.commit({ type: 'setHost', host })
            } catch (err) {
                console.log(err)
            }
        },
        async loadHost(context, hostId) {
            console.log('from loadHost')
            try {
                const host = await hostService.getHost(hostId)
                // const host = await hostService.getHost(hostId)
                context.commit({ type: 'setHost', host })
            } catch (err) {
                console.log(err)
            }
        },
        async updateHost(context, host) {
            console.log('from updateHost')
            try {
                const updatedHost = await hostService.updateHost(host)
                console.log("updatedHost:",updatedHost);
                context.commit({ type: 'setUpdatedHost', updatedHost })
            } catch (err) {
                console.log(err)
            }
        },
        async updateQueuerMeeting(context, meeting) {
            console.log('from updateQueuerMeeting')
            try {
                const updatedQMeeting = await hostService.updateQueuerMeeting(meeting)
                console.log("updatedQMeeting:",updatedQMeeting);
            } catch (err) {
                console.log(err)
            }
        },
        async addHost(context, host) {
            console.log('from addHost')
            try {
                const updatedHost = await hostService.newHost(host)
                console.log("newHost:",updatedHost);
                context.commit({ type: 'setUpdatedHost', updatedHost })
            } catch (err) {
                console.log(err)
            }
        },
    },
}

