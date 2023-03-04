<template>
    <h1>Queuer page</h1>
    <div v-if="!host">
        <GoogleLogin :callback="handleLogin" />
    </div>
    <div v-else-if="host === 'NEW_USER'">
        <input v-model="newHost.firstName" placeholder="First name" />
        <input v-model="newHost.lastName" placeholder="Last name" />
        <input v-model="newHost.email" placeholder="Email" />
        <button @click="addUser">Sign in</button>
    </div>
    <div v-else class="queuerInformation">
        <h2>Hello {{ host.firstName + ' ' + host.lastName }}</h2>
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
                <tr v-for="meeting in host.queuedMeetings">
                    <td>{{ meeting.hostFirstName + ' ' + meeting.hostLastName }}</td>
                    <td>{{ formatDate(meeting.date) }}</td>
                    <td>{{ meeting.length }} minutes</td>
                    <td>{{ meeting.description }}</td>
                    <td>{{ meeting.address }}</td>
                    <td>{{ meeting.hostPhonNumber }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="editHost(hostId)">Edit</button>
    </div>
</template>
<script>
import moment from 'moment'

export default {
    data() {
        return {
            hostId: '',
            newHost: {
                firstName: 'Duvid',
                lastName: 'Lev',
                email: 'duvid777@gmail.com',
                meetings: []
            }
        }
    },
    methods: {
        getHost() {
            console.log('Getting host:', this.hostId)
            this.$store.dispatch('loadHost', this.hostId)
        },
        editHost(hostId) {
            this.$router.push('/host-edit/' + hostId)
        },
        formatDate(date) {
            return moment(date).format("MM/DD/YYYY hh:mm A")
        },
        handleLogin(response) {
            console.log("Handle the response", response)
            const googleToken = response.credential;
            console.log("handleLogin  googleToken:", googleToken)
            this.$store.dispatch('loadUser', googleToken)

        },
        addUser() {
            console.log('adding new user:', this.newHost);
            this.$store.dispatch('addHost', this.newHost)
        }
    },
    computed: {
        host() {
            return this.$store.getters.getHost
        },

    },
    mounted() {
        console.log('Upload component', this.hostId)
    }
}
</script>

