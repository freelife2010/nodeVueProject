<template>
    <div id="identity">
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
                            <a data-toggle-state="aside-collapsed" class="hidden-xs" title="Collapse/expand sidebar">
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
                Test App2: Users
                <small> Manage users </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-6">
                    <a data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-plus"></i>
                           </span>Create Identity <!--Create User-->
                    </a>
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
                    <div id="table_users_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="row"><div class="col-xs-6"><div class="dataTables_length" id="table_users_length"><label>Display <select name="table_users_length" aria-controls="table_users" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> Records per page</label></div></div><div class="col-xs-6"><div id="table_users_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table_users"></label></div></div></div><table id="table_users" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_users_info" style="width: 1074px;">
                        <thead>
                        <tr role="row"><th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 60px;">ID</th><th class="sorting" v-bind:class="{ sorting_desc: sortName }" v-on:click="sortByName" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 114px;">Name</th><th class="" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 114px;">User Name</th><!--<th class="sorting_desc" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="E-mail: activate to sort column ascending" style="width: 121px;" aria-sort="descending">E-mail</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Phone: activate to sort column ascending" style="width: 121px;">Phone</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="DID: activate to sort column ascending" style="width: 81px;">DID</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Balance: activate to sort column ascending" style="width: 143px;">Balance</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 121px;">Status</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 137px;">Actions</th>--></tr>
                        </thead>
                        <tbody><!--<tr class="odd"><td valign="top" colspan="8" class="dataTables_empty">No data available in table</td></tr>-->
                            <tr v-for = "iden in identityList">
                                <td>{{iden.uuid}}</td>
                                <td>{{iden.name}}</td>
                                <td>{{iden.user_name}}</td>
                            </tr>
                        </tbody>
                    </table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_users_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div class="col-xs-6"><div class="dataTables_paginate paging_simple_numbers" id="table_users_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table_users" tabindex="0" id="table_users_previous"><a href="#">Previous</a></li><li class="paginate_button next disabled" aria-controls="table_users" tabindex="0" id="table_users_next"><a href="#">Next</a></li></ul></div></div></div></div>
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
                           <input class="form-control" id="name" type="text" name="name" v-model="name">
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

    var appUuid = localStorage.getItem('app_uuid');

    console.log(appUuid);


    export default{
        name: 'identity',
        data() {
			return {
				identityList: [],
                name: '',
                user_name: '',
                sortName:false
			}
		},
        created: function(){
			this.getIdentity();
		},
        methods: {
            getIdentity: function() {
             this.$http.get(config.api + config.port + 'app/' + appUuid + '/identities',{
                headers:{ 
                     "Content-Type": "application/json",
                      "Authorization": 'pkwzoculknvouuyjidmr'
                   
                }
            }).then(function(response){
                    this.identityList = response.body.ret;
                    console.log(response);
                    

                })
            },
            createIdentity:function(){
                var new_identity = {
                    user_name: this.user_name, 
                    name: this.name
                }
                this.$http.post(config.api + config.port + 'app/' + appUuid + '/identity',new_identity,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": 'pkwzoculknvouuyjidmr'
                    }
                }).then(function(response){
                    console.log(response);
                    if(response.ok === true){
                        alert("You Successfully Create New Identity");
                        $("#close-create-modal").trigger('click');
                        this.getIdentity();
                    }
                })

            },
        	logout:function(){
                localStorage.removeItem('newAuthadmin');
				localStorage.removeItem('DevId');
				localStorage.removeItem('app_uuid');				
                this.$router.push("/login");
            },
            sortByName:function(){
                if (this.sortName === true){
                    this.sortName = false
                    this.identityList.reverse()
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
                    this.identityList.sort(compare)
                }
            }
        }
    }
</script>