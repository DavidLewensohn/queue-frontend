import { createStore } from 'vuex'
import hostStore from './modules/host-store.js'


const store = createStore({
    modules: {hostStore}
})
export default store