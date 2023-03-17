<template>
    <h1>Host page</h1>
    <div v-if="user && user != 'NEW_USER'" class="userInformation">
        <h2>Hello {{ user.firstName + ' ' + user.lastName }}</h2>
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Meeting Date</th>
                    <th>Meeting End</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="meeting in user.hostedMeetings">
                    <td>{{ meeting.queuer.firstName + ' ' + meeting.queuer.lastName }}</td>
                    <td>{{ formatDate(meeting.startTime) }}</td>
                    <td>{{ formatDate(meeting.endTime) }}</td>
                    <td>{{ meeting.description }}</td>
                    <td>{{ meeting.address.street + ', '+ meeting.address.city+ ', '+ meeting.address.country}}</td>
                    <td>{{ meeting.queuer.phone }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="editUser(userId)">Edit</button>
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

