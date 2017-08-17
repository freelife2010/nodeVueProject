<template>
    <div id="login_wrapper">
        <div class="wrapper">
            <div class="block-center mt-xl wd-xl">
                <div class="panel panel-dark panel-flat">
                    <div class="panel-heading text-center" >
                        <a href="/">
                            <img src="../img/logo.png" alt="Image" class="block-center img-rounded">
                        </a>
                    </div>
                    <div class="panel-body">
                        <p class="text-center pv">SIGN IN TO CONTINUE</p>
                        <form role="form" data-parsley-validate=""
                            class="mb-lg"
                            method="POST"
                            @submit.prevent="login">
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('user_name') }">
                            <input type="text" name="user_name" v-model='user_name' placeholder='User name' required class="form-control" v-validate="'required|min:1'">
                            <span class="fa fa-envelope form-control-feedback text-muted"></span>
                            <span v-show="errors.has('user_name')" class="help-block error text-danger">{{ errors.first('user_name') }}</span>
                            <!--<span v-show="hint1" class="fa fa-exclamation-circle error_danger ">Your password is wrong!</span>-->
                        </div>
                        <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('password') }">
                            <input type="password" name="password" v-model='password' placeholder='Password' required class="form-control" v-validate="'required|min:1'">
                            <span class="fa fa-lock form-control-feedback text-muted"></span>
                            <span v-show="errors.has('password')" class="help-block error text-danger">{{ errors.first('password') }}</span>
                            <span v-show="hint" class="fa fa-exclamation-circle error_danger ">Your password is wrong!</span>
                        </div>
                        <div class="clearfix">
                            <div class="checkbox c-checkbox pull-left mt0">
                                <label>
                                    <input type="checkbox" name="remember" value="">
                                    <span class="fa fa-check"></span>Remember Me
                                </label>
                                </div>
                                <div class="pull-right"><a href="http://portal.opentact.org/password/email" class="text-muted">Forgot your password?</a>
                                </div>
                            </div>
                            <div class="form-group">

                                <button type="button" class="btn btn-block btn-primary mt-lg" v-on:click='login'>Login</button>
                            </div>
                        </form>

                        <p class="pt-lg text-center">Need to Signup?</p>
                        <router-link to="/register" class="btn btn-block btn-default">Register Now</router-link>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import axios from 'axios'

import config from '../config.js'

 
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate);


// var config = {
//   api: 'http://198.100.149.164',
//   port: ':8002/'
// };

    export default {
       name: 'login_wrapper',
       data() {  
          return {
              user_name: '',
              password: '',
              retx: "",
              initAuth: "",
              newAuth: "",
              ishmar: true,
              newAuthUser: "",
              user_uuid: "",
              dev_token: "",
              hint: false,
              hint1: false,
              allDevelopers: ''
          } 

    },
    created: function(){
        this.initFunction();
        this.devCount();
    },
      methods:{
            devCount:function(){
                this.$http.get(config.api + config.port + "dashboard", {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                }
               }).then(function(response){
                   this.allDevelopers = response.body.ret.developers;
                   localStorage.setItem('devCount', this.allDevelopers);
                    
               });
            },
           
          initFunction:function(){
            this.$http.get(config.api + config.port + "init",{
                         headers:{
                             "Content-Type": "application/json",
                              "Authorization": "init" 
                         }
                     }).then(function(response){
                         
                        this.initAuth = response.body.ret;
                         console.log(this.initAuth);
                     });
          },

        login: function(event){
            
             this.$validator.validateAll().then(() => {
                    //console.log(this.$data);
                    
                 if(this.user_name == "admin" ){
                     
                         if(this.initAuth != ""){

                         var getAuth = {
                                token: this.initAuth,
                                user: ""
                         };
                         console.log(this.initAuth);
                         this.$http.post(config.api + config.port + "init/" + this.initAuth, getAuth,{
                             headers:{
                                 "Content-Type": "application/json",
                                 "Authorization": "init"
                             }
                         }).then(function(response){
                             console.log(response);
                             this.newAuth = response.body.doc.token;
                             console.log(this.newAuth);
                             localStorage.setItem('newAuthadmin', this.newAuth);
                                
                         });
                         };
                         var pass = {
                                password: this.password,
                         }
                        this.$http.post(config.api + config.port + 'int/check_admin_password',pass, {
                         headers: {
                            'Content-Type': 'application/json',
                            "Authorization": "jsqxjaejwjhyqkhgyrem"
                        }
                     }).then( function(response){
                         console.log(response);
                         
                         if(response.body.ret === true){
                             console.log(response);
                             alert("Welcome Admin!");
                              this.$router.push("/dev");

                            if(this.ishmar == true){
                                    location.reload("/dev");
                                    this.ishmar = false;
                                }
                         }
                         else{
                             this.hint = true
                         }
                     }).catch(function(error){
                         if(error.ok === false){
                            alert('server error');
                        }
                     })
                 }
                 else {
                     var userBody = {
                         user_name:this.user_name,
                         password: this.password
                     }
                    this.$http.post(config.api + config.port + 'ui/login',userBody,{
                        headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "jsqxjaejwjhyqkhgyrem"
                        }
                    }).then(function(response){
                        console.log(response);
                        
                        if(response.body.ret != "" || response.body.ret != false){
                             console.log(response.body.ret);
                             this.user_uuid = response.body.ret.uuid;
                             this.dev_token = response.body.ret.dev_token;
                             localStorage.setItem('userUuid', this.user_uuid);
                             localStorage.setItem('userDevToken', this.dev_token);
                             this.$router.push("/")

                              if(this.ishmar == true){
                                  alert("Welcome Developer!");
                                    location.reload("/");
                                    this.ishmar = false;
                                    localStorage.setItem('dev_name',this.user_name)
                            }
                         }
                        else{
                             this.hint = true
                            }
                        this.retx = response.data.ret;
                    }).catch(function(error){
                         if(error.ok === false){
                            alert('server error');
                        }
                     });
                 }
            })
        } 
    }
}
        


</script>