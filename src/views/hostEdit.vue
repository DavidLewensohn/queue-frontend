<template>
    <h1>Host edit page</h1>
    <div v-if="host">
        <p><input v-model="host.firstName" /><input v-model="host.lastName" /></p>
        <div class="meeting" v-for="(meeting, index) in host.hostedMeetings">
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
            host: null,
        }
    },
    methods: {
        updateMeeting(index) {
            console.log("Saving host:", this.host)
            this.$store.dispatch('updateQueuerMeeting', this.host.hostedMeetings[index])
            this.$store.dispatch('updateHost', this.host)
            this.$router.push('/host/')
        },
        removeMeet(index) {
            this.host.hostedMeetings.splice(index, 1)
        },
        addMeeting() {
            let date = new Date();
            this.host.hostedMeetings.push({
                "queuerFirstName": "",
                "queuerLastName": "",
                "date": date.toISOString(),
                "description": "",
                "length": 30
            })
        },
        async getHost() {
            this.host = await this.$store.getters.getHost
        }
    },
    computed: {
    },
    created() {
        this.getHost()
    }
}
</script>

