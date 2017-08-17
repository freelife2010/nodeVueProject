<template>
<div id="payments">
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
                            <router-link to="/authorization" title="Modify authorization e-mail">
                                <span>Authorization e-mail</span>
                            </router-link>
                        </li>
                        <li class=" ">
                            <router-link to="/e_mail_confirm" title="Modify confirmation e-mail">
                                <span>Confirmation e-mail</span>
                            </router-link>
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
                <li class=" ">
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
                <li class=" active">
                    <router-link to="/admin/payments">
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
                    Payment history
                    <small>View payment history</small>
                </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-md-2">
                                <a href="#myModal" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                                    <span class="btn-label">
                                        <i class="fa fa-plus"></i>
                                    </span>Create Payment
                                </a>
                            </div>
                            <div class="col-md-5">
                                <div class="choose-uuid">
                                    <span>dev uuid:</span> 
                                    <select name="" id="" v-model="selected" v-on:change="selUuid">
                                        <option disabled value="">Please select one</option>                                        
                                        <option v-bind:value="dev.uuid" v-for="dev in getAllDev ">{{dev.uuid}}</option>
                                    </select>
                                </div>
                                
                            </div>
                        </div>
                        <br>
                        <div class="panel panel-default">
                            <div class="panel-body">
                              <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer">
                                <div class="row">
                                        <div class="col-xs-6">
                                            <div class="dataTables_length" id="table_length">
                                                <!-- <label>Display
                                                    <select name="table_length"  v-model="paymentsCount" v-on:change="changeHandler" aria-controls="table" class="form-control input-sm">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                    Records per page</label> -->
                                            </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div id="table_filter" class="dataTables_filter">
                                                <label>Search by Amount:
                                                    <input type="search" v-model="searchNname" autofocus class="form-control input-sm" placeholder="" aria-controls="table">
                                                    </label>
                                            </div>
                                        </div>
                                        <div id="table_processing" class="dataTables_processing" style="display: none;">Processing...</div>
                                    </div>
                                <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1291px;">
                                    <thead>
                                        <tr role="row">
                                            <th class="sorting resColum" v-bind:class="{ sorting_desc: sortUuid }" tabindex="0" aria-controls="table"  aria-label="Developer: activate to sort column ascending" aria-sort="descending" v-on:click="sortByID">Transaction ID <img src="../../img/resize.png" alt="" align="right" class="resizeCol"></th>
                                            <th class="sorting resColum2" tabindex="0" aria-controls="table"  aria-label="Time: activate to sort column ascending" >Time<img src="../../img/resize.png" alt="" align="right" class="resizeCol"></th>
                                            <th class="sorting " v-bind:class="{ sorting_desc: sortAmount }" tabindex="0" aria-controls="table" aria-label="Amount: activate to sort column ascending" v-on:click="sortByAmount">Amount</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" class="even" v-for="dev in paginate ">
                                            <td class="sorting_1">{{ dev.uuid}}</td>
                                            <td>{{ dev.datetime}}</td>
                                            <td>{{ dev.amount}}</td>
                                            <td>{{ dev.description }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing {{countStart}} to {{ countShow }} of {{ allpayments }} entries </div>
                                        <!--<div v-else class="dataTables_info" id="table_info" role="status" aria-live="polite">{{showCountBut}} </div>-->
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
                                                <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || allpayments <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
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
                             <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Create New Payment
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
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('amount') }">
                    <label for="amount" class="control-label">Amount</label>
                    <input class="form-control" id="amount" type="text" v-model="amount" name="amount" required  v-validate="'required|min:1'">
                    <span v-show="errors.has('amount')" class="help-block error text-danger">Please enter Amount</span>
                </div>
                <!--<div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('currency') }">
                    <label for="currency" class="control-label">Currency</label>
                    <input class="form-control" id="currency" type="text" v-model="currency" name="currency" required  v-validate="'required|min:1'">
                    <span v-show="errors.has('currency')" class="help-block error text-danger">Please enter Currency</span>
                </div>-->
                <div class="form-group has-feedback"  v-bind:class="{ 'has-error' : errors.has('description') }">
                    <label for="description" class="control-label">Description</label>
                    <input class="form-control" id="description" type="text" v-model="description" name="description"   required  v-validate="'required|min:1'" >
                    <span v-show="errors.has('description')" class="help-block error text-danger">Please enter Description</span>
                </div>
                <!--<div class="form-group has-feedback"  v-bind:class="{ 'has-error' : errors.has('uuid') }">
                    <label for="uuid" class="control-label">UUID</label>
                    <input class="form-control" id="uuid" type="text" v-model="uuid" name="uuid"   required  v-validate="'required|min:1'">
                    <span v-show="errors.has('uuid')" class="help-block error text-danger">Please enter UUID</span>
                </div>        -->
               
            </div>
    <div style="clear: both"></div>
    <br>
        <div class="pull-right">
            <div><button class="btn btn-lg btn-info"  id="task-submit-btn" type="button" v-on:click="create_payment">Create</button> 
            <button class="btn btn-lg btn-default" id="formClose" data-dismiss="modal" type="button">Close</button></div>        <input class="form-control" type="hidden" name="_token" value="OtmUlddtZTIjN5pddeSFiQ3aGIg0yISPS9ciY9fS">    </div></form>
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
 
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate);

import config from '../../config.js'


var newAuthadmin = localStorage.getItem("newAuthadmin");
var DevId =  localStorage.getItem('DevId');
// var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };

    export default{
      name: 'payments',
     
        data(){  
          return {
            currency: "",
            amount: "",
            uuid: "",
            description: "",
            paymentsCount: 10,
            pageCount: 1,
            limit: 0,
            count: 10,
            allpayments: 0,
            totalPage: 0,
            limitMarker: 0,
            countMarker: 0,
            countMarker2: 0,
            searchNname: '',
            developersHistory: [],
            mark:0,
            mark_two:2,
            cont: [],
            sortAmount: false,
            sortUuid: false,
            currentPage: 1,
            itemsPerPage: 10,
            resultCount: 0,
            startIndex: 0,
            endIndex: 10,
            getAllDev: [],
            allDevelopers: 0,
            selected: '',
            countShow: null,
            countShow1: null,
            allpayments1: null,
            showCountBut: '',
            oldpageNumber: 1,
            countStart: 1,
            newArray: [],
            developersCount: 10,
            newArray3Len: null,
            openAside: true,
            sortID: false,
        }
      },
    mounted:function(){
        $( function() {
            $( ".resColum" ).resizable({
                handles: " e"
            });
        } );
        $( function() {
            $( ".resColum2" ).resizable({
                handles: " e"
            });
        } );
    },
    computed: {
         totalPages: function() {
            
            if(this.searchNname == ''){
                
                if (this.endIndex >= this.allpayments){
                    this.countShow = this.allpayments;
                }
                else{
                        this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.allpayments / this.developersCount)
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
                var newArray3 = this.developersHistory
                    .filter(developersHistory => developersHistory.amount.toString().indexOf(this.searchNname) !== -1);
                   
                    this.newArray3Len = newArray3.length;
                    this.countShow = this.newArray3Len;
                    this.allpayments = this.newArray3Len;

                    if(this.newArray3Len == 0 || this.allpayments == 0){
                        this.countStart = 0;
                    }
                    if(this.oldpageNumber == 1 && this.newArray3Len != 0){
                        this.countStart = 1
                    }

                    if(this.newArray3Len >= this.developersCount){
                        
                        this.countShow = this.developersCount;
                        this.allpayments = this.newArray3Len;

                    }
                    else{
                        this.countShow = this.newArray3Len;
                        this.allpayments = this.newArray3Len;
                    }
                    return newArray3.slice(this.startIndex , this.endIndex );
            }
            else{
                if(this.checkSearch === false ){
                    this.setPage(1);
                    this.checkSearch = true;
                    this.countStart = 1;
                }
                var array2 = this.developersHistory.length;
                this.countShow = array2;
                this.allpayments = array2;
                return this.developersHistory.slice(this.startIndex , this.endIndex )
            }
            
            
        }

    },
      created:function(){
          this.getHistory();
          this.getDevelopersList();
           var checkAdmin = localStorage.getItem("adminCheckCode");
            if(checkAdmin == 'adminCheckIsSuccess777**'){

            }
            else{
                this.$router.push('/login')
            }
            document.title = 'Payment History :: Admin UI';
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
                    this.countStart = startIndex + 1;

                    if (this.endIndex >= this.showDev){
                            this.countShow = this.allpayments;
                    }
                    else{
                            this.countShow = this.endIndex;
                    }
                }
        
            },
            nextPage: function(){
                alert(this.currentPage)
                alert(this.totalPage)
                if(this.allpayments != 0){
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
          getDevelopersList: function() {
           this.$http.get(config.api + config.port + "dashboard", {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': newAuthadmin
                }
           }).then(function(response){
               this.allDevelopers = response.body.ret.developers;
             
                // GET ALL DEVELOPES
                this.$http.get(config.api + config.port + 'ui/dev/list/0/'+  this.allDevelopers,{
                 headers: {
                        'Content-Type': 'application/json',
                        'Authorization': newAuthadmin
                    }
                }).then(function(response){
                    this.getAllDev = response.body.ret;
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
          getHistory:function(){
              this.$http.get(config.api + config.port + "int/dev/" + this.selected + "/payments",{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              }).then(function(response){
                    this.developersHistory = response.body.ret;
                    this.allpayments = response.body.ret.length;
                    console.log(response)
                    if(this.allpayments == 0){
                        this.countStart = 0;
                    }
                    else{
                        this.countStart = 1;
                    }
              })
          },
          
          create_payment:function(){
             
              console.log(this.selected)
              if(this.selected == ''){
                  alert("Please seletc developer uuid");
              }else{
                   var addPayment = {
                        currency: this.currency,
                        amount: this.amount,
                        dev_uuid: this.selected,
                        description: this.description
                    };
                this.$http.post(config.api + config.port + "ui/issue_payment", addPayment,{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
                }).then(function(response){
                    console.log(response);
                    if(response.data.ret == true){
                        $('#formClose').trigger('click');
                        this.getHistory();
                    }
                })
              }
              
          },
          selUuid: function(){
              this.getHistory();
          },
          changeHandler: function() {
            
        },
        logout:function(){
                localStorage.removeItem('newAuthadmin');
				localStorage.removeItem('DevId');
				localStorage.removeItem('app_uuid');
                localStorage.removeItem('adminCheckCode');				
                this.$router.push("/login");
            },
        sortByAmount:function(){
            
            if (this.sortAmount === true){
                this.sortAmount = false;
                this.developersHistory.reverse();
            }else{
                this.sortAmount = true;
                function compareNumbers(a, b) {
                    return a.amount - b.amount;
                }
                this.developersHistory.sort(compareNumbers);
            }
                
        },
        sortByID:function(){
            if(this.sortUuid === true){
                this.sortUuid = false
                this.developersHistory.reverse()
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
                this.developersHistory.sort(compare)
            }
        }
      }
    }
    </script>