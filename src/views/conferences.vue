<template>
    <div id="conferences">
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
                                0$                        </a>
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
                        <li class="dashboard ">
                            <a href="#app_list" title="APP Dashboard" data-toggle="collapse">
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
                            <span data-localize="sidebar.heading.HEADER"><!--Manage APP: Test App2-->Manage APP: {{ $route.params.id}}</span>
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
                {{ $route.params.id }}: Conference log
                <small> View conference log </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-6">
                    <a data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-plus"></i>
                           </span>Create conference
                    </a>
                    
                </div>
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_log_wrapper" class="dataTables_wrapper form-inline no-footer">
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="dataTables_length" id="table_log_length">
                                    <label>Display 
                                        <select v-model="developersCount" v-on:change="changeHandler" name="table_log_length" aria-controls="table_log" class="form-control input-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> Records per page
                                    </label>
                                </div>
                        </div>
                        <div class="col-xs-6"><div id="table_log_filter" class="dataTables_filter"><label>Search by pin:<input type="text" v-model="searchNname" class="form-control input-sm" placeholder="" aria-controls="table_log"></label></div></div></div><table id="table_log" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_log_info" style="width: 1057px;">
                        <thead>
                        <tr role="row" >
                            <th class="" tabindex="0" aria-controls="table_log" rowspan="1" colspan="1" aria-label="Conference ID: activate to sort column ascending" style="width: 185px;">App UUID</th>
                            <th class="sorting" v-bind:class="{ sorting_desc: sorting }" v-on:click="sortTable()" tabindex="0" aria-controls="table_log" rowspan="1" colspan="1" aria-label="Conference Name: activate to sort column ascending" style="width: 230px;">pin</th>
                            <th class="" tabindex="0" aria-controls="table_log" rowspan="1" colspan="1" aria-label="Enter Time: activate to sort column ascending" aria-sort="descending" style="width: 149px;">UUID</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr class="odd" v-if="noData">
                                <td valign="top" colspan="3" class="dataTables_empty">No data available in table</td>
                            </tr>
                            <tr v-for="conference in paginate">
                                <td>{{ conference.app_uuid }}</td>  
                                <td>{{ conference.pin }}</td>                                                              
                                <td>{{ conference.uuid }}</td>                                         
                            </tr>
                        </tbody>
                    </table>
                    <div class="row"><div class="col-xs-6">
                        <div class="dataTables_info" id="table_log_info" role="status" aria-live="polite">Showing {{countStart}} to {{countShow}} of {{confListLength}} entries</div></div
                        ><div class="col-xs-6">
                            <div class="dataTables_paginate paging_simple_numbers" id="table_log_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button previous " v-bind:class="{disabled: currentPage === 1 || currentPage === 0}" aria-controls="table" tabindex="0" id="table_previous">
                                        <a v-on:click="previousPage()">Previous</a>
                                    </li>
                                    <li  class="paginate_button active" aria-controls="table" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                                        <a  class="newPaging" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber || pageNumber === 0, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                                    </li>
                                    <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages}"  aria-controls="table" tabindex="0" id="table_next">
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
    <div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade" style="display: none;">
        <div class="modal-dialog" id="modal-dialog" style="width: 600px;">
            <div class="modal-content">
<div class="modal-header" style="margin-bottom: 10px;">
    <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
    <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Create new conference
        
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
                <!--<div class="form-group"><label for="name" class="control-label">Name</label>
                    <input class="form-control" id="name" type="text" v-model='confName'>
                </div>-->
                <div class="form-group"><label for="host-pin" class="control-label">Host pin</label>
                    <input class="form-control" id="host-pin" type="number" v-model='confNumber'>
                </div>
                <!--<div class="form-group"><label for="guest-pin" class="control-label">Guest pin</label>
                    <input class="form-control" id="guest-pin" type="number" v-model='confPin'>
                </div>           
                <div class="form-group"><label for="greeting-prompt" class="control-label">Greeting prompt</label>
                    <input class="form-control" id="greeting-prompt" type="text" v-model='confPrompt'>
                </div>            -->
                <!--<div class="form-group">
                    <textarea name="" id=""  disabled="true" style="width:100%">123456</textarea>
                </div>-->
            </div>
        <div style="clear: both"></div>
    <br>
    <div class="pull-right">
        <div>
            <button class="btn btn-lg btn-info"  v-on:click="createConf()">Create</button> 
            <button class="btn btn-lg btn-default close-create-modal" id="close-sendForm " data-dismiss="modal" type="button">Close</button>
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
        name: 'conferences',
        data() {
            return {
                noData: true,
                app_data: [],
                app_count: '',
                conferenceListData: [],
                confName: '',
                confNumber: '',
                confPin: '',
                confPrompt: '',
                dev_new: developer_name,
                searchValue: '',
                sorting: false,
                confListLength: 0,
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
                searchNname: '',
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
                
                if (this.endIndex >= this.confListLength){
                    this.countShow = this.confListLength;
                }
                else{
                        this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.confListLength / this.itemsPerPage)
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
                    var newArray3 = this.conferenceListData
                        .filter(conferenceListData => conferenceListData.pin.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                        this.newArray3Len = newArray3.length;
                        this.countShow = this.newArray3Len;
                        this.confListLength = this.newArray3Len;

                        if(this.newArray3Len == 0 || this.confListLength == 0){
                            this.countStart = 0;
                        }

                        if(this.newArray3Len >= this.developersCount){
                            
                            this.countShow = this.developersCount;
                            this.confListLength = this.newArray3Len;

                        }
                        else{
                            this.countShow = this.newArray3Len;
                            this.confListLength = this.newArray3Len;
                        }
                        return newArray3.slice(this.startIndex , this.endIndex );
                }
                else{
                    if(this.checkSearch === false ){
                        this.setPage(1);
                        this.checkSearch = true;
                        this.countStart = 1;
                    }
                    var array2 = this.conferenceListData.length;
                    this.countShow = array2;
                    this.confListLength = array2;
                    return this.conferenceListData.slice(this.startIndex , this.endIndex )
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
            });
            $('#app_list').mouseleave(function(){
                $(this).css('display','none')
            });
        },
        created: function() {
            console.log(appId);
            this.conferenceList();
            this.getData();
            this.getIdentity();
            this.checkId = localStorage.getItem("userUuid");
            if(this.checkId == null){
                this.$router.push("/login");
            }
            document.title = 'Conference Log :: Developer UI';
        },
        methods: {
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
                this.endIndex = this.developersCount;
                this.countShow = this.developersCount

                if (this.endIndex >= this.confListLength){
                    this.countShow = this.confListLength;
                }
                else{
                        this.countShow = this.endIndex;
                }
                if(this.developersCount >= this.confListLength){
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
                    if (this.endIndex >= this.confListLength){
                            this.countShow = this.confListLength;
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

                if (this.endIndex >= this.confListLength){

                    this.countShow = this.confListLength;
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
                    if (this.endIndex >= this.confListLength){

                            this.countShow = this.confListLength;
                    }else{
                        this.countShow = this.endIndex;
                    }
            },
            conferenceList: function() {
                this.$http.get(config.api + config.port + 'app/' + appId + '/conferences', {
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                    }
                }).then( function(response) {
                    console.log(response)
                    this.conferenceListData = response.body.ret;
                    this.confListLength = response.body.ret.length;
                    console.log(this.confListLength)
                    if(this.confListLength > 0){
                        this.noData = false
                    }
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
            createConf: function(){
                console.log('name->', this.confName)
                console.log('number->', this.confNumber)
                console.log('pin->', this.confPin)
                console.log('prompt->', this.confPrompt)
                var emptyData = {};
                var newConference = {
                    pin: this.confNumber
                }
                this.$http.post(config.api + config.port + 'app/' + appId + '/conference', newConference,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": newAuthadmin
                    }
                }).then( function(response){
                    console.log(response)
                   if(response.body.status == "ok"){
                       alert('Conference is successfully created');
                   }
                   $(".close-create-modal").trigger('click');
                    this.conferenceList();
                    })
            },
            sortTable: function() {
                if (this.sorting === true){
                    this.sorting = false
                    this.conferenceListData.reverse()
                }else{
                    this.sorting = true
                    //  $('#sortBy-name').addClass('sorting_desc');
                    function compare(a, b) {
                        if (a.pin < b.pin){
                            return -1                         
                        }
                        if (a.pin > b.pin){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.conferenceListData.sort(compare)
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