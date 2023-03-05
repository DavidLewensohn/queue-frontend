<template>
    <h1>Host edit page</h1>
    <div v-if="user">
        <p><input v-model="user.firstName" /><input v-model="user.lastName" /></p>
        <div class="meeting" v-for="(meeting, index) in user.hostedMeetings">
            <p><input v-model="meeting.queuerFirstName
            " /><input v-model="meeting.queuerLastName" />
            <p class="datepicker">
                <datepicker v-model="meeting.date" />
            </p> <input v-model="meeting.length" />
            <input v-model="meeting.description" /> <button @click="removeMeet(index)">Remove</button>
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
                "queuerFirstName": "",
                "queuerLastName": "",
                "date": date.toISOString(),
                "description": "",
                "length": 30
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

