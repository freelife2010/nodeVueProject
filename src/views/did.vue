<template>
    <div id="did">
        <div class="wrapper" >
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
                        <li class=" active">
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
                            <a href="app-config" title="APP Config" data-toggle="collapse">
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
                {{ $route.params.id}}:Manage DID
                <small>  </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-1 manage-btn">
                    <a  href="" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-phone"></i>
                           </span>Buy DID
                    </a>
                </div>
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="row"><div class="col-xs-6">
                    <div class="dataTables_length" id="table_length">
                        <label>Display 
                            <select v-model="developersCount" v-on:change="changeHandler" name="table_length" aria-controls="table" class="form-control input-sm">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select> Records per page
                        </label>
                    </div>
                    </div>
                    <div class="col-xs-6"><div id="table_filter" class="dataTables_filter"><label>Search by DID:<input type="text" v-model="searchNname"  class="form-control input-sm" placeholder="" aria-controls="table"></label></div></div></div><table id="table" class="table table-striped table-hover  dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1074px;">
                        <thead>
                        <tr role="row">
                            <th class="sorting" v-bind:class="{ sorting_desc: sorting }" v-on:click="sortById()" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" aria-sort="descending" style="width: 35px;">ID</th>
                            <th class="sorting" v-bind:class="{ sorting_desc: sortingDid }" v-on:click="sortByDid()" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="DID: activate to sort column ascending" style="width: 119px;">DID</th>
                            <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Created at: activate to sort column ascending" style="width: 195px;">Created at</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr role="row" class="odd" v-for="service in paginate">
                               <td >{{service.id}}</td>
                               <td >{{service.number}}</td>
                               <td >{{service.start_date}}</td>                               
                               
                    </td></tr></tbody>
                    </table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing {{countStart}} to {{countShow}} of {{serviceCount}} entries</div></div>
                    <div class="col-xs-6">

                         <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                                             <ul class="pagination">
                                                <li class="paginate_button previous " v-bind:class="{disabled: currentPage === 1 || currentPage === 0}" aria-controls="table" tabindex="0" id="table_previous">
                                                    <a v-on:click="previousPage()">Previous</a>
                                                </li>
                                                <li  class="paginate_button active" aria-controls="table" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                                                    <a  class="newPaging" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber || pageNumber === 0, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                                                </li>
                                                <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || serviceCount <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
                                                    <a v-on:click="nextPage()" >Next</a>
                                                </li>
                                            </ul> 
                                            
                                        </div>
                    </div></div></div>
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
    <div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade" style="display: none;">
        <div class="modal-dialog" id="modal-dialog" style="width: 350px;">
            <div class="modal-content">
<div class="modal-header" style="margin-bottom: 10px;">
    <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
    <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Buy DID
        
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
            <!--<div class="form-group"><label for="app_user" class="control-label">App User</label>
                <select class="form-control" id="app_user"   v-model="app_uuid">
                    <option value="">Select APP user</option>
                    <option v-for="app in app_user" :value="app.app_uuid">{{app.name}}</option>
                </select>
            </div>-->
            <div class="form-group"><label for="state" class="control-label">Country</label>
                <select class="form-control" id="state"   v-on:change="selCountry" v-model="country">
                    <option value="" >Select country</option>
                    <option v-for="country in all_countries" :value="country.country_iso">{{country.country_name}}</option>
                </select>
            </div>
             <div class="form-group"><label for="state" class="control-label">State</label>
                <select class="form-control" id="state" :disabled="state_did"  v-on:change="selState" v-model="state">
                    <option value="" >Select state</option>
                    <option v-for="state in all_states" :value="state.state">{{state.state}}</option>
                </select>
            </div>
            <div class="form-group"><label for="desc" class="control-label">Desctiption</label>
               <input class="form-control" id="desc" type="text" v-model="desc">
            </div>           
            <div class="form-group"><label for="outside_number" class="control-label">Outside Number</label>
                <!--<input class="form-control" id="outside_number" type="text" >-->
                <select class="form-control" id="state" :disabled="out_number" v-model="number">
                    <option value="" >Select number</option>
                    <option v-for="number in number_list" :value="number.TN">{{number.TN}}</option>
                </select>
            </div>            
            </div>
        <div style="clear: both"></div>
    <br>
    <div class="pull-right">
        <div>
            <button class="btn btn-lg btn-info" v-on:click="buyNumber()" >Buy</button> 
            <button class="btn btn-lg btn-default close-create-modal"  data-dismiss="modal" type="button">Close</button>
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

    var userId = localStorage.getItem("userUuid");
    var userDevToken = localStorage.getItem("userDevToken");
    var newAuthadmin = localStorage.getItem("newAuthadmin");
    var developer_name = localStorage.getItem("dev_name");
    var devCount = localStorage.getItem("devCount");
    var appId = localStorage.getItem('userId')


    export default{
        name: 'did',
        data(){
          return{
            services: [],
            app_data: [],
            app_user: [],
            all_countries: [],
            all_states: [],
            number_list: [],
            app_uuid: '',
            country: '',
            state: '',
            desc: '',
            number: '',
            app_count: 0,
            app_token: '',
            state_did: true,
            out_number: true,
            userBalance: 0,
            serviceCount: '',
            dev_new: developer_name,
            searchNname: '',
            sorting: false,
            sortingDid: false,
            itemsPerPage: 10,
            startIndex: 0,
            endIndex: 10,
            developersCount: 10,
            countShow: 10,
            currentPage: 1,
            checkId: null,
            oldpageNumber: 1,
            checkSearch: true,
            countStart: 1,
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
      computed: {
        totalPages: function() {
            if(this.searchNname == ''){
                
                if (this.endIndex >= this.serviceCount){
                    this.countShow = this.serviceCount;
                }
                else{
                        this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.serviceCount / this.itemsPerPage)
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
                var newArray3 = this.services
                    .filter(services => services.number.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                    this.newArray3Len = newArray3.length;
                    this.countShow = this.newArray3Len;
                    this.serviceCount = this.newArray3Len;

                    if(this.newArray3Len == 0 || this.serviceCount == 0){
                        this.countStart = 0;
                    }

                    if(this.newArray3Len >= this.developersCount){
                        
                        this.countShow = this.developersCount;
                        this.serviceCount = this.newArray3Len;

                    }
                    else{
                        this.countShow = this.newArray3Len;
                        this.serviceCount = this.newArray3Len;
                    }
                    return newArray3.slice(this.startIndex , this.endIndex );
            }
            else{
                if(this.checkSearch === false ){
                    this.setPage(1);
                    this.checkSearch = true;
                    this.countStart = 1;
                }
                var array2 = this.services.length;
                this.countShow = array2;
                this.serviceCount = array2;
                return this.services.slice(this.startIndex , this.endIndex )
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
            this.getServices();
            this.getData();
            this.appUser();
            this.getUserInfo();
            this.getIdentity();
            this.checkId = localStorage.getItem("userUuid");
            if(this.checkId == null){
                this.$router.push("/login");
            }
            document.title = 'Manage DID :: Developer UI';
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
            changeHandler: function() {
                
                if (this.endIndex >= this.serviceCount){
                    this.countShow = this.serviceCount;
                }
                else{
                        this.countShow = this.endIndex;
                }
                if(this.developersCount >= this.serviceCount){
                    this.countShow = this.developersCount;
                    this.startIndex = 1;
                    this.endIndex = this.developersCount;
                    this.setPage(1);
                }
                else{
                    this.endIndex = this.startIndex + Number(this.developersCount);
                    this.setPage(1);
                    
                }

            },
             setPage: function(pageNumber) {
                if(pageNumber != this.oldpageNumber){
                    console.log(pageNumber)
                    this.currentPage = pageNumber;

                    var start = pageNumber * this.developersCount;
                    this.startIndex  = start-this.developersCount;
                    this.endIndex = pageNumber*this.developersCount;
                    this.oldpageNumber = pageNumber;
                    this.countStart = this.startIndex + 1;

                    if (this.endIndex >= this.serviceCount){
                            this.countShow = this.serviceCount;
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

                if (this.endIndex >= this.serviceCount){

                    this.countShow = this.serviceCount;
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
                    if (this.endIndex >= this.serviceCount){

                            this.countShow = this.serviceCount;
                    }else{
                        this.countShow = this.endIndex;
                    }
            },
            getServices: function(){
                this.$http.get(config.api + config.port + 'app/' + appId + '/services', {
                     headers:{
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                  }
                }).then( function(response){
                    console.log(response)
                    this.services = response.body.ret;
                    this.serviceCount = response.body.ret.length;

                    if(this.serviceCount == 0){
                        this.countStart = 0;
                    }
                    else{
                        this.countStart = 1;
                    }
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
            getData: function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              }).then(function(response){
                  this.app_data = response.body.ret;                  
                  this.app_count =  response.body.ret.length;
              })
          },
          appUser:function(){
                this.user_id = localStorage.getItem('userId');
                
                this.$http.get(config.api + config.port + 'app/' + this.user_id + '/identities' ,{
                    headers:{ 
                            "Content-Type": "application/json",
                            "Authorization": newAuthadmin                    
                        }
                }).then(function(response){
                        console.log(response)
                        this.app_user = response.body.ret;
                });
                //Get all states
                this.$http.get(config.api + config.port + 'voip/all_countries' ,{
                    headers:{ 
                            "Content-Type": "application/json",
                            "Authorization": newAuthadmin                    
                        }
                }).then(function(response){
                        console.log(response)
                        this.all_countries = response.body.ret;
                });
                //Get token
                var emptyData = {};
                this.$http.post(config.api + config.port + 'app/' + this.user_id + '/token', emptyData, {
                    headers:{ 
                            "Content-Type": "application/json",
                            "Authorization": newAuthadmin                    
                        }
                }).then(function(response){
                    console.log(response)
                    this.app_token = response.body.ret;
                })
            },
            selCountry: function(){
                this.$http.get(config.api + config.port + 'voip/all_states',{
                    headers:{ 
                            "Content-Type": "application/json",
                            "Authorization": newAuthadmin                    
                        }
                }).then(function(response){
                        console.log(response)
                        this.all_states = response.body.ret;
                        this.state_did = false;                        
                })
               
            },
            selState: function(){
                console.log(this.state)
                var numberData = {
                    state: this.state,
                    country_iso: this.country,
                    app_token: this.app_token,
                    number: "",
                    description: "none"
                }
                this.$http.post(config.api + config.port + 'voip/'+ this.user_id + '/check_number', numberData,{
                    headers:{ 
                            "Content-Type": "application/json",
                            "Authorization": newAuthadmin                    
                        }
                }).then(function(response){
                        console.log(response)
                        this.number_list = response.body.ret.data.Numbers;
                        this.out_number = false
                        // this.all_states = response.body.ret;
                })
            },
            buyNumber: function(){
                $('.hide.preloader').css("display", "block");
                $('.modal-body').css("display", "none");
                    var buyNumber = {
                        state: this.state,
                        country_iso: this.country,
                        number: this.number,
                        app_token: this.app_token,
                        description: this.desc
                    }
                    this.$http.post(config.api + config.port + 'voip/' + this.user_id + '/order_number', buyNumber, {
                        headers:{ 
                            "Content-Type": "application/json",
                            "Authorization": newAuthadmin                    
                        }
                    }).then(function(response){
                        console.log(response)
                        if(response.body.ret == true){
                            $('.hide.preloader').css("display", "none");     
                            $('.modal-body').css("display", "block");                                                   
                            $(".close-create-modal").trigger('click');
                            this.getServices();
                            this.getUserInfo();
                        }
                        
                    })
                
            },
            sortById: function() {
                if (this.sorting === true){
                    this.sorting = false
                    this.services.reverse()
                }else{
                    this.sorting = true
                    //  $('#sortBy-name').addClass('sorting_desc');
                    function compare(a, b) {                     
                        return a.id - b.id                       
                    } 
                    this.services.sort(compare)
                }
            },
            sortByDid: function() {
                if (this.sortingDid === true){
                    this.sortingDid = false
                    this.services.reverse()
                }else{
                    this.sortingDid = true
                    function compare(a, b) {                     
                        return a.number - b.number                       
                    } 
                    this.services.sort(compare)
                }
            },
           saveId:function(uuid) {
                localStorage.removeItem('userId');
                if( localStorage.getItem("appStatus") != ''){
                    localStorage.removeItem('appStatus');
                }
                localStorage.setItem('appStatus', status); 
                localStorage.setItem('userId', uuid); 

            },
            logout: function(){
                localStorage.removeItem('userUuid');
                localStorage.removeItem('userDevToken');
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('dev_name');
                this.$router.push("/login");
                location.reload("/login");
                
            }
        }
    }
</script>