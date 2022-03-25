import axios from 'axios';
import { Actions,Mutations } from '../constants/storeconstants';
const API_URL = 'http://127.0.0.1:8000/api/v1/';

export default {

    state: {
        token: null,
        user: {},
        posts: [],
    },

    getters : {

        getAllPosts(state){
            return state.posts;
        }

    },

    mutations: {
        [Mutations.SET_USER](state,data){
            state.posts = data;
        }
    },

    actions: {
        [Actions.LOGIN](context,credentials){

            return new Promise((resolve, reject) => {
                axios.post(API_URL + 'login', credentials).then(response => {
                    console.log(response);
                    resolve(response); 
                }, error => {
                    console.log(error);
                    reject(error);
                })
            })

            // axios
            // .get(`https://reqres.in/api/users?page=2`)
            // .then((response) => {
            // var posts = response.data.data;
            // // console.log(posts);
            // context.commit(Mutations.SET_USER, posts);
            // })
            // .catch((error) => {
            // console.log(error);
            // });
        }
    }
}
