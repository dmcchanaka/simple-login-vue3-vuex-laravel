import { createStore, createLogger } from "vuex";

import AuthModule from '@/store/modules/AuthModule';
import { Actions } from "./constants/storeconstants";

const store = createStore({
    plugins: [createLogger()],
    modules: {
        AuthModule
    },
    state: {
        token: null,
        user: {},
        posts: [],
    },

    getters: {

    },

    mutations: {
        // retrievePosts(state, posts) {
        //     state.posts = posts;
        // }
    },

    actions: {

        // [Actions.LOGIN](credentials){
        //     console.log('ssssss');
        // }

        // retrievePosts(context) {
        //     axios
        //       .get(`https://reqres.in/api/users?page=2`)
        //       .then((response) => {
        //         var posts = response.data.data;
        //         console.log(posts);
        //         context.commit('retrievePosts', posts);
        //       })
        //       .catch((error) => {
        //         console.log(error);
        //       });
        //   }
    }
});

export default store;