<template>
    <div id="register_wrapper">
	    <div class="wrapper">
        <div class="block-center mt-xl wd-xl">
            <div class="panel panel-dark panel-flat">
                <div class="panel-heading text-center">
                    <a href="/">
                        <img src="../img/logo.png" alt="Image" class="block-center img-rounded">
                    </a>
                </div>
                <div class="panel-body">
                    <p class="text-center pv">SIGNUP TO GET INSTANT ACCESS. </p>
                    <form class="mb-lg" @submit.prevent="register">
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('first name') }">
                            <input type="text" placeholder="First name"
                            name="first name" v-model='first_name'
                            class="form-control"
                            value="" v-validate="'required|alpha|min:3'" v-bind:class="{ 'input': true, 'has-error': errors.has('first name') }">
                            <span class="fa fa-user form-control-feedback text-muted"></span>
                            <span v-show="errors.has('first name')" class="help-block error text-danger" style="color:red">{{ errors.first('first name') }}</span>
                        </div>
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('last name') }">
                            <input type="text" placeholder="Last name"
                            name="last name" v-model='last_name'
                            class="form-control"
                            value="" v-validate="'required|alpha|min:3'" v-bind:class="{ 'input': true, 'has-error': errors.has('last name') }">
                            <span class="fa fa-user form-control-feedback text-muted"></span>
                            <span v-show="errors.has('last name')" class="help-block error text-danger" style="color:red">{{ errors.first('last name') }}</span>
                        </div>
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('country') }">
                            <input type="text" placeholder="Country"
                            name="country" v-model='country' 
                            class="form-control"
                            value="" v-validate="'required|alpha|min:3'" v-bind:class="{ 'input': true, 'has-error': errors.has('country') }">
                            <span class="fa fa-globe form-control-feedback text-muted"></span>
                            <span v-show="errors.has('country')" class="help-block error text-danger" style="color:red">{{ errors.first('country') }}</span>
                        </div>
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('email') }">
                            <input type="email" placeholder="Enter email"
                            name="email" v-model='email'
                            class="form-control"
                            value="" v-validate="'required|email'" v-bind:class="{ 'input': true, 'has-error': errors.has('email') }">
                            <span class="fa fa-envelope form-control-feedback text-muted"></span>
                            <span v-show="errors.has('email')" class="help-block error text-danger" style="color:red">{{ errors.first('email') }}</span>
                        </div>
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('mobile number') }">
                            <input type="text" placeholder="Phone number"
                            name="mobile number" v-model='mobile_number'
                            class="form-control"
                            value="" v-validate="'required|numeric'" v-bind:class="{ 'input': true, 'has-error': errors.has('mobile number') }">
                            <span class="fa fa-phone form-control-feedback text-muted"></span>
                            <span v-show="errors.has('mobile number')" class="help-block error text-danger" style="color:red">{{ errors.first('mobile number') }}</span>
                        </div>
                                                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('user name') }">
                            <input type="text" placeholder="User name"
                            name="user name" v-model='user_name'
                            class="form-control"
                            value="" v-validate="'required|alpha|min:3'" v-bind:class="{ 'input': true, 'has-error': errors.has('user name') }">
                            <span class="fa fa-user form-control-feedback text-muted"></span>
                            <span v-show="errors.has('user name')" class="help-block error text-danger" style="color:red">{{ errors.first('user name') }}</span>
                        </div>
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('password') }">
                            <input type="password" placeholder="Password"
                            name="password" v-model='password'
                            class="form-control"
                            value="" v-validate="'required|min:8'" v-bind:class="{ 'input': true, 'has-error': errors.has('password') }">
                            <span class="fa fa-user form-control-feedback text-muted"></span>
                            <span v-show="errors.has('password')" class="help-block error text-danger" style="color:red">{{ errors.first('password') }}</span>
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-block btn-primary mt-lg" v-on:click="register">Create account</button>
                        </div>
                    </form>


                    <p class="pt-lg text-center">Need to Signup?</p>
                    <router-link to="/login" class="btn btn-block btn-default">Sign in</router-link>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate';

import config from '../config.js'

import Login from './login.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate);

    // var config = {
    //   api: 'http://198.100.149.164',
    //   port: ':8002/'
    // };

    var router = new VueRouter({
    routes: [
    {path: '/login', component: Login}
    ]
});
    export default{
        name: 'register_wrapper',
        router: router,
        data() {  
            return {
                first_name: '',
                last_name: '',
                country: '',
                email: '',
                mobile_number: '',
                user_name: '',
                password: ''
                   }
        },
        methods:{
                register: function(event){
                  this.$validator.validateAll().then(() => {
                  this.$http.post(config.api + config.port + 'ui/dev/register',this.$data, {
                     headers: {
                       'Content-Type': 'application/json',
                       'Authorization': 'djiycslnsrfzvuudwped'
                     }
                    }).then(function (response) {
                        alert("You have successfully registered")
                        this.$router.push("/login")
                        console.log(response);
                    })
                });
 
   
      
    }
  }
}
</script>