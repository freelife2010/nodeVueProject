<template>
    <div id="developers">
        <div class="wrapper">
                    <header class="topnavbar-wrapper">
            <!-- START Top Navbar-->
            <nav role="navigation" class="navbar topnavbar">
                <!-- START navbar header-->
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">
                        <div class="brand-logo">
                            <img src="http://portal.opentact.org/img/logo.png" alt="App Logo" class="img-responsive">
                        </div>
                        <div class="brand-logo-collapsed">
                            <img src="http://portal.opentact.org/img/logo-single.png" alt="App Logo" class="img-responsive">
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
                            <a data-toggle-state="aside-collapsed" class="hidden-xs" title="Collapse/expand sidebar" v-on:click="close_aside">
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
                            <a v-on:click="logout()" class="ceil_bar_hover" title="Log out">
                                <em class="icon-logout"></em>
                            </a>
                        </li>
                        <!-- END lock screen-->
                    </ul>
                            </div>
            </nav>
            <!-- END Top Navbar-->
        </header>            <aside class="aside">
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
                        <a href="http://portal.opentact.org/edit-profile/15" data-target="#myModal" data-toggle="modal">
                            <div class="user-block-status">
                                    <img src="http://portal.opentact.org/img/user/userpic.png" alt="Avatar" title="Click to edit" width="60" height="60" class="img-thumbnail img-circle">
                                    <div class="circle circle-success circle-lg"></div>
                            </div>
                        </a>
                    </div>
                    <!-- Name and Job-->
                    <div class="user-block-info">
                        <span class="user-block-name">Hello, Admin</span>
                            <span class="user-block-role">
                                                            Administrator
                                                                            </span>
                    </div>
                </div>
            </div>
        </li>                <!-- END user info-->
                        <!-- Iterates over all sidebar items-->
                        <li class="nav-heading ">
                            <span data-localize="sidebar.heading.MORE">Settings</span>
                        </li>
                        <!--<li class=" ">
                            <a href="#emails" title="Email configuration" data-toggle="collapse">
                                <em class="icon-envelope-open"></em>
                                <span>E-mail requests</span>
                            </a>
                            <ul id="emails" class="nav sidebar-subnav collapse">
                                <li class=" ">
                                    <a href=" http://portal.opentact.org/emails/auth-content" title="Modify authorization e-mail">
                                        <span>Authorization e-mail</span>
                                    </a>
                                </li>
                                <li class=" ">
                                    <a href=" http://portal.opentact.org/emails/confirm-content" title="Modify confirmation e-mail">
                                        <span>Confirmation e-mail</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class=" ">
                            <router-link to="/system">
                                <em class="icon-docs"></em>
                                <span>System logs</span>
                            </router-link>
                        </li>
                        <li class=" ">
                             <router-link to="/admin">
                                <em class="icon-users"></em>
                                <span>Modification log</span>
                            </router-link>
                        </li>-->
                        <!-- <li >
                            <router-link to="/app-list">
                                <em class="icon-list"></em>
                                <span>App List</span>
                            </router-link>
                        </li> -->
                        <li class=" active">
                            <router-link to="/dev">
                                <em class="icon-users"></em>
                                <span>Developers</span>
                            </router-link>
                        </li>
                        <li class=" ">
                            <router-link to="/did_ven">
                                <em class="icon-users"></em>
                                <span>Did Vendors</span>
                            </router-link>
                        </li>
                        <li class=" ">
                            <a href="#costs" title="Manage costs" data-toggle="collapse">
                                <em class="fa fa-money"></em>
                                <span>Costs</span>
                            </a>
                            <ul id="costs" class="nav sidebar-subnav collapse">
                                <li class=" ">
                                    <router-link to="/cost_did">
                                        <em class="icon-users"></em>
                                        <span>DID Cost</span>
                                    </router-link>
                                    </li>
                                    <li class=" ">
                                        <router-link to="/cost_sms">
                                            <em class="icon-users"></em>
                                            <span>SMS Cost</span>
                                        </router-link>
                                </li>
                            </ul>
                        </li>
                       <li class=" ">
                            <a href="#rates" title="Manage costs" data-toggle="collapse">
                                <em class="icon-users"></em>
                                <span>Rates</span>
                            </a>
                            <ul id="rates" class="nav sidebar-subnav collapse">
                                <li class=" ">
                                    <router-link to="/origin_rates">
                                                <em class="fa fa-cc"></em>
                                                <span>Origination Rate</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to="/term_rates">
                                            <em class="fa fa-cc"></em>
                                            <span>Termination rate</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class=" ">
                            <router-link to="/admin/payments" title="Payments">
                                <em class="fa fa-credit-card"></em>
                                <span>Payments</span>
                            </router-link>
                        </li>
                        <!--<li class=" ">
                            <router-link to="/config">
                                <em class="fa fa-cog"></em>
                                <span>Config</span>
                            </router-link>
                        </li>-->
                    </ul>
                    <!-- END sidebar nav-->
                </nav>
            </div>
            <!-- END Sidebar (left)-->
        </aside>            <section>
                <div class="content-wrapper">
                    <div class="content-heading">
                        Developers list
                        <small> See developers </small>
                    </div>
                                <div class="container-fluid">
                            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-md-1">
                            <a href="#myModal" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                                <span class="btn-label">
                                       <i class="fa fa-plus"></i>
                                   </span>Create developer
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
                                            <label>Display 
                                                <select name="table_length" v-model="developersCount" v-on:change="changeHandler" aria-controls="table" class="form-control input-sm">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select> Records per page</label>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div id="table_filter" class="dataTables_filter">
                                            <label>Search by Name:
                                                <input v-model="searchNname" autofocus class="form-control input-sm" aria-controls="table">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info">
                                <thead>
                                <tr role="row">
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 69px;">ID</th>
                                    <th class="sorting" v-bind:class="{ sorting_desc: sortName }" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 130px;" v-on:click="sortByName">Name</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-sort="descending" aria-label="Email: activate to sort column ascending" style="width: 127px;">Email</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Total APPs: activate to sort column ascending" style="width: 221px;">Total APPs</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Balance: activate to sort column ascending" style="width: 173px;">Balance</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Registered at: activate to sort column ascending" style="width: 265px;">Registered at</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 169px;">Status</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 169px;">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="devList in filteredUsers">
                                        <!--<td valign="top" colspan="7" class="dataTables_empty">Loading...</td>-->
                                        <td valign="top"  class="dataTables_empty">{{devList.uuid}}</td>
                                        <td valign="top"  class="dataTables_empty">{{devList.first_name}}</td>   
                                        <td valign="top"  class="dataTables_empty">{{devList.email}}</td>                                        
                                        <td valign="top"  class="dataTables_empty">{{devList.total_apps}}</td>                                        
                                        <td valign="top"  class="dataTables_empty">{{devList.balance}}</td>                                        
                                        <td valign="top"  class="dataTables_empty">{{devList.registered_at}}</td>
                                        <td valign="top"  class="dataTables_empty"> <div class="statusAct"><i class="fa fa-check passive" v-if="devList.status == 'active' "></i></div> </td>                                        
                                        <td valign="top"  class="dataTables_empty">
                                            <a href="#myModalEdit"  data-target="#myModalEdit" data-toggle="modal" class="delete edit" v-on:click="getDev(devList.uuid)">
                                                <span class="fa fa-pencil"></span>
                                            </a>
                                             <a  class="delete" v-on:click="deleteDev(devList.uuid)">
                                                <span class="fa fa-remove"></span>
                                            </a>
                                            <a  class="see" title="App List" v-on:click="AppList(devList.uuid)">
                                                <span class="fa fa-eye"></span>
                                            </a>
                                        </td>                                                                                                                     
                                    </tr>
                                   
                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing {{limit}} to {{ count }} of {{ allDevelopers }} entries</div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                                        <ul class="pagination">
                                            <li class="paginate_button previous " aria-controls="table" tabindex="0" id="table_previous">
                                                <a v-on:click="previousPage">Previous</a>
                                            </li>
                                            <li class="paginate_button active" aria-controls="table" tabindex="0">
                                                                    <a >{{ pageCount }}</a>
                                            </li>
                                            <li class="paginate_button next " aria-controls="table" tabindex="0" id="table_next">
                                                <a  v-on:click="nextPage">Next</a>
                                            </li>
                                        </ul>
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
<div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade in" style="padding-left: 17px;">
                <div class="modal-dialog" id="modal-dialog" style="width: 350px;">
                 <div class="modal-content">
                    <div class="modal-header" style="margin-bottom: 10px;">
                        <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
                             <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Create new developer
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
    <div class="modal-body" style="overflow: auto">
        <form accept-charset="utf-8" class="form-vertical"  data-parsley-validate="" >  
            <div style="margin-left: 15px">
                <input class="form-control" type="hidden" name="id" value="">        
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('user_name') }">
                    <label for="user_name" class="control-label">User Name</label>
                    <input class="form-control" id="user_name" type="text" v-model="user_name" name="user_name" required  v-validate="'required|min:1'">
                    <span v-show="errors.has('user_name')" class="help-block error text-danger">Please enter User Name</span>
                </div>
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('first_name') }">
                    <label for="first_name" class="control-label">First Name</label>
                    <input class="form-control" id="first_name" type="text" v-model="first_name" name="first_name" required  v-validate="'required|min:1'">
                    <span v-show="errors.has('first_name')" class="help-block error text-danger">Please enter Name</span>
                </div>
                <div class="form-group has-feedback"  v-bind:class="{ 'has-error' : errors.has('lastname') }">
                    <label for="lastname" class="control-label">Last Name</label>
                    <input class="form-control" id="lastname" type="text" v-model="last_name" name="lastname"   required  v-validate="'required|min:1'" >
                    <span v-show="errors.has('lastname')" class="help-block error text-danger">Please enter Last Name</span>
                </div>
                <div class="form-group has-feedback"  v-bind:class="{ 'has-error' : errors.has('country') }">
                    <label for="country" class="control-label">Country</label>
                    <input class="form-control" id="country" type="text" v-model="country" name="country"   required  v-validate="'required|min:1'">
                    <span v-show="errors.has('country')" class="help-block error text-danger">Please enter country</span>
                </div>        
                <div class="form-group  has-feedback"   v-bind:class="{ 'has-error' : errors.has('email') }">
                    <label for="email" class="control-label">E-mail</label>
                    <input class="form-control" id="email" type="email" v-model="email" name="email"  required  v-validate="'required|email'">
                     <span v-show="errors.has('email')" class="help-block error text-danger">{{ errors.first('email') }}</span>

                </div>
                <div class="form-group">
                    <label for="password" class="control-label">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>          
            </div>
    <div style="clear: both"></div>
    <br>
        <div class="pull-right">
            <div><button class="btn btn-lg btn-info"  id="task-submit-btn" type="button" v-on:click="create_dev">Create</button> <button class="btn btn-lg btn-default" id="formClose" data-dismiss="modal" type="button">Close</button></div>        <input class="form-control" type="hidden" name="_token" value="OtmUlddtZTIjN5pddeSFiQ3aGIg0yISPS9ciY9fS">    </div></form>
            </div>
       </div>
    </div>
</div>
<div id="myModalEdit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade in" style="padding-left: 17px;">
                <div class="modal-dialog" id="modal-dialog" style="width: 350px;">
                 <div class="modal-content">
                    <div class="modal-header" style="margin-bottom: 10px;">
                        <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
                             <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Update developer
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
    <div class="modal-body" style="overflow: auto">
        <form accept-charset="utf-8" class="form-vertical"  data-parsley-validate="" v-for="developer in develoverList" v-if="developer.uuid == localId" >  
            <div style="margin-left: 15px" >
                <input class="form-control" type="hidden" name="id" value="">        
                       
                <div class="form-group" >
                    <label for="user_name" class="control-label">User Name</label>
                    <input class="form-control" id="user_name_edit" type="text"  :value="developer.user_name" name="user_name">
                </div>
                <div class="form-group">
                    <label for="first_name" class="control-label">First Name</label>
                    <input class="form-control" id="first_name_edit" type="text" :value='developer.first_name'   name="first_name" >
                </div>
                <div class="form-group">
                    <label for="lastname" class="control-label">Last Name</label>
                    <input class="form-control" id="lastname_edit" type="text" :value="developer.last_name" name="lastname">
                </div>
                <div class="form-group">
                    <label for="country" class="control-label">Country</label>
                    <input class="form-control" id="country_edit" type="text" :value="developer.country" name="country">
                </div>        
                <div class="form-group" >
                    <label for="email" class="control-label">E-mail</label>
                    <input class="form-control" id="email_edit" type="email" :value="developer.email" name="email">
                </div>
                <div class="form-group">
                    <label for="status" class="control-label">Status</label>
                    <select class="form-control status_ap" type="status" name="status" v-if="developer.status != 'active'">
                        <option value="active">Active</option>
                        <option value="passive" selected>Passive</option>
                    </select>
                    <select class="form-control status_ap" type="status" name="status" v-else>
                        <option value="active" selected>Active</option>
                        <option value="passive">Passive</option>
                    </select>
                </div>          
            </div>
    <div style="clear: both"></div>
    <br>
        <div class="pull-right">
            <div>
                <button class="btn btn-lg btn-info"  id="task-submit-btn" type="button"  v-on:click="editDev(developer.uuid)">Save</button> 
                <button class="btn btn-lg btn-default" id="formClose_edit" data-dismiss="modal" type="button">Close</button>
            </div>        
                <input class="form-control" type="hidden" name="_token" value="OtmUlddtZTIjN5pddeSFiQ3aGIg0yISPS9ciY9fS">    
        </div>
                    </form>
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
import VeeValidate from 'vee-validate'
import axios from 'axios'

import config from '../../config.js'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate);

var ret;
var newAuthadmin = localStorage.getItem("newAuthadmin");
var devCount = localStorage.getItem("devCount");
console.log(newAuthadmin);

// var config = {
//   api: 'http://198.100.149.164',
//   port: ':8002/'
// };

    export default{
      name: 'developers',
      mounted: function(){
    $.fn.dataTableExt.sErrMode = 'throw';
    $.extend( $.fn.dataTable.defaults, {
        "fnDrawCallback": appendFilter()()
    } );

    function appendFilter() {
        return function() {
            setTimeout(function() {
                var $create_button_div = $('#create-btn');
                $('#create-btn-div').append($create_button_div);
                $create_button_div.removeClass('hide');
            }, 50);
        }
        };
      },
        data(){  
          return {
              user_name: "",
              first_name: "",
              last_name: "",
              email: "",
              country: "",
              developersCount: 10,
              develoverList: [],
              allDev:[],
              pageCount: 1,
              limit: 0,
              count: 10,
              allDevelopers: 0,
              totalPage: 0,
              limitMarker: 0,
              countMarker: 0,
              countMarker2: 0,
              localId: "",
              cont: [],
              status: "passive",
              searchNname: '',
              closeBar: 1,
              mark:0,
              mark_two:2,
              sortName: false
          }

    },
    computed: {
        
    filteredUsers() {
        if(this.mark == 1){
            for(var i = 0; i<this.develoverList.length-1; i++){
                    for(var j = 0 ; j<this.develoverList.length-1; j++){
                        if(this.develoverList[j].first_name.substr(0,2).toLowerCase() > this.develoverList[j+1].first_name.substr(0,2).toLowerCase()){
                            this.cont.push(this.develoverList[j])
                            this.develoverList[j] = this.develoverList[j+1]
                            this.develoverList[j+1] = this.cont[0]
                            this.cont.pop();
                         }
                    }
                }
                 return this.develoverList
                .filter(develoverList => develoverList.first_name.toUpperCase().indexOf(this.searchNname.toUpperCase()) !== -1)
        }
        else{
             return this.develoverList
                .filter(develoverList => develoverList.first_name.toUpperCase().indexOf(this.searchNname.toUpperCase()) !== -1)
        }   
        }
           
    },
    created: function(){
        this.getDevelopersList();
    },
    methods:{
        create_dev:function(){
            this.$validator.validateAll().then(() => {
                var newDeveloper = {
                    user_name: this.user_name,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    country: this.country
                };
                this.$http.post(config.api + config.port + 'ui/dev/register', newDeveloper, {
                    headers: {
                        'Authorization': "pkwzoculknvouuyjidmr",
                        'Content-Type': 'application/json'
                    }
                }).then( function(response){
                    console.log(response);
                    console.log(newDeveloper);
                    alert("Developer is successfully created")
                    $('#formClose').trigger('click');                    
                    this.getDevelopersList();
                })
            })
        },
        getDevelopersList: function() {
            this.$http.get(config.api + config.port + 'ui/dev/list/0/'+ this.developersCount, {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                }
            }).then( function(response) {
                this.develoverList = response.body.ret;
                console.log(this.develoverList)
            }); 
            this.count = this.developersCount;
           this.$http.get(config.api + config.port + "dashboard", {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                }
           }).then(function(response){
               this.allDevelopers = response.body.ret.developers;
                this.totalPage = Math.ceil(this.allDevelopers / this.developersCount);
           });    
           this.$http.get(config.api + config.port + "int/dev/" +"4d1dc56f-2dde-44d7-8f36-cf27f3aaba04" + "/balance",{
               headers: {   
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                }
           }).then(function(response){
               this.balance = response.body.ret;
           });
            // this.$http.get(config.api + config.port + 'ui/dev/list/0/'+ 10, {
            //     headers: {
            //             'Content-Type': 'text/json,charset=utf-8',
            //             'Authorization': "pkwzoculknvouuyjidmr"
            //     }
            // }).then( function(response) {
            //     this.allDev = response.body.ret;
            //     console.log(this.allDev)
            // }); 
        },
        AppList: function(DevId){
            console.log(DevId);
            localStorage.removeItem('DevId');
            localStorage.setItem('DevId', DevId);
            location.reload();
            this.$router.push("/app-list");

        },
        changeHandler: function() {
                if(this.limitMarker == 1){
                    if(this.newCount < this.developersCount){
                        if(this.countMarker == 0){
                            this.count += Number(this.developersCount);
                            this.countMarker = 1;
                        }
                        else{
                            this.limit = this.count;
                            this.count += Number(this.developersCount);
                        }
                    }
                    else{
                        if(this.countMarker2 == 0){
                            this.count += Number(this.developersCount);
                            this.countMarker2 = 1;
                        }
                        else{
                            // this.limit = this.count;
                            this.count -= Number(this.developersCount);
                        }
                        //  this.limit = this.count;
                        this.count = this.limit + Number(this.developersCount);
                    }
                }
                if(this.limit == 0){
                    this.count =  Number(this.developersCount);
                }
                if(this.limitMarker==0){
                    var newCount = this.developersCount;
                    this.count += Number(this.developersCount);
                }
                
            this.$http.get(config.api + config.port + 'ui/dev/list/' + this.limit + '/' + this.count, {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                }
            }).then( function(response) {
                console.log(response);
                this.develoverList = response.body.ret
                this.limitMarker = 1;
                console.log(this.developersCount,this.limit);
            });
            
        },
      
        nextPage: function() {
            if(this.limit == 0){

                this.limit += Number(this.developersCount);
                this.count = Number(this.count) + Number(this.developersCount);
                this.pageCount += 1;

                this.$http.get(config.api + config.port + 'ui/dev/list/' + this.limit + '/' + this.count, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                    }
                }).then( function(response) {
                    this.develoverList = response.body.ret;
                     console.log(response);
                     console.log(this.develoverList)
                })
            }
            else if( this.count < this.allDevelopers && this.limit != 0 ){

                this.limit = this.count;
                this.count = Number(this.limit) + Number(this.developersCount);

                this.pageCount += 1;   
                this.$http.get(config.api + config.port + 'ui/dev/list/' + this.limit + '/' + this.count, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                    }
                }).then( function(response) {
                    this.develoverList = response.body.ret;
                     console.log(response);
                })
                             
            }
            
        },
        previousPage: function(){
            
            if(this.limit <= 0 ){

            }
            else{
                this.limit = this.limit - Number(this.developersCount);
                this.count = this.count - Number(this.developersCount);
                this.pageCount -= 1;    
                console.log(this.limit, this.count);
                this.$http.get(config.api + config.port + 'ui/dev/list/' + this.limit + '/' + this.count, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                    }
                }).then( function(response) {
                    console.log(response);
                    this.develoverList = response.body.ret;
                })
            }
        },
        deleteDev:function(devDelete){
            this.getDev();
            console.log(devDelete);
            console.log(newAuthadmin);

            this.$http.delete(config.api + config.port + "ui/dev",{
                data: {
                    dev_uuid: devDelete
                },
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                    }
            }).then(function(response){
                console.log(response);
         })
        },
        editDev:function(devId){
            var devDel = {
                user_name: $("#user_name_edit").val(),
                first_name: $("#first_name_edit").val(),
                last_name: $("#lastname_edit").val(),
                email: $("#email_edit").val(),
                country:  $("#country_edit").val(),
                status:  $(".status_ap").val(),
                dev_uuid: devId
            };
            var statusDev = {
                 dev_uuid: devId,
                 status: $(".status_ap").val(),
            };
            console.log(devDel);
            this.$http.post(config.api + config.port +"ui/dev/modify",devDel,{
               headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                    }
            }).then(function(response){
                if(response.status == 200){
                     $('#formClose_edit').trigger('click');
                     this.getDevelopersList();   
                    console.log(response);
                }
            }),
            this.$http.post(config.api + config.port +"ui/dev/set_status",statusDev,{
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "pkwzoculknvouuyjidmr"
                    }
            }).then(function(response){
                console.log(response)
            })
        },
        getDev:function(devId){
                    this.localId = devId;
                    // console.log(this.develoverList);
            },
        logout:function(){
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('DevId');
				localStorage.removeItem('app_uuid');
                this.$router.push("/login");
            },
        close_aside:function(){
            if(this.closeBar ==1){
                $('.aside').css("display" ,"none")
                $('.wrapper section').css('margin-left', '0px')
                this.closeBar = 0
            }
            else{
                 $('.aside').css("display" ,"block")
                $('.wrapper section').css('margin-left', '220px')
                 this.closeBar = 1
            }
        },
        // sortByFirstName:function(){
        //         if(this.mark_two == 2){
        //              this.mark = 1
        //              this.mark_two = 1
        //         }
        //         else{
        //             this.mark = 0;
        //             this.mark_two = 2
        //         }
        //     }
        sortByName:function(){
                if (this.sortName === true){
                    this.sortName = false
                    this.filteredUsers.reverse()
                }else{
                    this.sortName = true
                    //  $('#sortBy-name').addClass('sorting_desc');
                    function compare(a, b) {
                        var nameA = a.name.toUpperCase(); 
                        var nameB = b.name.toUpperCase();
                        if (nameA < nameB){
                            return -1                         
                        }
                        if (nameA > nameB){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.filteredUsers.sort(compare)
                }
            }
    }
}
      
</script>