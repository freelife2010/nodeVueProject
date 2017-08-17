<template>
    <div id="app_origin">
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
                <!--<span class="user-block-role">Developer</span>-->
            </div>
        </div>
    </div>
</li>                <!-- END user info-->
                <!-- Iterates over all sidebar items-->
                <li class="nav-heading">
                    <span data-localize="sidebar.heading.HEADER">Main menu</span>
                </li>
                 <li class=" " >
                            <router-link to="/" title="APP">
                                <em class="icon-list"></em>
                                <span>APP List</span>
                            </router-link>
                        </li>
                        <li  class="dashboard">
                            <a href=""  title="APP Dashboard" data-toggle="collapse">
                                <div class="pull-right label label-info">
                                    {{app_count}}
                                </div>
                                <em class="icon-speedometer"></em>
                                <span>APP Dashboard</span>
                            </a>
                           
                        </li>
                        <li class=" " >
                            <router-link to="/cdr" title="CDR">
                                <em class="icon-call-out"></em>
                                <span>View CDR</span>
                            </router-link>
                        </li>
                        <li class=" ">
                            <router-link to="/payments" title="payments">
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
                        <li class=" " >
                            <a href="#app_config" id="config" title="APP Config" data-toggle="collapse">
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
                <li class="nav-heading show" v-if="$route.params.id">
                    <span data-localize="sidebar.heading.HEADER">Manage APP: {{ $route.params.id }} Test</span>
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
                {{ $route.params.id}}: Origination rates
                <small> Manage sell rates </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer">
                        <!--<div class="dt-buttons"><a class="dt-button btn btn-primary" tabindex="0" aria-controls="table"><span>Export to CSV</span></a>
                        </div>-->
                        <div id="table_filter" class="dataTables_filter"><label>Search by Code Name:<input type="text" class="form-control input-sm" v-model="searchNname" aria-controls="table"></label></div>
                        <!--<div id="table_processing" class="dataTables_processing" style="display: none;">Processing...</div>-->
                        <table id="table" class="table table-striped table-hover  dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1057px;">
                        <thead>
                        <tr role="row">
                            <th class="sorting" v-bind:class="{ sorting_desc: sortCountry }" v-on:click="sortByCountry"  tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 138px;" aria-label="Country: activate to sort column ascending">Country</th>
                            <th class="sorting" v-bind:class="{ sorting_desc: sortDest }"  v-on:click="sortByDest" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Destination: activate to sort column ascending">Code Name</th>
                            <th class="sorting" v-bind:class="{ sorting_desc: sortCode}"  v-on:click="sortByCode" tabindex="0" aria-controls="table" rowspan="1" colspan="1"  aria-label="Code: activate to sort column ascending">Code</th>
                            <th class="sorting" v-bind:class="{ sorting_desc: sortRate }"  v-on:click="sortByRate" tabindex="0" aria-controls="table" rowspan="1" colspan="1"  aria-sort="descending" aria-label="Opentact Sell Rate: activate to sort column ascending" >Opentact Sell Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                             <tr role="row" class="odd" v-for="rate in paginate">
                                <td>{{ rate.country }}</td>
                                <td> {{ rate.code_name }}</td>
                                <td>{{ rate.code }}</td>
                                <td class="sorting_1">{{ rate.rate }}</td>
                                
                            </tr>
                        </tbody>
                    </table>
                    <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing {{countStart}} to {{countShow}} of {{ratesCount}} entries </div>
                    <!--pages-->
                    <div class="dataTables_paginate paging_simple_numbers" id="table_paginate"><ul class="pagination">
                         <li class="paginate_button previous " v-bind:class="{disabled: currentPage === 1 || currentPage === 0}" aria-controls="table" tabindex="0" id="table_previous">
                            <a v-on:click="previousPage()">Previous</a>
                        </li>
                        <li  class="paginate_button active" aria-controls="table" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                            <a  class="newPaging" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber || pageNumber === 0, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                        </li>
                        <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || ratesCount <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
                            <a v-on:click="nextPage()" >Next</a>
                        </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" name="_token" value="KIohPZ1oAxOpOWLxU5odbTTaRT1DxNGBEb0dlynl">            </div>
        </div>
    </section>
    <footer>
        <span>Opentact © 2015</span>
    </footer>
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
      name: 'users',
      data(){
          return{
              password: '',
              email: '',
              name: '',
              app_data: [],
              app_count: '',
              arr: [],
              ratesCount: null,
              cont: [],
              mark:0,
              searchNname: '',
              sortDest: false,
              sortCountry: false,
              sortRate: false,
              sortCode: false,
              mark_two:2,
              currentPage: 1,
              itemsPerPage: 10,
              resultCount: 0,
              startIndex: 0,
              endIndex: 10,
              userBalance: 0,
              dev_new: developer_name,
              countUsers: 0,
              user_id: localStorage.getItem('userId'),
              checkId: null,
              oldpageNumber: 1,
              newArray3Len: 0,
              developersCount: 10,
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
        this.getUserInfo();
        this.getRates();
        this.getIdentity();
        this.checkId = localStorage.getItem("userUuid");
        if(this.checkId == null){
            this.$router.push("/login");
        }
        document.title = 'Origination Rates :: Developer UI';
    },
    mounted :function(){
           
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
                
                if (this.endIndex >= this.ratesCount){
                    this.countShow = this.ratesCount;
                }
                else{
                        this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.ratesCount / this.itemsPerPage)
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
                var newArray3 = this.arr
                    .filter(arr => arr.code_name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                    this.newArray3Len = newArray3.length;
                    this.countShow = this.newArray3Len;
                    this.ratesCount = this.newArray3Len;
                    if(this.newArray3Len == 0 || this.ratesCount == 0){
                        this.countStart = 0;
                    }

                    if(this.newArray3Len >= this.developersCount){
                        
                        this.countShow = this.developersCount;
                        this.ratesCount = this.newArray3Len;

                    }
                    else{
                        this.countShow = this.newArray3Len;
                        this.ratesCount = this.newArray3Len;
                    }
                    return newArray3.slice(this.startIndex , this.endIndex );
            }
            else{
                if(this.checkSearch === false ){
                    this.setPage(1);
                    this.checkSearch = true;
                    this.countStart = 1;
                }
                var array2 = this.arr.length;
                this.countShow = array2;
                this.ratesCount = array2;
                return this.arr.slice(this.startIndex , this.endIndex )
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
            // this.goToUser = "/dashboard/" + this.$route.params.id + "/users";

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
            console.log(this.goToQue)
                if(pageNumber != this.oldpageNumber){
                    console.log(pageNumber)
                    this.currentPage = pageNumber;

                    var start = pageNumber * this.developersCount;
                    this.startIndex  = start-this.developersCount;
                    this.endIndex = pageNumber*this.developersCount;
                    this.oldpageNumber = pageNumber;
                    
                    this.countStart = this.startIndex + 1;

                    if (this.endIndex >= this.showDev){
                            this.countShow = this.ratesCount;
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
                console.log(this.startIndex, this.endIndex)
                this.oldpageNumber = this.currentPage

                this.countStart = this.startIndex + 1;
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
        getRates:function(){
            this.$http.get(config.api + config.port + "int/origination",{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": newAuthadmin
                }
            }).then(function(response){
                console.log(response);
                this.arr = response.body.ret;
                this.ratesCount = response.body.ret.length;
                if(this.ratesCount == 0){
                    this.countStart = 0;
                    console.log(this.appDataCount)
                }
                else{
                    this.countStart = 1;
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
                    console.log(response)
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
            sortByDest:function(){
                if (this.sortDest === true){
                    this.sortDest = false
                    this.arr.reverse()
                }else{
                    this.sortDest = true
                    //  $('#sortBy-name').addClass('sorting_desc');
                    function compare(a, b) {
                        if (a.code_name < b.code_name){
                            return -1                         
                        }
                        if (a.code_name > b.code_name){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.arr.sort(compare)
                }
            },
            sortByCountry:function(){
                if (this.sortCountry === true){
                    this.sortCountry = false;
                    this.arr.reverse();
                }else{
                    this.sortCountry = true;
                    function compare(a, b) {
                        if (a.country < b.country){
                            return -1                         
                        }
                        if (a.country > b.country){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.arr.sort(compare)
                }
            },
            sortByRate:function(){
                if (this.sortRate === true){
                    this.sortRate = false;
                    this.arr.reverse();
                }else{
                    this.sortRate = true;
                    function compare(a, b) {
                        if (a.rate < b.rate){
                            return -1                         
                        }
                        if (a.rate > b.rate){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.arr.sort(compare)
                }
            },
            sortByCode:function(){
                if (this.sortCode === true){
                    this.sortCode = false;
                    this.arr.reverse();
                }else{
                    this.sortCode = true;
                    function compare(a, b) {
                        if (a.code < b.code){
                            return -1                         
                        }
                        if (a.code > b.code){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.arr.sort(compare)
                }
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
<style scoped>
    .sorting{
        width: 25%;
    }
</style>















