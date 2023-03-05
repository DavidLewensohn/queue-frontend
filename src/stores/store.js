import { createStore } from 'vuex'
import userStore from './modules/user-store.js'


const store = createStore({
    modules: {userStore}
})
export default store