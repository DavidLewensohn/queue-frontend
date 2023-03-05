import { userService } from '../../services/user-service'
import { gUserService } from '../../services/gUser-service'


export default {
    state: {
        user:null,
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
            console.log('user:', state.user)
        },
        setUpdatedUser(state, { updatedUser }) {
            state.user = updatedUser
            console.log('user:', state.user)
        },
    },
    actions: {
        async loadGoogleUser(context, gToken) {
            console.log('from loadGoogleUser')
            try {
                var user = await gUserService.getUser(gToken)
                context.commit({ type: 'setUser', user })
            } catch (err) {
                console.log(err)
            }
        },
        async loadUser(context, userId) {
            console.log('from loadUser')
            try {
                const user = await userService.getUser(userId)
                // const user = await userService.getUser(userId)
                context.commit({ type: 'setUser', user })
            } catch (err) {
                console.log(err)
            }
        },
        async updateUser(context, user) {
            console.log('from updateUser')
            try {
                const updatedUser = await userService.updateUser(user)
                console.log("updatedUser:",updatedUser);
                context.commit({ type: 'setUpdatedUser', updatedUser })
            } catch (err) {
                console.log(err)
            }
        },
        async updateQueuerMeeting(context, meeting) {
            console.log('from updateQueuerMeeting')
            try {
                const updatedQMeeting = await userService.updateQueuerMeeting(meeting)
                console.log("updatedQMeeting:",updatedQMeeting);
            } catch (err) {
                console.log(err)
            }
        },
        async addUser(context, user) {
            console.log('from addUser')
            try {
                const updatedUser = await userService.newUser(user)
                console.log("newUser:",updatedUser);
                context.commit({ type: 'setUpdatedUser', updatedUser })
            } catch (err) {
                console.log(err)
            }
        },
    },
}

