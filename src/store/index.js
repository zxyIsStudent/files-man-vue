import {createStore} from 'vuex';
import permission from "./modules/permussion";
import getters from './getters';

export default createStore ({
    state: {
        isCollapse: false
    },
    mutations:{
        increment (state,num) {
            state.isCollapse = num
        }
    },
    actions: {
        
    },
    modules:{
        permission
    },
    getters
})
