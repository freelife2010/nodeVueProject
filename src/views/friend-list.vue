<template>
    <div id="friend">
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
                            {{userCount}}
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
        <section  v-bind:class="{styleSec: openAside}">
                <div class="content-wrapper">
                    <ul id="app_list" class="nav sidebar-subnav collapse app_list ">
                        <li class="sidebar-subnav-header">APP Dashboard</li>
                        
                        <li class="das_hov"  v-for="devs in app_data">
                            <!--<router-link to='/dashboard/Test App' title="Test App">
                                <span v-on:click="saveId(devs.uuid)">{{devs.name }}</span>
                            </router-link>-->
                            <a :href="'#/dashboard/' + devs.name" v-on:click="saveId(devs.uuid,devs.susupended)">
                                <span >{{ devs.name }}</span>
                            </a>
                        </li>
                    </ul>
            <div class="content-heading">
                {{ $route.params.id }}: Friends List
                <small> Manage Friends </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-3">
                <form accept-charset="utf-8" class="form-horizontal" method="POST" >                <!--email_off-->
                <select class="form-control" id="app_user" name="app_user" v-on:change="selUser"  v-model = "from_identity">
                    <!--<option value="" v-for="devs in app_data">{{devs.name}}</option>-->
                    <option value="">Select Identity<!--APP user--></option>
                    <option v-for="user in app_user" :value="user.uuid">{{user.name}}  </option>
                </select>                
                <input class="form-control" type="hidden" name="_token" value="wvOTshnlqZEs4hBAk7EnQWRFGQkQL4fQrMyCdXvI"></form>                <!--/email_off-->
                </div>
                <div class="col-md-2">
                    <a href="" data-target="#myModal" data-toggle="modal"   class="btn btn-labeled btn-info">
                        <span class="btn-label">
                            <i class="fa fa-plus"></i>
                        </span>Send a Friend Request
                    </a>
                </div>
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_users_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="row">
                    <div class="col-xs-6"><!--
                    <div class="dataTables_length" id="table_users_length"><label>Display <select name="table_users_length" aria-controls="table_users" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> Records per page</label></div>--></div>
                    <div class="col-xs-6"><div id="table_users_filter" class="dataTables_filter"><label>Search by Name:<input type="text" v-model='searchNname' class="form-control input-sm" placeholder="" aria-controls="table_users"></label></div></div></div><table id="table_users" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_users_info" style="width: 1057px;">
                        <thead>
                        <tr role="row"><th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 85px;">ID</th><th class="sorting" v-bind:class="{ sorting_desc: sorting }" v-on:click="sortTable()" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 156px;">Name</th><th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="E-mail: activate to sort column ascending" aria-sort="descending" style="width: 166px;">E-mail</th><th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Phone: activate to sort column ascending" style="width: 166px;">Phone</th><th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 166px;">Status</th><th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 186px;">Actions</th></tr>
                        </thead>
                        <tbody>
                            <tr class="odd" v-for="user in paginate">
                                <td valign="top"  class="dataTables_empty">{{user.uuid}}</td>
                                <td valign="top"  class="dataTables_empty">{{user.name}}</td>
                                <td valign="top"  class="dataTables_empty"></td>
                                <td valign="top"  class="dataTables_empty">{{user.number}}</td>
                                <td valign="top"  class="dataTables_empty">{{user.status}}</td>
                                <td valign="top"  class="dataTables_empty"></td>
                                
                            </tr>
                        </tbody>
                    </table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_users_info" role="status" aria-live="polite">Showing {{countStart}} to {{countShow}} of {{userCount}} entries
                        </div></div><div class="col-xs-6"><div class="dataTables_paginate paging_simple_numbers" id="table_users_paginate">
                                    <ul class="pagination">
                                        <li class="paginate_button previous " v-bind:class="{disabled: currentPage === 1 || currentPage === 0}" aria-controls="table" tabindex="0" id="table_previous">
                                            <a v-on:click="previousPage()">Previous</a>
                                        </li>
                                        <li  class="paginate_button active" aria-controls="table" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                                            <a  class="newPaging" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber || pageNumber === 0, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                                        </li>
                                        <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || userCount <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
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

    <!------------------------Frienq request-->

<div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade" style="display: none;">
        <div class="modal-dialog" id="modal-dialog" style="width: 350px;">
            <div class="modal-content">
<div class="modal-header" style="margin-bottom: 10px;">
    <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
    <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Send New Friend Request
        
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
                 
            <div style="margin-left: 15px">  
            <div class="form-group"><label for="app_recipient_user_id" class="control-label"><!--App User-->App User</label>
            <select class="form-control" v-model = "target_identity"  ><!--<option value="">Select APP user</option>-->
            <option v-for="user in app_user" :value="user.uuid">{{user.name}} </option>

            </select></div>

                <div class="form-group">
                <!--<label for="app_recipient_user_name" class="control-label">App UserApp Name</label><input class="form-control" id="app_recipient_user_name" name="app_recipient_user_name">-->
                </div>
            </div>
        <div style="clear: both"></div>
    <br>
    <div class="pull-right">
        <div>
            <button class="btn btn-lg btn-info"  v-on:click="sendRequest" >Send</button> 
            <button class="btn btn-lg btn-default" id="close-sendForm" data-dismiss="modal" type="button">Close</button>
        </div>          
    </div>
    
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

//**** local Storgs
var userId = localStorage.getItem("userUuid");
var userDevToken = localStorage.getItem("userDevToken");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
var devCount = localStorage.getItem("devCount");


    export default{
      name: 'friend',
      data(){
          return{
            app_data: [],
            app_count: 0,
            app_user: [],
            user_info: [],
            user_id: '',
            from_identity:'',
            target_identity:'',
            userBalance: 0,
            dev_new: developer_name,
            sorting: false,
            userCount: 0,
            itemsPerPage: 10,
            startIndex: 0,
            endIndex: 10,
            developersCount: 10,
            countShow: 10,
            currentPage: 1,
            searchNname: '',
            checkId: null,
            oldpageNumber: 1,
            checkSearch: true,
            newArray3Len: null,
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
      computed: {
        totalPages: function() {
          if(this.searchNname == ''){
                
                if (this.endIndex >= this.userCount){
                    this.countShow = this.userCount;
                }
                else{
                        this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.userCount / this.itemsPerPage)
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
                var newArray3 = this.app_user
                    .filter(app_user => app_user.name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                    this.newArray3Len = newArray3.length;
                    this.countShow = this.newArray3Len;
                    this.userCount = this.newArray3Len;

                    if(this.newArray3Len == 0 || this.userCount == 0){
                        this.countStart = 0;
                    }

                    if(this.newArray3Len >= this.developersCount){
                        
                        this.countShow = this.developersCount;
                        this.userCount = this.newArray3Len;

                    }
                    else{
                        this.countShow = this.newArray3Len;
                        this.userCount = this.newArray3Len;
                    }
                    return newArray3.slice(this.startIndex , this.endIndex );
            }
            else{
                if(this.checkSearch === false ){
                    this.setPage(1);
                    this.checkSearch = true;
                    this.countStart = 1;
                }
                var array2 = this.app_user.length;
                this.countShow = array2;
                this.userCount = array2;
                return this.app_user.slice(this.startIndex , this.endIndex )
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
      mounted:function(){
         $('.dashboard').hover(function(){
            $('#app_list').css('display','block')
        })
        $('#app_list').mouseleave(function(){
            $(this).css('display','none')
        })
      },
    created: function(){
           this.getData();
           this.getUserInfo();
           this.appUser();
           this.checkId = localStorage.getItem("userUuid");
            if(this.checkId == null){
                this.$router.push("/login");
            }
            document.title = 'Friend List :: Developer UI';
        },
        methods:{
             setPage: function(pageNumber) {
                if(pageNumber != this.oldpageNumber){
                    console.log(pageNumber)
                    this.currentPage = pageNumber;

                    var start = pageNumber * this.developersCount;
                    this.startIndex  = start-this.developersCount;
                    this.endIndex = pageNumber*this.developersCount;
                    this.oldpageNumber = pageNumber;
                    
                    this.countStart = this.startIndex + 1;

                    if (this.endIndex >= this.showDev){
                            this.countShow = this.userCount;
                    }else{
                            this.countShow = this.endIndex;
                    }  
                }
           
            },
         nextPage: function(){
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
            getUserInfo: function(){
             this.$http.get(config.api + config.port + 'int/dev/' + userId,{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              })
              .then(response => {
                    console.log(response)
                    // this.from_identity = response.body.ret.uuid
                    this.userBalance = response.body.ret.balance
                })
        },
          getData: function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              }).then(function(response){
                  this.app_data = response.body.ret;
                  
                  this.app_count =  response.body.ret.length
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
        sortTable:function(){
                if (this.sorting === true){
                    this.sorting = false
                    this.app_user.reverse()
                }else{
                    this.sorting = true
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
                    this.app_user.sort(compare)
                }
            },
            selUser: function(){
                var usname = ""+ this.target_identity    
                console.log(usname) 
                
            
            },
/**************************************************/
          

            appUser:function(){
                this.user_id = localStorage.getItem('userId');
                
                    this.$http.get(config.api + config.port + 'app/' +this.user_id+ '/identities' ,{
                headers:{ 
                     "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                   
                }
            }).then(function(response){
                    this.app_user = response.body.ret;
                    this.userCount = response.body.ret.length
                    if(this.userCount == 0){
                        this.countStart = 0;
                    }
                    else{
                        this.countStart = 1;
                    }

                })
            },
            
            sendRequest:function(){
                console.log(this.target_identity)
                console.log(this.from_identity)
                if(this.target_identity == this.from_identity){
                    alert('This User can not send request to himself')
                    return false
                }else if(this.target_identity == ''){
                    alert ('Please select App User')
                    return false
                }else if(this.from_identity == ''){
                    alert ('Please select App User')
                    return false
                }
                console.log('ss')
                var emptyData = {};
                this.$http.post(config.api + config.port + 'identity/' + this.from_identity + '/follow/'+ this.target_identity, emptyData,{
                        headers:{
                            "Content-Type": "application/json",
                            "Authorization": newAuthadmin
                        }
                    }).then(function(response){
                        console.log(response);
                            if(response.body.ret == true){
                                alert("You Successfully Send a Friend Request");
                            }
                            $("#close-sendForm").trigger('click');
                    })
           
            },
            saveId:function(uuid,status) {
                if( localStorage.getItem("appStatus") != ''){
                    localStorage.removeItem('appStatus');
                }
                localStorage.setItem('appStatus', status); 
                localStorage.removeItem('userId');
                localStorage.setItem('userId', uuid);

        }
/*****************************************************/

        }
    }

</script>