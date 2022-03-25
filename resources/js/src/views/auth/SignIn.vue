<template>
<div id="app">
    <div class="header">
      <h2 class="logo">&nbsp;</h2>
    </div>
    <div class="login">
        <el-card>
        <h2>Login</h2>
        <el-form
            class="login-form"
            :model="signInModel"
            :rules="rules"
            ref="form"
            @submit.prevent="onSubmit"
        >
            <el-form-item prop="username">
            <el-input v-model="signInModel.username" placeholder="Username" prefix-icon="fas fa-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
            <el-input
                v-model="signInModel.password"
                placeholder="Password"
                type="password"
                prefix-icon="fas fa-lock"
            ></el-input>
            </el-form-item>
            <el-form-item>
            <el-button :loading="loading" class="login-button" type="primary" native-type="submit" block>Login</el-button>
            </el-form-item>
            <a class="forgot-password" href="#">Forgot password ?</a>
        </el-form>
        </el-card>
    </div>
</div>

</template>
<script lang="js">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { Actions } from "@/store/constants/storeconstants";

export default {
    name: 'sign-in',
    setup(){

        const store = useStore();
        const router = useRouter();

        const loading = ref(false);

        const signInModel = ref({
            username: '',
            password: ''
        });

        const rules = ref({
            
        });

        const onSubmit = () => {
            const inputs = {
                email: signInModel.value.username,
                password: signInModel.value.password
            };

            store.dispatch(Actions.LOGIN, inputs)
            .then((data)=>{
                console.log('aaaaaaa');
                console.log(store.getters.getAllPosts())
            })
            .catch(() => {

            });

            // store.dispatch('retrievePosts');
            // console.log('done');
        }

        return { 
            signInModel,
            onSubmit,
            rules,
            loading
        }
    }
}
</script>
<style scoped>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #102a43;
}
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>
<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>