<template>
    <div id="sms">
        <div class="wrapper">
        <header class="topnavbar-wrapper">
            <!-- START Top Navbar-->
            <nav role="navigation" class="navbar topnavbar">
                <!-- START navbar header-->
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">
                        <div class="brand-logo">
                            <img src="../img/logo.png" alt="App Logo" class="img-responsive">
                        </div>
                        <div class="brand-logo-collapsed">
                            <img src="../img/logo-single.png" alt="App Logo" class="img-responsive">
                        </div>
                    </a>
                </div>
                <!-- END navbar header-->
                <!-- START Nav wrapper-->
                <div class="nav-wrapper">
                    <!-- START Left navbar-->
                    <ul class="nav navbar-nav">
                        <li>
                            <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
                            <a @click="openAside =! openAside" data-toggle-state="aside-collapsed" class="hidden-xs" title="Collapse/expand sidebar">
                                <em class="fa fa-navicon"></em>
                            </a>
                            <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->
                            <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" class="visible-xs sidebar-toggle">
                                <em class="fa fa-navicon"></em>
                            </a>
                        </li>
                        <!-- START User avatar toggle-->
                        <li>
                            <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
                            <a id="user-block-toggle" href="#user-block" data-toggle="collapse" title="Show/hide user block">
                                <em class="icon-user"></em>
                            </a>
                        </li>
                        <!-- END User avatar toggle-->
                        <!-- START lock screen-->
                        <li>
                            <a href="#login" title="Logout" v-on:click="logout">
                                <em class="icon-logout"></em>
                            </a>
                        </li>
                        <!-- END lock screen-->
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Search icon-->
                        <li>
                            <a href="javascript:void(0)">Balance:
                                {{ userBalance }}$                        </a>
                            </li>
                            <!-- Fullscreen (only desktops)-->
                            <!-- END Offsidebar menu-->
                        </ul>
                        <!-- END Right Navbar-->
                    </div>
                </nav>
                <!-- END Top Navbar-->
        </header>                
        <aside class="aside" v-show="openAside">
            <div></div>
                <!-- START Sidebar (left)-->
            <div class="aside-inner">
                <nav data-sidebar-anyclick-close="" class="sidebar">
                        <!-- START sidebar nav-->
                        <ul class="nav">
                            <!-- START user info-->
                            <li class="has-user-block">
                                <div id="user-block" class="collapse">
                                    <div class="item user-block">
                                        <!-- User picture-->
                                        <div class="user-block-picture">
                                            <a href="http://portal.opentact.org/edit-profile/16"
                                            data-target="#myModal"
                                            data-toggle="modal">
                                            <div class="user-block-status">
                                                <img src="../img/userpic.png"
                                                alt="Avatar"
                                                title="Click to edit"
                                                width="60" height="60" class="img-thumbnail img-circle">
                                                <div class="circle circle-success circle-lg"></div>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- Name and Job-->
                                    <div class="user-block-info">
                                        <span class="user-block-name">Hello, {{dev_new}}</span>
                                        <!--<span class="user-block-role">oper</span>-->
                                    </div>
                                </div>
                            </div>
                        </li>                
                        <!-- END user info-->
                        <!-- Iterates over all sidebar items-->
                        <li class="nav-heading ">
                            <span data-localize="sidebar.heading.HEADER">Main menu</span>
                        </li>
                        <li class=" ">
                            <router-link to="/" title="APP">
                                <em class="icon-list"></em>
                                <span>APP List</span>
                            </router-link>
                        </li>
                        <li class="dashboard">
                            <a href="" title="APP Dashboard" data-toggle="collapse">
                                <div class="pull-right label label-info">
                                    {{app_count}}
                                </div>
                                <em class="icon-speedometer"></em>
                                <span>APP Dashboard</span>
                            </a>
                        </li>
                        <li class=" ">
                            <router-link to="/cdr" title="CDR">
                                <em class="icon-call-out"></em>
                                <span>View CDR</span>
                            </router-link>
                        </li>
                        <li class=" ">
                            <router-link to="/payments" title="CDR">
                                <em class="fa fa-credit-card"></em>
                                <span>Payment History</span>
                            </router-link>
                        </li>
                        <li class=" ">
                            <router-link to="/usage-history" title="Usage History">
                                <em class="fa fa-history"></em>
                                <span>Usage History</span>
                            </router-link>
                        </li>
                        <li class=" ">
                            <a href="#app_config" title="APP Config" data-toggle="collapse">
                                <em class="fa fa-cog"></em>
                                <span>Config</span>
                            </a>
                            <ul id="app_config" class="nav sidebar-subnav collapse">
                                <li class="">
                                    <router-link to="/config/mass-call" title="Enable Mass  Call API">
                                        <span>Enable Mass Call API</span>
                                    </router-link>
                                </li>
                                <li class="">
                            <router-link to="/config/google-api" title="Manage Google API">
                                <span>Manage API</span>
                            </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-heading">
                            <span data-localize="sidebar.heading.HEADER">Manage APP: {{ $route.params.id}}</span>
                        </li>


                    <li class="show" v-if="$route.params.id">
                        <router-link to="#app-rates" title="Finance" data-toggle="collapse">
                            
                            <em class="fa fa-money"></em>
                            <span>Finance</span>
                        </router-link>
                    
                        <ul id="app-rates" class="nav sidebar-subnav collapse">
                            
                            <li class="">
                                <router-link v-bind:to="goToOrigin"  title="Sell rates">
                                    
                                    <em class="fa fa-phone"></em>
                                    <span>Origination rates</span>
                                </router-link>
                                
                            </li>
                            
                            <li class="">
                                <router-link v-bind:to="goToTerm" title="Mass rates">
                                    
                                    <em class="fa fa-phone"></em>
                                    <span>Termination rates</span>
                                </router-link>
                                
                            </li>
                
                        </ul>

                </li>
                <li class="show" v-if="$route.params.id">
                    <router-link v-bind:to="goToSMS" title="SMS">

                        <em class="icon-speech"></em>
                        <span>SMS</span>
                    </router-link>
                    
                </li>
                <li class=" " >
                    <a href="#friendList" title="Friends" data-toggle="collapse" class=" ">

                        <em class="icon-user"></em>
                        <span>Friends</span>
                    </a>
                    
                    <ul id="friendList" class="nav sidebar-subnav collapse ">

                        <li class="">
                            <router-link v-bind:to="goToFriend" title="Friend List">

                                <em class="fa fa-paper-plane"></em>
                                <span>Friend List</span>
                            </router-link>

                        </li>

                        <li class="">
                            <router-link v-bind:to="goToBlock" title="Block List">

                                <em class="fa fa-file-text"></em>
                                <span>Block List</span>
                            </router-link>

                        </li>

                    </ul>

                </li>
                <li class="show" v-if="$route.params.id">
                    <router-link v-bind:to="goToDid" onClick="window.location.reload()"  title="DID">

                        <em class="fa fa-phone-square"></em>
                        <span>Manage DID</span>
                    </router-link>
                </li>
                <li class="">
                    <router-link v-bind:to="goToConf" onClick="window.location.reload()" title="Conference log">
                        <em class="fa fa-file-text"></em>
                        <span>Conference log</span>
                    </router-link>
                <li  class=" ">
                    <router-link v-bind:to="goToQue" title="Queues">
                        <em class="fa fa-list"></em>
                        <span>Queues</span>
                    </router-link>
                </li>
                
                <li class="show">
                    <router-link v-bind:to="linkFunc" title="Users">

                        <div class="pull-right label label-info">
                            {{countUsers}}
                        </div>
                        <em class="icon-user"></em>
                        <span>Users</span>
                    </router-link>
                    
                </li>
                    </ul>
                    <!-- END sidebar nav-->
                </nav>
            </div>
            <!-- END Sidebar (left)-->
        </aside>
        <section v-bind:class="{styleSec: openAside}">
                <div class="content-wrapper">
                     <ul id="app_list" class="nav sidebar-subnav collapse app_list ">
                        <li class="sidebar-subnav-header">APP Dashboard</li>
                        
                        <li class="das_hov"  v-for="devs in app_data">
                            <!--<router-link to='/dashboard/Test App' title="Test App">
                                <span v-on:click="saveId(devs.uuid)">{{devs.name }}</span>
                            </router-link>-->
                            <a :href="'#/dashboard/' + devs.name" v-on:click="saveId(devs.uuid,devs.suspended)">
                                <span >{{ devs.name }}</span>
                            </a>
                        </li>
                  </ul>
            <div class="content-heading">
                SMS inbox
                <small> View SMS Inbox </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-1 manage-btn" id="sendSmsButoon">
                    <a href="" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-paper-plane"></i>
                           </span>Send sms
                    </a>
                </div>
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer">
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="dataTables_length" id="table_length">
                                    <!--<label>Display <select name="table_length" aria-controls="table" class="form-control input-sm">
                                    <option value="10">10</option><option value="25">25</option><option value="50">50</option>
                                    <option value="100">100</option></select> Records per page</label>-->
                                </div>
                            </div>
                            <div class="col-xs-6"><div id="table_filter" class="dataTables_filter">
                                <label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table"></label>
                                </div>
                            </div>
                        </div>
                        <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1057px;">
                        <thead>
                        <tr role="row">
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 83px;">ID</th>
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Source: activate to sort column ascending" style="width: 171px;">Source</th>
                            <th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Destination: activate to sort column ascending" style="width: 259px;" aria-sort="descending">Destination</th>
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Message: activate to sort column ascending" style="width: 201px;">Message</th>
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Date Time: activate to sort column ascending" style="width: 233px;">Date Time</th></tr>
                        </thead>
                        <tbody>
                            <tr role="row" v-for="sms in get_sms">
                                <td tabindex="0" aria-controls="table" rowspan="1" colspan="1" >{{ }}</td>
                                <td tabindex="0" aria-controls="table" rowspan="1" colspan="1" >{{ }}</td>
                                <td tabindex="0" aria-controls="table" rowspan="1" colspan="1" >{{ }}</td>
                                <td tabindex="0" aria-controls="table" rowspan="1" colspan="1" >{{ }}</td>
                                <td tabindex="0" aria-controls="table" rowspan="1" colspan="1" >{{ }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div>
                    <div class="col-xs-6">
                        <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                            <!--<ul class="pagination">
                                <li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous">
                                    <a href="#">Previous</a></li><li class="paginate_button next disabled" aria-controls="table" tabindex="0" id="table_next">
                                    <a href="#">Next</a>
                                </li>
                            </ul>-->
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        </div>
        </section>
        <footer>
            <span>Opentact © 2015</span>
        </footer>

    </div>



  <div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade in" style="display: none;">
        <div class="modal-dialog" id="modal-dialog" style="width: 600px;">
            <div class="modal-content" style="padding-bottom: 0px">
                <link rel="stylesheet" href="http://portal.opentact.org/vendor/chosen_v1.2.0/chosen.min.css">
                
                <div class="modal-header" style="margin-bottom: 10px;">
                    <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Send sms
                </h4>
                </div>
                <div class="hide preloader" style="text-align: center; margin: 10px;">
                    <div class="loader-demo">
                        <div class="ball-scale-multiple block-center">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            <form>
                <div class="modal-body" style="overflow: auto">
                        <input class="form-control" type="hidden" name="app_id" value="107">        
                        <div class="form-group">
                            <label for="users" class="control-label">Destination Number</label>
                            <select class="form-control" id="users" multiple="true" data-placeholder="Select users" name="users[]" style="display: none;">
                            </select>
                            <div class="chosen-container chosen-container-multi" style="width: 553px;" title="" id="users_chosen">
                                <ul class="chosen-choices">
                                    <li class="search-field">
                                        <input type="text" value="Select users" name="user" v-model="user" class="default" autocomplete="off" style="width: 95px;">
                                    </li>
                                </ul>
                                <div class="chosen-drop">
                                    <ul class="chosen-results"></ul>
                                </div>
                            </div>
                        </div>        
                        <div class="form-group">
                            <label for="message" class="control-label">Message</label>
                            <textarea class="form-control" rows="7" id="message" name="message" v-model="message"></textarea>
                        </div>    
                        <div class="pull-right">
                            <div>
                                <button class="btn btn-lg btn-info"  id="task-submit-btn" type="submit" v-on:click="sendSms">Send</button> 
                                <button class="btn btn-lg btn-default" data-dismiss="modal" type="button">Close</button>
                            </div>        
                            <input class="form-control" type="hidden" name="_token" value="KIohPZ1oAxOpOWLxU5odbTTaRT1DxNGBEb0dlynl">    
                        </div>
                    </div>
                    <div style="clear: both"></div>
                    <br>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>

    
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import config from '../config.js'

Vue.use(VueRouter)
Vue.use(VueResource)

//  var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };
var dat;

//**** local Storgs
var userId = localStorage.getItem("userUuid");
var userDevToken = localStorage.getItem("userDevToken");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
var devCount = localStorage.getItem("devCount");

    export default{
      name: 'sms',
      data(){
          return{
            app_data: [],
            get_sms: [],
            app_count: '',
            user: '',
            message: '',
            userBalance: 0,
            dev_new: developer_name,
            checkId: null,
            countUsers: 0,
            user_id: localStorage.getItem('userId'),
            goToSMS: '',
            goToOrigin: '',
            goToTerm: '',
            goToFriend: '',
            goToBlock: '',
            goToDid: '',
            goToConf: '',
            goToQue: '',
            goToUser: '',
            openAside: true,
          }
      },
    created: function(){
            this.getData();
            this.getSms();
            this.getIdentity();
            document.title = 'SMS Inbox :: Developer UI';
            this.checkId = localStorage.getItem("userUuid");
            if(this.checkId == null){
                this.$router.push("/login");
            }
        },
    computed:{
        linkFunc:function(){
            this.goToSMS = "/dashboard/"+ this.$route.params.id +"/sms";
            this.goToOrigin = "/app_origin/" + this.$route.params.id;
            this.goToTerm = "/app_term/" + this.$route.params.id;
            this.goToFriend = "/dashboard/" + this.$route.params.id + "/friend-list";
            this.goToBlock = "/dashboard/" + this.$route.params.id + "/block-list";
            this.goToDid = "/dashboard/" + this.$route.params.id + "/did";
            this.goToConf = "/dashboard/" + this.$route.params.id + "/conferences";
            this.goToQue = "/dashboard/" + this.$route.params.id + "/queues";
            this.goToUser = "/dashboard/" + this.$route.params.id + "/users";

            return "/dashboard/"+ this.$route.params.id + "/users"
        }
    },
      mounted:function(){
        //    $('.dashboard').mouseover(function(){
        //         $('#app_list').css('display','block')
        //     })
        //     .mouseleave(function(){
        //         $('#app_list').css('display','none')
                
        //     })
            
        //     $('#app_list').mouseover(function(){
        //         $('#app_list').css('display','block')
        //     })
        //     .mouseleave(function(){
        //         $('#app_list').css('display','none')
                
        //     })
         $('.dashboard').hover(function(){
            $('#app_list').css('display','block')
        })
        $('#app_list').mouseleave(function(){
            $(this).css('display','none')
        })
      },
    methods:{
          getIdentity: function() {
             this.$http.get(config.api + config.port + 'app/' + this.user_id + '/identities',{
                headers:{ 
                     "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                   
                }
            }).then(function(response){
                console.log(response)
                    this.countUsers = response.body.ret.length;

                })
        },
        getUserInfo: function(){
             this.$http.get(config.api + config.port + 'int/dev/' + userId,{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              })
              .then(response => {
                    console.log(response)
                    this.userBalance = response.body.ret.balance
                })
        },
        getSms:function(){
            this.getdateNow()
            this.$http.get(config.api + config.port + "identity/" + userId + "/sms_log/2017-02-20_12:00:00/"+ dat,{
                 headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
            }).then(function(response){
                console.log(response)
                this.get_sms = response.body.ret
            })
        },
        sendSms:function(){
            var smsBody = {
                from:userId,
                to: this.user,
                message: this.message
            }
            this.$http.post(config.api + config.port + '/sms/send',smsBody,{
                 headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
            }).then(function(response){
                console.log(response)
                if(response.body.ret != '' || response.body.ret != false){
                    alert("your message has been successfully sent")
                }
            })
        },
         getData: function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              })
              .then(response => {
                  this.app_data = response.body.ret;
                  this.app_count= response.body.ret.length;
                })
          },
          logout: function(){
                localStorage.removeItem('userUuid');
                localStorage.removeItem('userDevToken');
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('dev_name');
                this.$router.push("/login");
                location.reload("/login");
            },
           sortByName:function(){
                if(this.mark_two == 2){
                     this.mark = 1
                     this.mark_two = 1
                }
                else{
                    this.mark = 0;
                    this.mark_two = 2
                }
            },
        getdateNow:function(){
                       
            var date = new Date();
            var d = date.getDay();
            var m = date.getMonth();
            var    h = date.getHours();
            var    min = date.getMinutes();
            var    sec = date.getSeconds();

            if(m<9){
                m = '0'+m
            }
            if(d<9){
                d= '0'+d
            }
            if(h<9){
                h = '0'+h
            }
            if(min<9){
                min = '0'+min
            }
            if(sec<9){
                sec = '0'+sec
            }

    
            dat = date.getFullYear() + '-' + m + '-' + d + '_' + h + ':' + min +':'+ sec
            
        },
        saveId:function(uuid,status) {
                localStorage.removeItem('userId');
                if( localStorage.getItem("appStatus") != ''){
                    localStorage.removeItem('appStatus');
                }
                localStorage.setItem('appStatus', status); 
                localStorage.setItem('userId', uuid); 

        }
    }
    }

</script>








