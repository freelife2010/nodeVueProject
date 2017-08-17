<template>
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
                            <a data-toggle-state="aside-collapsed" class="hidden-xs" title="Collapse/expand sidebar" @click="openAside =! openAside">
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
                            <a class="ceil_bar_hover" title="Logout"  v-on:click="logout">
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
                                            <a href=""
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
                                        <!--<span class="user-block-role">{{dev_new}}</span>-->
                                    </div>
                                </div>
                            </div>
                        </li>                
                        <!-- END user info-->
                        <!-- Iterates over all sidebar items-->
                        <li class="nav-heading ">
                            <span data-localize="sidebar.heading.HEADER">Main menu</span>
                        </li>
                        <li class="">
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
                            <router-link to="/usage-country" title="Usage Country">
                                <em class="fa fa-history"></em>
                                <span>Usage Country</span>
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
                        
                    </ul>
                    <!-- END sidebar nav-->
                </nav>
            </div>
            <!-- END Sidebar (left)-->
        </aside>

        <section  v-bind:class="{styleSec: openAside}">         
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
                    CDR
                    <small>  </small>
                </div>
                            <div class="container-fluid">
                        <div class="row">
            <div class="col-lg-12">
                <br>
                <!--<div style="width: 40%">
                    <form accept-charset="utf-8" class="form-horizontal" method="POST">  
                        <div class="form-group">
                            <label for="filter" class="control-label col-lg-2 col-sm-4">Filter</label>
                            <div class="col-lg-10 col-sm-8">
                                <select class="form-control" style="width: 150px" id="filter" name="filter" v-on:change="changeFilter">
                                    <option selected>Select filter</option>
                                    <option value="0">Peer to Peer</option>
                                </select>
                            </div>
                        </div>              
                        <input class="form-control" type="hidden" name="_token" value="SsySn6RfidNM0yx0ezWc9WxT4RQAoEHJicuaDkie">
                    </form>            
                </div>
                <div style="width: 40%;" class="app-wrapper">
                    <form accept-charset="utf-8" class="form-horizontal" method="POST">                
                        <div class="form-group">
                            <label for="app" class="control-label col-lg-2 col-sm-4">APP</label>
                            <div class="col-lg-10 col-sm-8">
                                <select class="form-control" style="width: 150px" id="app" name="app">
                                    <option value="">All</option>
                                    <option value="27">Test App</option>
                                    <option value="91">devApp</option>
                                    <option value="107">Test App2</option>
                                    <option value="110">ND_App</option>
                                    <option value="129">SQL APP</option>
                                    <option value="186">yapp</option>
                                    <option value="191">dsadsafdsaf</option>
                                    <option value="192">name</option>
                                    <option value="193">fff</option>
                                </select>
                            </div>
                        </div>                
                        <input class="form-control" type="hidden" name="_token" value="SsySn6RfidNM0yx0ezWc9WxT4RQAoEHJicuaDkie">
                    </form>            
                </div>-->
                <div style="width: 40%">
                    <form accept-charset="utf-8" class="form-horizontal" method="POST">                
                        <div class="form-group">
                            <label for="call_type" class="control-label col-lg-2 col-sm-4">Call type</label>
                            <div class="col-lg-10 col-sm-8">
                                <select class="form-control" style="width: 150px" id="call_type" name="call_type" v-on:change="callType">
                                    <option value="0" selected="selected">Termination Calls</option>
                                    <option value="1">Origination Calls</option>
                                </select>
                            </div>
                        </div>                
                        <input class="form-control" type="hidden" name="_token" value="SsySn6RfidNM0yx0ezWc9WxT4RQAoEHJicuaDkie">
                    </form>            
                </div>
                <br>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer">
                            <!--<div class="dt-buttons">
                                <a class="dt-button btn btn-primary" tabindex="0" aria-controls="table">
                                    <span>Export to CSV</span>
                                </a>
                            </div>-->
                            <div id="table_filter" class="dataTables_filter">
                                <label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table"></label>
                                <div class="row col-md-6">
                                    <div class="col-md-5">
                                        <div class="form-group">
                                            <div class="input-group date datetimepicker" data-provide="datepicker" id="datetimepicker8">
                                                <input type="text" id="to_date" class="form-control dataTime">
                                                <span class="input-group-addon">
                                                    <span class="fa fa-calendar"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                <div class="col-md-5">
                                <div class="form-group">
                           
                                    <div class="input-group date datetimepicker" data-provide="datepicker" id="datetimepicker7">
                                        <input type="text" id="to_date" class="form-control dataTime">
                                        <span class="input-group-addon">
                                            <span class="fa fa-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="ol-md-2">
                                <button type="button" id="search_date" class="dt-button btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                        <!--<div id="table_processing" class="dataTables_processing" style="display: block;">Processing...</div>-->
                        <table id="table" class="table table-striped table-hover cursor-pointer dataTable no-footer" role="grid" aria-describedby="table_info">
                            <thead>
                            <tr role="row">
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 64px;">Time</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 58px;">APP</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 61px;">User</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 115px;">Call From</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 86px;">Call To</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 104px;">Duration</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 61px;">Rate</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 63px;">Cost</th></tr>
                            </thead>
                            <tbody></tbody>
                        </table><div class="dataTables_info" id="table_info" role="status" aria-live="polite"></div><div class="dataTables_paginate paging_simple_numbers" id="table_paginate"></div></div>
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
</template>

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

// local storgs*****

var userId = localStorage.getItem("userUuid");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
console.log(userId)



// var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };
var dat;

    export default {
       name: 'wrapper',
       data() {  
          return {
             filter_by: 0,
             call_type: 0,
             app_data: [],
             cdr_list:[],
             app_count: '',
             dev_new: developer_name,
             userBalance: 0,
             checkId: null,
             openAside: true,
          } 

    },
    created:function(){
        this.getData();
        this.getUserInfo();
        this.callType();
        this.checkId = localStorage.getItem("userUuid");
        if(this.checkId == null){
            this.$router.push("/login");
        }
        document.title = 'CDR :: Developer UI';
    },
      mounted:function(){
          $('.datetimepicker').on('changeDate', function(ev){
            console.log('change!')
            $('.datepicker').remove();
        });
        $('.datetimepicker').on('changeDate', function(ev){
            console.log('change!')
            $('.datepicker').remove();
        });

            this.call_type = Number( $('#call_type').val());
          
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
            });
            $('#app_list').mouseleave(function(){
                $(this).css('display','none')
        });
        // var date = $('.dataTime').val();
        
      },
    methods:{
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
        getData: function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              })
              .then(function(response){
                  this.app_data = response.body.ret
                  this.app_count= response.body.ret.length;

              })
          },
        changeFilter:function(){
            this.filter_by = Number( $('#filter').val());
            this.getdateNow()

            if(this.filter_by == 0){
                this.$http.get(config.api + config.port + "ui/" + userId + "/P2PCDR/" + "2017-02-20_12:00:00" + "/"+ dat, {
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                    }
                }).then(function(response){
                    console.log(response);
                    this.cdr_list = response.body.ret
                })
            }
            if(this.filter_by == 2){
                
            }
        },
        callType:function(){
            if(this.call_type == 0){
                var bb = $('.dataTime').val()
                var datef = toString(bb);
                
                this.$http.get(config.api + config.port + "ui/" + userId + "/OutgoingCDR/" + "2017-02-20_12:00:00" + "/"+ dat,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                    }
                }).then(function(response){
                    console.log(response);
                    this.cdr_list = response.body.ret
                })
            }
            if(this.call_type == 1){
                 this.$http.get(config.api + config.port + "ui/" + userId + "/IncomingCDR" + "2017-02-20_12:00:00" + "/"+ dat,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                    }
                }).then(function(response){
                    console.log(response);
                    this.cdr_list = response.body.ret
                })
            }
        },
         logout: function(){
                localStorage.removeItem('userUuid');
                localStorage.removeItem('userDevToken');
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('dev_name');
                this.$router.push("/login");
                location.reload("/login");
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
            localStorage.setItem('userId', uuid); 
            if( localStorage.getItem("appStatus") != ''){
                localStorage.removeItem('appStatus');
            }
            localStorage.setItem('appStatus', status); 
        }
    }

    }


</script>

<!-- <style>
	.cursor-pointer tr {
    cursor: pointer;
}

.col-filter {
    width: 16.2%;
    float: left;
}

.col-title {
    width: 63.3%;
}

.paging-div {
    width: 63.7%;
}

.create-wrapper-div {
    width: 19.5%;
}

.dataTable, .dataTable th {
    text-align: center;
}

.manage-btn {
    width: 12.5%;
}

.dataTables_processing {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 40px;
    margin-left: -50%;
    margin-top: -25px;
    padding-top: 20px;
    text-align: center;
    font-size: 1.2em;
    background-color: white;
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,0)), color-stop(25%, rgba(255,255,255,0.9)), color-stop(75%, rgba(255,255,255,0.9)), color-stop(100%, rgba(255,255,255,0)));
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);
    background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);
    background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);
    background: -o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);
}

.th-revision th{
    padding: 15px !important;
}

.table>thead>tr>th {
    padding: 14px 11px;
}
.uk-notify {
    width: initial;
}

.uk-notify-message > div {
    display: inline-block;
}

.bootstrap-validator-form .help-block{margin-bottom:0}

.alert.parsley {
    margin-top: 5px;
    margin-bottom: 0px;
    padding: 10px 15px 10px 15px;
}

.check .alert {
    margin-top: 20px;
}

input.parsley-success,
select.parsley-success,
textarea.parsley-success {
    color: #468847;
    background-color: #DFF0D8;
    border: 1px solid #D6E9C6;
}

input.parsley-error,
select.parsley-error,
textarea.parsley-error {
    color: #B94A48;
    background-color: #F2DEDE;
    border: 1px solid #EED3D7;
}

.parsley-errors-list {
    margin: 2px 0 3px;
    padding: 0;
    list-style-type: none;
    font-size: 0.9em;
    line-height: 0.9em;
    opacity: 0;

    transition: all .3s ease-in;
    -o-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    -webkit-transition: all .3s ease-in;
}

.parsley-errors-list.filled {
    opacity: 1;
}
</style> -->