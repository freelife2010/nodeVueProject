<template>
    <div id="users">
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
                    <a v-on:click="logout" title="Log out" class="ceil_bar_hover">
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
                <a href="http://portal.opentact.org/edit-profile/16" data-target="#myModal" data-toggle="modal">
                    <div class="user-block-status">
                            <img src="http://portal.opentact.org/img/user/userpic.png" alt="Avatar" title="Click to edit" width="60" height="60" class="img-thumbnail img-circle">
                            <div class="circle circle-success circle-lg"></div>
                    </div>
                </a>
            </div>
            <!-- Name and Job-->
            <div class="user-block-info">
                <span class="user-block-name">Hello, {{dev_new}}</span>
                    <!--<span class="user-block-role"> Developer</span>-->
            </div>
        </div>
    </div>
</li>                <!-- END user info-->
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
                            {{identityCount}}
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
<div class="dropdown-backdrop">

</div>
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
                {{ $route.params.id}}: Users
                <small> Manage users </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-6">
                    <button v-bind:disabled="appStatus == 'true'" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-plus"></i>
                           </span>Create Identity <!--Create User-->
                    </button>
                    <!--<a href="http://portal.opentact.org/app-users/import?app=107" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-upload"></i>
                           </span>Import users
                    </a>
                    <a href="http://portal.opentact.org/app-users/add-credit?app=107" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-plus"></i>
                           </span>Add Credit
                    </a>-->
                </div>
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_users_wrapper" class="dataTables_wrapper form-inline no-footer">
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="dataTables_length" id="table_users_length">
                                    <label>Display 
                                        <select v-model="developersCount" v-on:change="changeHandler" name="table_users_length" aria-controls="table_users" class="form-control input-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> Records per page
                                    </label>
                                </div>
                            </div>
                        <div class="col-xs-6">
                        <div id="table_users_filter" class="dataTables_filter">
                            <label>Search by Name:
                                <input type="search" class="form-control input-sm" v-model='searchNname' placeholder="" aria-controls="table_users"></label></div></div></div><table id="table_users" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_users_info" style="width: 1074px;">
                        <thead>
                        <tr role="row">
                            <th class="sorting" v-bind:class="{ sorting_desc: sortUuid }" v-on:click="sortByID" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 60px;">ID</th>
                            <th class="sorting" v-bind:class="{ sorting_desc: sortName }" v-on:click="sortByName" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 114px;">Name</th>
                            <th class="sorting" v-bind:class="{ sorting_desc: sortUserName }" v-on:click="sortByUser" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 114px;">User Name</th>
                            <th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 137px;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr class="odd">
                                <td valign="top" colspan="4" class="dataTables_empty" v-if="loading">No data available in table</td>
                            </tr>
                            <tr v-for = "iden in paginate" v-if="!loading"> 
                                <td>{{iden.uuid}}</td>
                                <td>{{iden.name}}</td>
                                <td>{{iden.user_name}}</td>
                                <td>
                                    <a  id="edit_app_button" data-target="#editIdentity" data-toggle="modal"  title="Edit" class="btn btn-success btn-sm" v-on:click="editIdentity(iden.uuid)">
                                        <span class="fa fa-pencil"></span>
                                    </a>
                                    <a class="delete" v-on:click="deleteIdentity(iden.uuid)">
                                        <span class="fa fa-remove"></span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="dataTables_info" id="table_users_info" role="status" aria-live="polite">
                                Showing {{countStart}} to {{countShow}} of {{identityCount }} entries
                                </div>
                            </div>
                        <div class="col-xs-6">
                            <div class="dataTables_paginate paging_simple_numbers" id="table_users_paginate">
                                <ul class="pagination">
                                   <li class="paginate_button previous " v-bind:class="{disabled: currentPage === 1 || currentPage === 0}" aria-controls="table" tabindex="0" id="table_previous">
                                        <a v-on:click="previousPage()">Previous</a>
                                    </li>
                                    <li  class="paginate_button active" aria-controls="table" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                                        <a  class="newPaging" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber || pageNumber === 0, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                                    </li>
                                    <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || identityCount <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
                                        <a v-on:click="nextPage()" >Next</a>
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

    <!--Create users-->
    <div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- <div class="modal-header">
                <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <!<h4 id="myModalLabel" class="modal-title">Loading data...</h4> 
            </div> -->
            <div class="modal-header" style="margin-bottom: 10px;">
                <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title"><em class="icon-plus"></em>&nbsp; Create new Identity<!--APP-->

                </h4>
            </div>
            <div class="modal-body">
                <!--<div id="loader" class="loader-demo">
                    <div class="ball-scale-multiple block-center">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>-->
                <form id="create_app_form" class="form-vertical" method="POST"  @submit.prevent="createApp">
                    <div style="margin-left: 15px">
                        <input class="form-control" type="hidden" name="id" value="">       
                        <div class="form-group">
                           <label for="name" class="control-label">Name</label> 
                           <input class="form-control" id="name" type="text" name="name" v-model="name" >
                        </div>  

                        <div class="form-group">
                            <label for="text" class="control-label">UserName</label>
                            <input class="form-control" id="password" type="text" name="password" v-model="user_name">
                        </div>     
                        <!--<div class="form-group">
                            <label for="password" class="control-label">Password</label>
                            <input class="form-control" id="password" type="text" name="password" v-model="password">
                        </div>       
                        <div class="form-group">
                           <label for="email" class="control-label">E-mail</label> 
                           <input class="form-control" id="email" type="email" name="email" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="status" class="control-label">Status</label>
                            <select class="form-control" id="status" name="status">
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div> -->   
                    </div>
                                <!--  <div style="clear: both"></div> -->
                    <br>
                <div class="pull-right">
                    <div>
                        <!--<button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="button" v-on:click="create_user">Create</button> -->
                        <button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="button" v-on:click="createIdentity()">Create</button>
                        <button id="close-create-modal" class="btn btn-lg btn-default" data-dismiss="modal" type="button">Close</button>
                    </div>        
                    <input class="form-control" type="hidden" name="_token" value="6SrWwcxLjmVWFyLCHF44aEoUeyrwoaPn4RljmNif">  
                </div>

            </form>

                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            <!--Edit Identity-->
            <div id="editIdentity" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" style="margin-bottom: 10px;">
                <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title"><em class="icon-plus"></em>&nbsp; Edit Identity<!--APP-->

                </h4>
            </div>
            <div class="modal-body">
                <form id="edit_app_form" class="form-vertical"   v-for = "info in edit_info"> <!--id="create_app_form"-->
                    <div style="margin-left: 15px">
                        <input class="form-control" type="hidden" name="id" value="" >       
                        <div class="form-group">
                           <label for="name" class="control-label">Name</label> 
                           <input class="form-control" id="change_name" type="text" name="change_name" v-model="info.name"
                           >
                        </div>  

                        <div class="form-group">
                            <label for="text" class="control-label">UserName</label>
                            <input class="form-control" id="change_username" type="text" name="change_username" v-model="info.user_name">
                        </div>     
                    </div>
                    <br>
                <div class="pull-right">
                    <div>
                        <!--<button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="button" v-on:click="create_user">Create</button> -->
                        <button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="button" v-on:click="modifyIdentity(info.uuid)">Save</button>
                        <button id="close-create-modal1" class="btn btn-lg btn-default" data-dismiss="modal" type="button">Close</button>
                    </div>        
                    <input class="form-control" type="hidden" name="_token" value="6SrWwcxLjmVWFyLCHF44aEoUeyrwoaPn4RljmNif">  
                </div>

            </form>

                        </div>
                        <div class="modal-footer">

                        </div>
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

//**** local Storgs
var userId = localStorage.getItem("userUuid");
var userDevToken = localStorage.getItem("userDevToken");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
var devCount = localStorage.getItem("devCount");

    export default{
      name: 'users',
      data(){
          return{
              password: '',
              email: '',

            name: '',
            user_name: '',
            app_data: [],
            app_count: '',
            user_id: '',
            identity: [],
            modifyUser_name: '',
            modifyName: '',
            searchNname: '',
            sortName: false,
            sortUuid: false,
            sortUserName: false,
            currentPage: 1,
            itemsPerPage: 10,
            resultCount: 0,
            startIndex: 0,
            endIndex: 10,
            userBalance: 0,
            loading: false,
            dev_new: developer_name,
            countShow: 0,
            edit_info: [],
            developersCount: 10,
            appStatus: localStorage.getItem("appStatus"),
            checkId: null,
            oldpageNumber: 1,
            identityCount: 0,
            checkSearch: true,
            countStart: 1,
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
           this.getId();
           this.getIdentity();
           this.getUserInfo();
           this.checkId = localStorage.getItem("userUuid");
            if(this.checkId == null){
                this.$router.push("/login");
            }
            document.title = 'Manage Users :: Developer UI';
        },
        mounted:function(){
            $('.dashboard').hover(function(){
                $('#app_list').css('display','block')
            })
            $('#app_list').mouseleave(function(){
                $(this).css('display','none')
            })
        },
      computed: {
        totalPages: function() {
           if(this.searchNname == ''){
                
                if (this.endIndex >= this.identityCount){
                    this.countShow = this.identityCount;
                }
                else{
                        this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.identityCount / this.itemsPerPage)
            }
            else{
                if (this.endIndex >= this.newArray3Len){
                    this.countShow = this.newArray3Len;
                }
                else{
                    this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.newArray3Len / this.itemsPerPage);
            }
        },
        paginate: function() {
             if(this.searchNname != ''){
                var pagenumber = 1;
                if(pagenumber != this.oldpageNumber && this.checkSearch === true || this.oldpageNumber == 1){
                    this.setPage(1);
                    this.checkSearch = false
                }
                var newArray3 = this.identity
                    .filter(identity => identity.name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                    this.newArray3Len = newArray3.length;
                    this.countShow = this.newArray3Len;
                    this.identityCount = this.newArray3Len;

                    if(this.newArray3Len == 0 || this.identityCount == 0){
                        this.countStart = 0;
                    }

                    if(this.newArray3Len >= this.developersCount){
                        
                        this.countShow = this.developersCount;
                        this.identityCount = this.newArray3Len;

                    }
                    else{
                        this.countShow = this.newArray3Len;
                        this.identityCount = this.newArray3Len;
                    }
                    return newArray3.slice(this.startIndex , this.endIndex );
            }
            else{
                if(this.checkSearch === false ){
                    this.setPage(1);
                    this.checkSearch = true;
                    this.countStart = 1;
                }
                var array2 = this.identity.length;
                this.countShow = array2;
                this.identityCount = array2;
                return this.identity.slice(this.startIndex , this.endIndex )
            }            
        },
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
                    this.userBalance = response.body.ret.balance;
                })
        },
            setPage: function(pageNumber) {
                if(pageNumber != this.oldpageNumber){
                    this.currentPage = pageNumber;

                    var start = pageNumber * this.developersCount;
                    this.startIndex  = start-this.developersCount;
                    this.endIndex = pageNumber*this.developersCount;
                    this.oldpageNumber = pageNumber;
                    this.countStart = this.startIndex + 1;
                    if (this.endIndex >= this.showDev){
                            this.countShow = this.identityCount;
                    }else{
                            this.countShow = this.endIndex;
                    }  
                }
        
            },
            nextPage: function(){
                console.log(this.currentPage)
                this.currentPage = this.currentPage + 1;
                var start = this.currentPage * this.developersCount;
                this.startIndex  = start-this.developersCount;
                this.endIndex = this.currentPage*this.developersCount;
                this.countStart = this.startIndex + 1;
                 this.oldpageNumber = this.currentPage

                if (this.endIndex >= this.showDev){

                    this.countShow = this.showDev;
                }else{
                    this.countShow = this.endIndex;
                }
            },
            previousPage: function(){
                 this.currentPage = this.currentPage - 1;
                    var start =this.currentPage * this.developersCount;
                    this.startIndex  = start-this.developersCount;
                    this.endIndex = this.currentPage*this.developersCount;
                    this.countStart = this.startIndex + 1;
                    this.oldpageNumber = this.currentPage
                    if (this.endIndex >= this.showDev){

                            this.countShow = this.showDev;
                    }else{
                        this.countShow = this.endIndex;
                    }
            },
            changeHandler: function() {
                  if (this.endIndex >= this.payment_count){
                    this.countShow = this.payment_count;
                }
                else{
                        this.countShow = this.endIndex;
                }
                if(this.developersCount >= this.payment_count){
                    this.countShow = this.developersCount;
                    this.startIndex = 1;
                    this.endIndex = this.developersCount;
                    this.setPage(1);
                }
                else{
                    this.endIndex = this.startIndex + Number(this.developersCount);
                    console.log(this.payments);
                    this.setPage(1);
                    
                }
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

        getId:function() {               
                this.user_id = localStorage.getItem('userId');
        },
        getIdentity: function() {
             this.$http.get(config.api + config.port + 'app/' + this.user_id + '/identities',{
                headers:{ 
                     "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                   
                }
            }).then(function(response){
                    this.identity = response.body.ret;
                    this.identityCount = response.body.ret.length;
                    
                    if(this.identityCount == 0){
                        this.countStart = 0;
                    }
                    else{
                        this.countStart = 1;
                    }
                })
        },

        createIdentity:function(){
            if(this.appStatus != "true"){
              
            var new_identity = {
                user_name: this.user_name, 
                name: this.name
            }

            this.$http.post(config.api + config.port + 'app/' + this.user_id + '/identity',new_identity,{
                headers:{
                    "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                }
            }).then(function(response){
                console.log(response);

                if(response.body.error_message == "" && response.body.ret != "" && response.body.http_return_status == "200 OK"){
                    alert("You Successfully Create New Identity");
                    this.user_name = '';
                    this.name = ''
                    $("#close-create-modal").trigger('click');
                    this.getIdentity();
                }


            })
              
            }
            else{
                alert('You can not create Identity , because your App did not activate you')
            }
        },
        editIdentity: function(uuid){
            console.log(uuid)
            this.$http.get(config.api + config.port + "identity/" + uuid,{
                headers:{
                    "Authorization": newAuthadmin
                }
            }).then(function(response){
                console.log(response)

                this.edit_info.push(response.body.ret);

                console.log(this.edit_info);
                /*console.log(this.edit_info[0].name)*/

            })

             if ( this.edit_info.length >= 1){
               this.edit_info.pop();/**/
               
            }
            
        },
       /* cleanEdit_info: function (){
            if ( this.edit_info.length == 2){
               this.edit_info.pop();
               
            }
        },*/
        deleteIdentity: function(identity_uuid){
           
            var r = confirm("Are you sure?");
                if (r == true) {
                    this.$http.delete(config.api + config.port + "identity/" + identity_uuid, {
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                    }
                    }).then(function(response){
                        console.log(response)
                        if(response.body.status == 'ok'){
                            this.getIdentity();
                        }
                        // console.log(delete_app)
                    })
                } else {
                     console.log("You pressed Cancel!");
                }
        },
        saveId:function(uuid,status) {
                localStorage.removeItem('userId');
                if( localStorage.getItem("appStatus") != ''){
                    localStorage.removeItem('appStatus');
                }
                localStorage.setItem('appStatus', status); 
                localStorage.setItem('userId', uuid); 

        },

        sortByName:function(){
            if (this.sortName === true){
                this.sortName = false
                this.identity.reverse()
            }else{
                this.sortName = true
                //  $('#sortBy-name').addClass('sorting_desc');
                function compare(a, b) {
                    if (a.name < b.name){
                        return -1                         
                    }
                    if (a.name > b.name){
                        return 1                        
                    }
                    // return 0
                } 
                this.identity.sort(compare)
            }
        },
        sortByID:function(){
            if(this.sortUuid === true){
                this.sortUuid = false
                this.identity.reverse()
            }
            else{
                this.sortUuid = true
                
                function compare(a, b) {
                    if (a.uuid < b.uuid){
                        return -1                         
                    }
                    if (a.uuid > b.uuid){
                        return 1                        
                    }
                } 
                this.identity.sort(compare)
            }
        },
        sortByUser:function(){
            if(this.sortUserName === true){
                this.sortUserName = false
                this.identity.reverse()
            }
            else{
                this.sortUserName = true
                
                function compare(a, b) {
                    if (a.user_name < b.user_name){
                        return -1                         
                    }
                    if (a.user_name > b.user_name){
                        return 1                        
                    }
                } 
                this.identity.sort(compare)
            }
        },
        modifyIdentity:function(edit_uuid){
            var edit_identity = {
                "identity_uuid":edit_uuid,
                 "user_name": $("#change_username").val(),
                "name":  $("#change_name").val()
            }

            //alert(edit_identity.user_name + " - " + edit_identity.name);

            this.$http.patch(config.api + config.port + 'app/' + this.user_id + '/identity', edit_identity,{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                     }
                }).then(function(response){
                   console.log(response.body.ret)
                   
                   
                   if (response.body.ret === true) {
                        alert("You successfully edit your identity.")
                        $("#close-create-modal1").trigger('click');
                        this.getIdentity();
                    }
                })
        }



    }
     }


</script>
















