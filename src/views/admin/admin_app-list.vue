<template>
	<div id="app-list">
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
                            <a v-on:click="logout()" class="ceil_bar_hover" title="Log out">
                                <em class="icon-logout"></em>
                            </a>
                        </li>
                        <!-- END lock screen-->
                    </ul>
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
        </aside>            
        <section  v-bind:class="{styleSec: openAside}">
                <div class="content-wrapper">
                    <div class="content-heading">
                        <p class="content-heading-inner">
                            Developer {{ DevName }} : App List <br>
                            <small> See apps </small>
                        </p>
                        <a href="#/dev"   class="btn btn-labeled btn-info backListDev">
                            Back to Developers List
                        </a>
                    </div>
                                <div class="container-fluid">
                            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <!--<div class="col-md-1">
                            <a href="#myModal" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                                <span class="btn-label">
                                       <i class="fa fa-plus"></i>
                                   </span>Create developer
                            </a>
                        </div>-->
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
                                                <input type="text" v-model="searchNname" autofocus class="form-control input-sm" aria-controls="table">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info">
                                <thead>
                                <tr role="row">
                                    <th class="sorting" v-bind:class="{ sorting_desc: sortUuid }" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 69px;" v-on:click="sortByID">ID</th>
                                    <th class="sorting" v-bind:class="{ sorting_desc: sortName }" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 130px;" v-on:click="sortByName">Name</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-sort="descending" aria-label="Email: activate to sort column ascending" style="width: 127px;">Description</th>
                                    <!--<th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Total APPs: activate to sort column ascending" style="width: 221px;">Number of Identity</th>-->
                                    <!--<th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Balance: activate to sort column ascending" style="width: 173px;">Balance</th>-->
                                    <th class="sorting" v-bind:class="{ sorting_desc: sortDate }"  tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Registered at: activate to sort column ascending" style="width: 265px;" v-on:click="sortByDate">Registered at</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Registered at: activate to sort column ascending" style="width: 265px;">Number  of Identitys</th>
                                    <th class="sorting" v-bind:class="{ sorting_desc: sortStatus}"  tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 169px;" v-on:click="sortByStatus">Status</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 169px;">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr  class="odd" v-for="app in paginate">
                                        <!--<td valign="top" colspan="7" class="dataTables_empty">Loading...</td>-->
                                        <td valign="top"  class="dataTables_empty">{{app.uuid}}</td>
                                        <td valign="top"  class="dataTables_empty">{{app.name}}</td>   
                                        <td valign="top"  class="dataTables_empty">{{app.description}}</td>                                        
                                        <!--<td valign="top"  class="dataTables_empty">{{app.tech_prefix}}</td>                                        -->
                                        <td valign="top"  class="dataTables_empty">{{app.create_time}}</td>
                                        <td valign="top"  class="dataTables_empty" v-on:click="">{{ }}</td>
                                        <td valign="top"  class="dataTables_empty">
                                            <label v-bind:for="app.uuid" class="c-checkbox"> 
                                               <input type="checkbox" v-bind:id="app.uuid" v-bind:value="app.uuid"   :checked="app.suspended != 'true'" v-on:click="checkedStatus(app.uuid,app.suspended)">
                                               <span class="fa fa-check"></span>
                                            </label> 
                                        </td>                                        
                                        <td valign="top"  class="dataTables_empty">
											<a class="identity" v-on:click="identity(app.uuid,app.name,app.suspended)">Identity</a>
										</td>										
                                        <!--<td valign="top"  class="dataTables_empty"> <div class="statusAct"><i class="fa fa-check passive" ></i></div> </td>                                        -->                                                                                                                 
                                    </tr>           
                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing {{countStart}} to {{countShow}} of {{app_count}} entries</div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                                        <ul class="pagination">
                                            <li class="paginate_button previous " v-bind:class="{disabled: currentPage === 1 || currentPage === 0}" aria-controls="table" tabindex="0" id="table_previous">
                                                <a v-on:click="previousPage()">Previous</a>
                                            </li>
                                            <li  class="paginate_button active" aria-controls="table" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                                                <a  class="newPaging" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber || pageNumber === 0, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                                            </li>
                                            <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || appCount <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
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


	// var config = {
	// api: 'http://198.100.149.164',
	// port: ':8002/'
	// };
    var newAuthadmin = localStorage.getItem("newAuthadmin");
	var DevId =  localStorage.getItem('DevId');
	export default{
		name: "app-list",
		data() {
			return {
				appList: [],
                sortName:false,
                searchNname: '',
                currentPage: 1,
                itemsPerPage: 10,
                resultCount: 0,
                startIndex: 0,
                endIndex: 10,
                appCount: 0,
                countShow: 0,
                developersCount: 10,
                countStart: 1,
                oldpageNumber: 1,
                DevName: localStorage.getItem("DevName"),
                openAside: true,
                sortDate: false,
                sortStatus: false,
                sortUuid: false,
			}
		},
        computed: {
            totalPages: function() {
                
                if(this.searchNname == ""){
                    if (this.endIndex >= this.appCount){
                    this.countShow = this.appCount;
                    }
                    else{
                            this.countShow = this.endIndex;
                    }
                    this.itemsPerPage = this.developersCount;
                    return Math.ceil(this.appCount / this.itemsPerPage);
                }
                else{

                    this.itemsPerPage = this.developersCount;
                    return Math.ceil(this.appCount / this.itemsPerPage);
                }
            },
            paginate: function() {
                if(this.searchNname != ''){

                    var newArray3 = this.appList
                        .filter(appList => appList.name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                        var numberTr = newArray3.length;
                        if(numberTr >= this.developersCount){
                            this.countShow = this.developersCount;
                            this.app_count = numberTr;
                        }
                        else{
                            this.countShow = numberTr;
                            this.app_count = numberTr;
                        }
                        if(numberTr == undefined || this.appCount== 0){
                            this.countStart = 0;
                        }
                        var newArray3 = this.appList
                            .filter(app_user => app_user.name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
                            .slice(this.startIndex , this.endIndex );
                            return newArray3;
                }
                else{
                    var array2 = this.appList.length;
                    if (this.endIndex >= array2){
                        this.countShow = array2;
                    }
                    else{
                        this.countShow = this.endIndex;
                    }
                        this.app_count = array2;
                    return this.appList.slice(this.startIndex , this.endIndex )
                }
                        
                    }
        },
        updated: function(){
                if( this.developersCount == 0 ){
                    this.countStart = 0;
                }
        },
		created: function(){
			this.getApp();
            var checkAdmin = localStorage.getItem("adminCheckCode");
            if(checkAdmin == 'adminCheckIsSuccess777**'){

            }
            else{
                this.$router.push('/login')
            }
            document.title = 'APP List :: Admin UI';
		},
		methods: {
            setPage: function(pageNumber) {
                if(pageNumber != this.oldpageNumber){
                    console.log(pageNumber)
                    this.currentPage = pageNumber;

                    var start = pageNumber * this.developersCount;
                    this.startIndex  = start-this.developersCount;
                    this.endIndex = pageNumber*this.developersCount;
                    this.countStart = this.startIndex+1;
                    this.oldpageNumber = pageNumber;

                    if (this.endIndex >= this.showDev){
                            this.countShow = this.appCount;
                    }else{
                            this.countShow = this.endIndex;
                    }  
                }
           
            },
            nextPage: function(){
                console.log(this.currentPage)
                this.currentPage = this.currentPage + 1;
                //var onePlus = this.currentPage + 1;
                var start =this.currentPage * this.developersCount;
                this.startIndex  = start-this.developersCount;
                this.endIndex = this.currentPage*this.developersCount;
                this.countStart = this.startIndex+1;
                // this.oldpageNumber = pageNumber;
                

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
                    this.countStart = this.startIndex+1;

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
			getApp: function() {
				this.$http.get(config.api + config.port + 'int/' + DevId + '/apps', {
                headers: {
                    'Content-Type': 'text/json,charset=utf-8',
                    'Authorization': newAuthadmin
                }
				}).then(function (response){
					console.log(response)
					this.appList = response.body.ret;
                    this.appCount = response.body.ret.length;

                    if(this.appCount == 0){
                        this.countStart = 0;
                    }
                    else{
                        this.countStart = 1;
                    }

                    if (this.endIndex >= this.appCount){
                            this.countShow = this.appCount;
                        }else{
                            this.countShow = this.endIndex;
                        }
				})

                
			},
			identity: function(app_uuid,app_name,app_status){
				localStorage.removeItem('app_uuid');
				localStorage.setItem('app_uuid', app_uuid);

                localStorage.removeItem('app_name');
                localStorage.setItem('app_name', app_name);

                localStorage.removeItem('app_status');
                localStorage.setItem('app_status', app_status);

				location.reload();
				this.$router.push("/identity");
			},
        	logout:function(){
                localStorage.removeItem('newAuthadmin');
				localStorage.removeItem('DevId');
				localStorage.removeItem('app_uuid');
                localStorage.removeItem('adminCheckCode');				
                this.$router.push("/login");
            },
            sortByName:function(){
                if (this.sortName === true){
                    this.sortName = false
                    this.appList.reverse()
                }else{
                    this.sortName = true
                    
                    function compare(a, b) {
                        if (a.name < b.name){
                            return -1                         
                        }
                        if (a.name > b.name){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.appList.sort(compare)
                }
            },
            sortByDate:function(){
                if(this.sortDate === true){
                    this.sortDate = false
                    this.appList.reverse()
                }
                else{
                    this.sortDate = true
                    
                    function compare(a, b) {
                        if (a.create_time < b.create_time){
                            return -1                         
                        }
                        if (a.create_time > b.create_time){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.appList.sort(compare)
                }
            },
            sortByID:function(){
                if(this.sortUuid === true){
                    this.sortUuid = false
                    this.appList.reverse()
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
                    this.appList.sort(compare)
                }
            },
            sortByStatus:function(){
                if(this.sortStatus === true){
                    this.sortStatus = false
                    this.appList.reverse()
                }
                else{
                    this.sortStatus = true
                    
                    function compare(a, b) {
                        if (a.suspended != "true"){
                            return -1                         
                        }
                        if (a.suspended == "true"){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.appList.sort(compare)
                }
            },
            checkedStatus: function(app_uuid,suspended){
                var emptyBody = {};
                if(suspended == 'true'){
                    this.$http.patch(config.api + config.port +"int/app/"+ app_uuid + '/unsuspend',emptyBody,{
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': newAuthadmin
                            }
                    }).then(function(response){
                        console.log(response)
                        if(response.body.ret == true){
                            this.getApp();
                        }
                    })
                }
                else{
                    this.$http.patch(config.api + config.port +"int/app/"+ app_uuid + '/suspend',emptyBody,{
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': newAuthadmin
                            }
                    }).then(function(response){
                        console.log(response)
                        if(response.body.ret == true){
                            this.getApp();
                        }
                    })
                }
                console.log(app_uuid)
                
            },
		}
	}
</script>