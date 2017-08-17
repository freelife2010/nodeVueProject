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
                                                <a class="search-fa" v-on:click="searchDeveloper()"><span class="fa fa-search"></span></a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info">
                                <thead>
                                <tr role="row">
                                    <th class=""  tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 130px;" >ID</th>                                    
                                    <th class="sorting" v-bind:class="{ sorting_desc: sortName }" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 130px;" v-on:click="sortByName">Name</th>
                                    <th class=""  tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 130px;">UserName</th>                                    
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-sort="descending" aria-label="Email: activate to sort column ascending" style="width: 127px;">Email</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Total APPs: activate to sort column ascending" style="width: 221px;">Total APPs</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Balance: activate to sort column ascending" style="width: 173px;">Balance</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Registered at: activate to sort column ascending" style="width: 265px;">Registered at</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 169px;">Status</th>
                                    <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 169px;">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td valign="top" colspan="9" class="dataTables_empty loading-td" v-if="loading">Loading...</td>                                        
                                    </tr>
                                    <tr class="odd" v-for="devList in paginate"  v-if="!loading">
                                        <td valign="top"  class="dataTables_empty" >{{devList.uuid}}</td>
                                        <td valign="top"  class="dataTables_empty">{{devList.first_name}}</td>
                                        <td valign="top"  class="dataTables_empty">{{devList.user_name}}</td>                                        
                                        <td valign="top"  class="dataTables_empty">{{devList.email}}</td>
                                        <td valign="top"  class="dataTables_empty">{{devList.app_count}}</td>
                                        <td valign="top"  class="dataTables_empty">{{devList.balance}}</td>
                                        <td valign="top"  class="dataTables_empty">{{devList.create_time}}</td>
                                        <td valign="top"  class="dataTables_empty"> 
                                           <label v-bind:for="devList.uuid" class="c-checkbox"> 
                                               <input type="checkbox" v-bind:id="devList.uuid" v-bind:value="devList.uuid"   :checked="devList.status == 'active'" v-on:click="checkedStatus(devList.uuid,devList.status)">
                                               <span class="fa fa-check"></span>
                                            </label>  
                                        </td>
                                        <td valign="top"  class="dataTables_empty" style="padding: 0px !important; width: 420px;">
                                            <a href="#myModalEdit"  data-target="#myModalEdit" data-toggle="modal" class="delete edit" v-on:click="getDev(devList.uuid)">
                                                <span class="fa fa-pencil"></span>
                                            </a>
                                             <a  class="delete" v-on:click="deleteDev(devList.uuid)">
                                                <span class="fa fa-remove"></span>
                                            </a>
                                            <a  class="see" title="App List" v-on:click="AppList(devList.uuid,devList.first_name)">
                                                <span class="fa fa-eye"></span>
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="dataTables_info" id="table_info" role="status" aria-live="polite"><!--Showing {{limit}} to {{ count }} of {{ allDevelopers }} entries--> Showing {{countStart}} to {{ countShow }} of {{ allDevelopers }} entries</div>
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
                                            <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || showDev <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
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
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('user name') }">
                    <label for="user_name" class="control-label">User Name</label>
                    <input class="form-control" id="user_name" type="text" v-model="user_name" name="user name" required  v-validate="'required|min:3'">
                    <!--<span v-show="errors.has('user_name')" class="help-block error text-danger">Please enter User Name</span>-->
                    <span v-show="errors.has('user name')" class="help-block error text-danger" style="color:red">{{ errors.first('user name') }}</span>

                </div>
                <div class="form-group has-feedback" v-bind:class="{ 'input': true, 'has-error': errors.has('first name') }">
                    <label for="first_name" class="control-label">First Name</label>
                    <input class="form-control" id="first_name" type="text" v-model="first_name" name="first name" required  v-validate="'required|alpha|min:3'">
                    <span v-show="errors.has('first name')" class="help-block error text-danger">{{ errors.first('first name') }}</span>
                </div>
                <div class="form-group has-feedback"  v-bind:class="{'input': true,  'has-error' : errors.has('last name') }">
                    <label for="last name" class="control-label">Last Name</label>
                    <input class="form-control" id="lastname" type="text" v-model="last_name" name="last name"   required  v-validate="'required|alpha|min:3'">
                    <span v-show="errors.has('last name')" class="help-block error text-danger">{{ errors.first('last name') }}</span>
                </div>
                <div class="form-group has-feedback"  v-bind:class="{ 'has-error' : errors.has('country') }">
                    <label for="country" class="control-label">Country</label>
                    <input class="form-control" id="country" type="text" v-model="country" name="country"   required v-validate="'required|alpha|min:3'">
                    <span v-show="errors.has('country')" class="help-block error text-danger">{{ errors.first('country') }}</span>
                </div>
                <div class="form-group  has-feedback"   v-bind:class="{ 'has-error' : errors.has('email') }">
                    <label for="email" class="control-label">E-mail</label>
                    <input class="form-control" id="email" type="email" v-model="email" name="email"  required  v-validate="'required|email'">
                     <span v-show="errors.has('email')" class="help-block error text-danger">{{ errors.first('email') }}</span>

                </div>
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('password') }">
                    <label for="password" class="control-label">Password</label>
                    <input class="form-control" id="password" type="password" name="password" v-model="password" required  v-validate="'required|min:8|confirmed:confirmpassword'">
                    <!--<span v-show="errors.has('password')" class="help-block error text-danger">Please enter password</span>-->
                    <span v-show="errors.has('password')" class="help-block error text-danger" style="color:red">{{ errors.first('password') }}</span>                
                </div>
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('password') }">
                    <label for="confirmpassword" class="control-label">Confirm Password</label>
                    <input class="form-control" id="confirmpassword" type="password" name="confirmpassword" >
                    <!--<span v-show="errors.has('password')" class="help-block error text-danger">doesn't match password</span>-->
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
        <form accept-charset="utf-8" class="form-vertical"  data-parsley-validate="">
            <div style="margin-left: 15px" >
                <input class="form-control" type="hidden" name="id" value="">

                <div class="form-group" >
                    <label for="user_name" class="control-label">User Name</label>
                    <input class="form-control" type="text" v-model='userinfo_name'   name="user_name">
                </div>
                <div class="form-group">
                    <label for="first_name" class="control-label">First Name</label>
                    <input class="form-control" type="text" v-model='userinfo_firstname'  name="first_name" >
                </div>
                <div class="form-group">
                    <label for="lastname" class="control-label" >Last Name</label>
                    <input class="form-control" id="lastname" type="text" v-model='userinfo_lastname'>
                </div>
                <div class="form-group">
                    <label for="country" class="control-label" >Country</label>
                    <input type="text" id="country" class="form-control" v-model='userinfo_country'>
                </div>
                <div class="form-group" >
                    <label for="email" class="control-label">E-mail</label>
                    <input class="form-control"  type="email" v-model='userinfo_email'  name="email">
                </div>
                <div class="form-group" v-if="setNewPass">
                    <label for="password" class="control-label">Password</label><br>
                    <input class="form-control form-control2" id="password" type="password" v-model='user_password'  name="password">
                    <button id="task-submit-btn" type="button" class="btn btn-lg btn-info btn-reset" v-on:click="resetPass">Reset Password</button>
                </div>
                <div class="form-group" v-else>
                    <label for="passwordNew" class="control-label">New Password</label><br>
                    <input class="form-control " id="passwordNew" type="password" v-model='user_password'  name="password">
                    <label for="passwordNew" class="control-label">Re-Enter password </label><br>
                    <input class="form-control" id="passwordNew" type="password" v-model='user_password_new'  name="password">
                    <span class="fa fa-exclamation-circle error_danger " v-if="openWrongNewPass">Passwords do not match!</span>
                </div>
                <!--<div class="form-group" >
                    <label for="status" class="control-label">Status</label>
                    <select class="form-control status_ap"  v-model='userinfo_status' name="status">
                        <option value="active">Active</option>
                        <option value="passive" >Passive</option>
                    </select>
                </div>-->
                    
                </div>
        </form>
            </div>
    <div style="clear: both"></div>
    <br>
        <div class="pull-right">
            <div>
                <button class="btn btn-lg btn-info"  id="task-submit-btn" type="button"  v-on:click="editDev(editDev_uuid)">Save</button>
                <button class="btn btn-lg btn-default" id="formClose_edit" data-dismiss="modal" type="button" v-on:click="clean">Close</button>
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

// var config = {
//   api: 'http://198.100.149.164',
//   port: ':8002/'
// };

    export default{
      name: 'developers',
        data(){
          return {
              user_name: "",
              first_name: "",
              last_name: "",
              email: "",
              country: "",
              password: '',
              confirmpassword: '',
              developersCount: 10,
              develoverList: [],
              allDev:[],
              pageCount: 1,
              limit: 0,
              count: 10,
              allDevelopers: 0,
              allDevCount: 0,
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
              sortName: false,
              newPagingLimit: 0,
              getAllDev: [],
              currentPage: 1,
              itemsPerPage: 10,
              resultCount: 0,
              startIndex: 0,
              endIndex: 10,
              userinfo_name: '',
              userinfo_firstname: '',
              userinfo_lastname: '',
              userinfo_country: '',
              userinfo_email: '',
              user_password: '',
              userinfo_status: '',
              editDev_uuid: '',
              checked: true,
              loading: false,
              oldpageNumber: 1,
              countShow: 0,
              showDev: null,
              countStart: 1,
              openAside: true,
              setNewPass: true,
              user_password_new: '',
              openWrongNewPass: false
          }

    },
    computed: {
         matchPassword: function () {
                return this.password === this.confirmpassword;
        },
         totalPages: function() {
          
                if(this.searchNname == ""){
                    if (this.endIndex >= this.showDev){
                    this.countShow = this.showDev;
                    }
                    else{
                            this.countShow = this.endIndex;
                    }
                    this.itemsPerPage = this.developersCount;
                    return Math.ceil(this.showDev / this.itemsPerPage);
                }
                else{

                    this.itemsPerPage = this.developersCount;
                    return Math.ceil(this.allDevelopers / this.itemsPerPage);
                }
        },
        paginate: function() {
          return this.getAllDev.slice(this.startIndex, this.endIndex )
        },
        

    },
    created: function(){
        this.getDevelopersList();
        this.pages();
        var checkAdmin = localStorage.getItem("adminCheckCode");
        if(checkAdmin == 'adminCheckIsSuccess777**'){

        }
        else{
            this.$router.push('/login')
        }
        document.title = 'Developers List :: Admin UI';
    },
    methods:{
        
        pages:function(){
            this.countShow = this.developersCount;
        },
        setPage: function(pageNumber) {
            if(pageNumber != this.oldpageNumber){
                console.log(pageNumber)
                this.currentPage = pageNumber

                var start = pageNumber * this.developersCount;
                this.startIndex  = start-this.developersCount;
                this.countStart = this.startIndex;
                this.endIndex = pageNumber*this.developersCount;
                this.oldpageNumber = pageNumber;
                this.countStart = this.startIndex + 1;
                if(this.endIndex >= this.showDev){
                        this.countShow = this.showDev;
                }else{
                        this.countShow = this.endIndex;
                }
            }
        },
        create_dev:function(){
            this.$validator.validateAll().then(() => {
                var newDeveloper = {
                    user_name: this.user_name,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    country: this.country,
                    password: this.password
                };
                this.$http.post(config.api + config.port + 'ui/dev/register', newDeveloper, {
                    headers: {
                        'Authorization': newAuthadmin,
                        'Content-Type': 'application/json'
                    }
                }).then( function(response){
                    console.log(response);
                    if(response.body.status == "ok"){
                        alert("Developer is successfully created")
                        $('#formClose').trigger('click');
                        this.getDevelopersList();
                    }
                    
                })
            })
        },
        getDevelopersList: function() {
                this.count = this.developersCount;
                this.$http.get(config.api + config.port + "dashboard", {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': newAuthadmin
                }
           }).then(function(response){
               console.log(response)
               this.allDevelopers = response.body.ret.developers;
               this.allDevCount = response.body.ret.developers;
               this.totalPage = Math.ceil(this.allDevelopers / this.developersCount);
       
        //    GET ALL DEVELOPES
                this.$http.get(config.api + config.port + 'ui/dev/list/0/'+  this.allDevelopers,{
                 headers: {
                        'Content-Type': 'application/json',
                        'Authorization': newAuthadmin
                    }
                }).then(function(response){
                   
                    this.getAllDev = response.body.ret;
                    this.showDev = response.body.ret.length;

                    if(this.showDev == 0){
                        this.countStart = 0;
                    }
                    else{
                        this.countStart = 1;
                    }

              
                })
           
           });
           
            
           this.$http.get(config.api + config.port + "int/dev/" +"4d1dc56f-2dde-44d7-8f36-cf27f3aaba04" + "/balance",{
               headers: {
                        'Content-Type': 'application/json',
                        'Authorization': newAuthadmin
                }
           }).then(function(response){
               this.balance = response.body.ret;
           });
        },
        AppList: function(DevId,DevelName){
            console.log(DevId);
            console.log(DevelName);
            localStorage.removeItem('DevId');
            localStorage.removeItem('DevName');
            localStorage.setItem('DevId', DevId);
            localStorage.setItem('DevName', DevelName);
            location.reload();
            this.$router.push("/app-list");
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

        nextPage: function() {
            this.currentPage = this.currentPage + 1;
            var start = this.currentPage * this.developersCount;
            this.startIndex  = start-this.developersCount;
            this.countStart = this.startIndex + 1;
            this.endIndex = this.currentPage*this.developersCount;
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
            this.oldpageNumber = this.currentPage;
            if (this.endIndex >= this.showDev){

                    this.countShow = this.showDev;
            }
            else{
                this.countShow = this.endIndex;
            }
        },
        clean:function(){
            this.setNewPass = true;
            this.user_password_new = '';
        },
        resetPass: function(){
            this.setNewPass = false;
            this.user_password  = '';
        },
        deleteDev:function(devDelete){
            // this.getDev();
            console.log(devDelete);
            // console.log(newAuthadmin);
            var r = confirm("Are you sure?");
                if (r == true) {
                    this.$http.delete(config.api + config.port + "ui/dev" ,{
                        body: {
                             "dev_uuid": devDelete
                        },
                        headers: {
                                'Authorization': newAuthadmin
                            }
                    }).then(function(response){
                        console.log(response);
                        if(response.body.ret == true){
                            alert("Developer is successfuly deleted");
                            this.getDevelopersList();
                        }
                    })
                } else {
                     console.log("You pressed Cancel!");
                }


        },
        editDev:function(devId){

            if(this.user_password != this.user_password_new){
                this.openWrongNewPass = true;
            }
            else{
                this.openWrongNewPass = false;

                var devDel = {
                    user_name: this.userinfo_name,
                    first_name: this.userinfo_firstname,
                    last_name: this.userinfo_lastname,
                    email:  this.userinfo_email,
                    password:  this.user_password,
                    country:  this.userinfo_country,
                    dev_uuid: this.editDev_uuid
                };
                var statusDev = {
                    dev_uuid: this.editDev_uuid,
                    status: this.userinfo_status,
                };
                console.log(devDel);
                this.$http.post(config.api + config.port +"ui/dev/modify",devDel,{
                headers: {
                            'Content-Type': 'application/json',
                            'Authorization': newAuthadmin
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
                            'Authorization': newAuthadmin
                        }
                }).then(function(response){
                    console.log(response)
                })
            
            }
        },
        getDev:function(devId){
                this.userinfo_name = ''
                this.userinfo_firstname = ''
                this.userinfo_lastname = ''
                this.userinfo_country = ''
                this.userinfo_email = ''
                this.userinfo_status = ''
                this.editDev_uuid = ''
                    this.localId = devId;
                    console.log(devId)
                    this.$http.get(config.api + config.port +"int/dev/" + devId,{
                        headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': newAuthadmin
                                }
                    }).then(function(response){
                        console.log(response)
                        if(response){
                            this.userinfo_name = response.body.ret.user_name
                            this.userinfo_firstname = response.body.ret.first_name
                            this.userinfo_lastname = response.body.ret.last_name
                            this.userinfo_country = response.body.ret.country
                            this.userinfo_email = response.body.ret.email
                            this.user_password = response.body.ret.password
                            this.userinfo_status = response.body.ret.status
                            this.editDev_uuid = response.body.ret.uuid
                        }
                    })
            },
        logout:function(){
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('DevId');
				localStorage.removeItem('app_uuid');
				localStorage.removeItem('adminCheckCode');
                this.$router.push("/login");
            },
        searchDeveloper: function(){

            this.loading = true;
            this.countStart = 1;
            this.endIndex = 10;
            this.setPage(1);
            var searchDev = {
                first_name:  this.searchNname,
                from: 0,
                to: this.allDevCount
            }
            console.log(searchDev)
            this.$http.post(config.api + config.port +"dev/search", searchDev,{
               headers: {
                        'Content-Type': 'application/json',
                        'Authorization': newAuthadmin
                    }
            }).then( function(response){
                console.log(response.body)
                this.getAllDev = response.body.ret;
                this.allDevelopers = this.getAllDev.length;
                this.loading = false;  
                if(this.searchNname != ''){
                    if(this.developersCount >= this.allDevelopers){
                        this.countShow = this.allDevelopers;
                    }
                    else{
                        this.countShow = this.developersCount;
                    }
                    if(this.allDevelopers == 0){
                        this.countStart = this.allDevelopers
                    }
                }
                else{
                    // this.countShow = this.endIndex;
                    this.countShow = this.developersCount;
                    this.endIndex = this.developersCount;

                }
            })
            if(this.searchNname == ''){
                this.countStart = 1;
            }
        },
        sortByName:function(){
                if (this.sortName === true){
                    this.sortName = false
                    return this.getAllDev.reverse()
                }else{
                    this.sortName = true
                    //  $('#sortBy-name').addClass('sorting_desc');
                    function compare(a, b) {
                        var nameA = a.first_name;
                        var nameB = b.first_name;
                        if (nameA < nameB){
                            return -1
                        }
                        if (nameA > nameB){
                            return 1
                        }
                         return 0
                    }
                   this.getAllDev.sort(compare)
                }
            },
            checkedStatus: function(uuid,status){
                console.log(uuid, status)
                if(status == 'active'){
                    var body = {
                        dev_uuid: uuid, 
                        status: "Inactive"
                    }
                    this.$http.post(config.api + config.port +"ui/dev/set_status",body,{
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': newAuthadmin
                            }
                    }).then(function(response){
                        console.log(response)
                        this.getDevelopersList()
                    })
                }else{
                    var body = {
                        dev_uuid: uuid, 
                        status: 'active'
                    }
                    this.$http.post(config.api + config.port +"ui/dev/set_status",body,{
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': newAuthadmin
                            }
                    }).then(function(response){
                        console.log(response)
                    })
                }
                console.log(uuid, status)
            }
    }
}

</script>
<style scoped>
.pull-right{
    padding-right: 14px;
}
</style>