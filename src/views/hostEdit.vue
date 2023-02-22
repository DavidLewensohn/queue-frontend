<template>
    <h1>Host edit page</h1>
    <div v-if="host">
        <p><input v-model="host.firstName" /><input v-model="host.lastName" /></p>
        <div class="meeting" v-for="(meeting, index) in host.meetings">
            <p><input v-model="meeting.userFirstName" /><input v-model="meeting.userLastName" />
            <p class="datepicker"> <datepicker v-model="meeting.date"/></p>   <input v-model="meeting.length" />
                <input v-model="meeting.description" /> <button @click="removeMeet(index)">Remove</button>
            </p>
            
        </div>
        <button @click="addMeeting()">Add meeting</button>
        <button @click="updateHost()">Save</button>
    </div>

</template>
<script>
import moment from 'moment'
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
        updateHost() {
            console.log("Saving host:", this.host)
            this.$store.dispatch('updateHost', this.host)
            this.$router.push('/host/')
        },
        removeMeet(index) {
            this.host.meetings.splice(index, 1)
        },
        addMeeting() {
            let date = new Date();
            this.host.meetings.push({
                "userFirstName": "",
                "userLastName": "",
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

