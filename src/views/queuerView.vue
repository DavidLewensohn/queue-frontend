<template>
    <h1>Queuer page</h1>
    <div v-if="user && user != 'NEW_USER'" class="queuerInformation">
        <h2>Hello {{ user.firstName + ' ' + user.lastName }}</h2>
        <table>
            <thead>
                <tr>
                    <th>Host Name</th>
                    <th>Meeting Date</th>
                    <th>Meeting End</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Host Phon</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="meeting in user.queuedMeetings">
                    <td>{{ meeting.host.firstName + ' ' + meeting.host.lastName }}</td>
                    <td>{{ formatDate(meeting.startTime) }}</td>
                    <td>{{ formatDate(meeting.endTime) }}</td>
                    <td>{{ meeting.description }}</td>
                    <td>{{ meeting.address.street }}</td>
                    <td>{{ meeting.host.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>{{ login() }}</div>
</template>
<script>
import moment from 'moment'

export default {
    data() {
        return {
            userId: '',
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
        login(){
            this.$router.push('/login')
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },

    }
}
</script>

