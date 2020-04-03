import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    asideWidth:"260px",
    isCollapse:false
}
const mutations={
    changeWidth(state){
        const newWidth=state.isCollapse?"64px":"260px";
        state.asideWidth=newWidth;
    },
    changeCollapse(state,payload){
        const status= typeof payload==="undefined"?!state.isCollapse:payload;
        state.isCollapse=status

    }
}
const actions={

}
export default new Vuex.Store({
    state,mutations,actions

})