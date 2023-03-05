<template>
    <h1>Queuer page</h1>
    <div v-if="!user">
        <GoogleLogin :callback="handleLogin" />
    </div>
    <div v-else-if="user === 'NEW_USER'">
        <input v-model="newUser.firstName" placeholder="First name" />
        <input v-model="newUser.lastName" placeholder="Last name" />
        <input v-model="newUser.email" placeholder="Email" />
        <button @click="addUser">Sign in</button>
    </div>
    <div v-else class="queuerInformation">
        <h2>Hello {{ user.firstName + ' ' + user.lastName }}</h2>
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Meeting Date</th>
                    <th>Length</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Phon</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="meeting in user.queuedMeetings">
                    <td>{{ meeting.hostFirstName + ' ' + meeting.hostLastName }}</td>
                    <td>{{ formatDate(meeting.date) }}</td>
                    <td>{{ meeting.length }} minutes</td>
                    <td>{{ meeting.description }}</td>
                    <td>{{ meeting.address }}</td>
                    <td>{{ meeting.userPhonNumber }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import moment from 'moment'

export default {
    data() {
        return {
            userId: '',
            newUser: {
                firstName: 'Duvid',
                lastName: 'Lev',
                email: 'duvid777@gmail.com',
                meetings: []
            }
        }
    },
    methods: {
        getUser() {
            console.log('Getting user:', this.userId)
            this.$store.dispatch('loadUser', this.userId)
        },
        editUser(userId) {
            this.$router.push('/host-edit/' + userId)
        },
        formatDate(date) {
            return moment(date).format("MM/DD/YYYY hh:mm A")
        },
        handleLogin(response) {
            console.log("Handle the response", response)
            const googleToken = response.credential;
            console.log("handleLogin  googleToken:", googleToken)
            this.$store.dispatch('loadGoogleUser', googleToken)

        },
        addUser() {
            console.log('adding new user:', this.newUser);
            this.$store.dispatch('addUser', this.newUser)
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },

    },
    mounted() {
        console.log('Upload component', this.userId)
    }
}
</script>

