<template>
    <h1>Host edit page</h1>
    <div v-if="user && user != 'NEW_USER'">
       <h3>{{user.firstName + ' ' + user.lastName}}</h3> 
        <div class="meeting" v-for="(meeting, index) in user.hostedMeetings">
            <p>
                <input v-model="meeting.queuer.firstName" placeholder="First Name" />
                <input v-model="meeting.queuer.lastName" placeholder="Last Name" />
                <input v-model="meeting.queuer.email" placeholder="Email" />
                <input v-model="meeting.queuer.phone" placeholder="Phone Number" />
            <p class="datepicker">
                <datepicker v-model="meeting.startTime" />
            </p>
            <p class="datepicker">
                <datepicker v-model="meeting.endTime" />
            </p>
            <input v-model="meeting.description" placeholder="Description" />
            <button @click="removeMeet(index)">Remove</button>
            <button @click="updateMeeting(index)">Save</button>
            </p>

        </div>
        <button @click="addMeeting()">Add meeting</button>
    </div>
</template>
<script>
import datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default {
    components: { datepicker },
    data() {
        return {
            user: null,
        }
    },
    methods: {
        updateMeeting(index) {
            console.log("Saving user:", this.user)
            this.$store.dispatch('updateQueuerMeeting', this.user.hostedMeetings[index])
            this.$store.dispatch('updateUser', this.user)
            this.$router.push('/host/')
        },
        removeMeet(index) {
            this.user.hostedMeetings.splice(index, 1)
        },
        addMeeting() {
            let date = new Date();
            this.user.hostedMeetings.push({
                    "host": {
                        "firstName": this.user.firstName,
                        "lastName": this.user.lastName,
                        "email": this.user.email,
                        "phone": this.user.phone
                    },
                    "queuer": {
                        "firstName": '',
                        "lastName": '',
                        "email": '',
                        "phone": ''
                    },
                    "startTime": date.toISOString(),
                    "endTime": date.toISOString(date.setTime(date.getTime() + 60 * 60 * 1000)),
                    "description": '',
                    "address": {
                        "street": '',
                        "city": '',
                        "state": '',
                        "country": ''
                    },
                    "meetingID": Math.floor(Math.random() * 1000000),
                    "status": "upcoming"
                })
        },
        async getUser() {
            this.user = await this.$store.getters.getUser
        }
    },
    computed: {
    },
    created() {
        this.getUser()
    }
}
</script>

