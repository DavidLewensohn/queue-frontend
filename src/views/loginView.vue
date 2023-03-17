<template>
<h1>This is an login view</h1>
    <div v-if="!user">
        <GoogleLogin :callback="handleLogin" />
    </div>
    <div v-else-if="user === 'NEW_USER'">
        <input v-model="newUser.firstName" placeholder="First name" />
        <input v-model="newUser.lastName" placeholder="Last name"/>
        <input v-model="newUser.email" placeholder="Email"/>
        <button @click=" addUser">Sign in</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            userId: '',
            newUser: {
                firstName: '',
                lastName: '',
                email: '',
                meetings: []
            }
        }
    },
    methods: {
        getUser() {
            console.log('Getting user:', this.userId)
            this.$store.dispatch('loadUser', this.userId)
        },
        handleLogin(response) {
            console.log("Handle the response", response)
            const googleToken = response.credential
            this.$store.dispatch('loadGoogleUser', googleToken)
            this.$router.push('/host')
            

        },
        addUser(){
            console.log('adding new user:', this.newUser);
            this.$store.dispatch('addUser', this.newUser)
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },

    }
}
</script>


