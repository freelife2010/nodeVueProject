<template>
    <div class="app">
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
                            <a data-toggle-state="aside-collapsed" class="hidden-xs" @click="openAside =! openAside" title="Collapse/expand sidebar">
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
                            <a class="ceil_bar_hover" title="Logout" v-on:click="logout">
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
                                            <a href=""
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
                                        <!--<span class="user-block-role">{{dev_new}}</span>-->
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
                        <li class="show" >
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
                Payment history
                <small> View payment history </small>
            </div>
    <div class="container-fluid">
        <div class="row">
            <div style="width: 160px"></div>
        </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-1 manage-btn">
                    <a href="#myModal" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-dollar"></i>
                           </span>Add credit
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
                                    <select v-model="developersCount" v-on:change="changeHandler" name="table_length" aria-controls="table" class="form-control input-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> Records per page</label> 
                                </div>
                                </div>
                                <div class="col-xs-6">
                                    <div id="table_filter" class="dataTables_filter">
                                        <label>Search by Currency:<input  v-model="searchNname" class="form-control input-sm"  autofocus aria-controls="table">
                                        </label>
                                    </div>
                                </div>
                                <div id="table_processing" class="dataTables_processing" style="display: none;">Processing...</div>
                        </div>
                        <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 789px;">
                        <thead>
                            <tr role="row">
                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-sort="descending" aria-label="Time: activate to sort column ascending" style="width: 94px;">Time</th>
                                <th class="sorting" v-bind:class="{ sorting_desc: sortAmount }" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Amount: activate to sort column ascending" style="width: 132px;" v-on:click="sortByAmount">Amount</th>
                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Payment Method: activate to sort column ascending" style="width: 255px;">Currency</th>
                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Transaction ID: activate to sort column ascending" style="width: 220px;">Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd" v-for="pay in paginate">
                                <td valign="top" class="dataTables_empty">{{ pay.datetime }}</td>
                                <td valign="top" class="dataTables_empty">{{ pay.amount }}</td>
                                <td valign="top" class="dataTables_empty">{{ pay.currency }}</td>
                                <td valign="top" class="dataTables_empty">{{ pay.uuid }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing {{countStart}} to {{countShow}} of {{payment_count}} entries</div>
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
                            <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || app_count <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
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
                             <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp;  Add New Credit
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
                <div class="form-group has-feedback" >
                    <label for="amount" class="control-label">Amount</label>
                    <input class="form-control" id="amount" type="text" v-model="amount" name="amount" >
                    <font color="red"><span v-if="validateAmount" >Please enter Amount</span> </font>
                </div>
                <div class="form-group has-feedback" >
                    <label for="currency" class="control-label">Currency</label>
                    <input class="form-control" id="currency" type="text" v-model="currency" name="currency">
                    <font color="red"><span v-if="validateCurrency" class="help-block error text-danger">Please enter Currency</span></font>
                </div>
            </div>
            <div style="clear: both"></div>
            <br>
            <div class="pull-right">
                <div>
                    <button class="btn btn-lg btn-info"  id="task-submit-btn" type="button" v-on:click="addPayment">Create</button> 
                    <button class="btn btn-lg btn-default" id="formClose" data-dismiss="modal" type="button" >Close</button>
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
 
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate);

// local storgs*****

var userId = localStorage.getItem("userUuid");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
console.log(localStorage)
import config from '../config.js'

    export default {
       name: 'wrapper',
       data() {  
          return {
             amount: "",
             currency: "",
             description: "",
             payments: [],
             searchNname: '',
             app_count: '',
             dev_new: developer_name,
             payment_count:null,
             app_data: [],
             mark:0,
             mark_two:2,
             cont: [],
             sortAmount: false,
             userBalance: 0,
             validateAmount: false,
             validateCurrency: false,
            itemsPerPage: 10,
            startIndex: 0,
            endIndex: 10,
            developersCount: 10,
            countShow: 10,
            currentPage: 1,
            searchValue: '',
            checkId: null,
            oldpageNumber: 1,
            countStart: 1,
            array3: null,
            checkSearch: true,
            openAside: true,
          } 

    },
    computed: {
        totalPages: function() {
            if(this.searchNname == ''){
                
                if (this.endIndex >= this.payment_count){
                    this.countShow = this.payment_count;
                }
                else{
                        this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.payment_count / this.itemsPerPage)
            }
            else{
                if (this.endIndex >= this.array3){
                    this.countShow = this.array3;
                }
                else{
                    this.countShow = this.endIndex;
                }
                this.itemsPerPage = this.developersCount;
                return Math.ceil(this.array3 / this.itemsPerPage);
            }
        },
        paginate: function() {
             if(this.searchNname != ''){
                 var pagenumber = 1;
                 if(pagenumber != this.oldpageNumber && this.checkSearch === true || this.oldpageNumber == 1){
                    this.setPage(1);
                    this.checkSearch = false;
                 }
                var newArray3 = this.payments
                    .filter(payments => payments.currency.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                    this.array3 = newArray3.length;
                    this.countShow = this.array3;
                    this.payment_count = this.array3;

                    if(this.array3 == 0 || this.payment_count == 0){
                        this.countStart = 0;
                    }
                    
                    if(this.oldpageNumber == 1 && this.array3 != 0){
                        this.countStart = 1
                    }
                return newArray3.slice(this.startIndex , this.endIndex)
            }
            else{
                if(this.checkSearch === false ){
                    this.setPage(1);
                    console.log('asd')
                    this.checkSearch = true;
                }
                if(this.countStart == 0){
                    this.countStart = 1;
                }
                var array2 = this.payments.length;
                    this.countShow = array2;
                    this.payment_count = array2;
                return this.payments.slice(this.startIndex , this.endIndex)
            }
        },
    },
    created:function(){
        this.getPayments();
        this.getUserInfo();
        this.getData();
        this.checkId = localStorage.getItem("userUuid");
        if(this.checkId == null){
            this.$router.push("/login");
        }
        document.title = 'Payment History :: Developer UI';
    },
    mounted:function(){
         // open Dashboard------------***

               
            $('.dashboard').hover(function(){
                 $('#app_list').css('display','block')
            })
            $('#app_list').mouseleave(function(){
                $(this).css('display','none')
            })
    },
    methods:{
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
            setPage: function(pageNumber) {
                   if(pageNumber != this.oldpageNumber){
                    this.currentPage = pageNumber;
                    var start = pageNumber * this.developersCount;
                    this.startIndex  = start-this.developersCount;
                    this.endIndex = pageNumber*this.developersCount;

                    this.oldpageNumber = pageNumber;
                    this.countStart = this.startIndex + 1;
                    if (this.endIndex >= this.payment_count){
                            this.countShow = this.payment_count;
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
                this.oldpageNumber = this.currentPage
                this.countStart = this.startIndex+1;


                if (this.endIndex >= this.payment_count){
                    this.countShow = this.payment_count;
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
                    if (this.endIndex >= this.payment_count){

                            this.countShow = this.payment_count;
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
                    this.userBalance = response.body.ret.balance
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

                })
          },
        getPayments:function(){
            this.$http.get(config.api + config.port + "int/dev/" + userId + "/payments",{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": newAuthadmin
                }
            }).then(function(response){
                console.log(response);
                this.payments = response.body.ret;
                this.payment_count = response.body.ret.length;
                if(this.payment_count == 0){
                    this.countStart = 0;
                }
                else{
                    this.countStart = 1;
                }
            })
        },
        addPayment:function(){
            console.log(userId)
            if(this.amount != "" && this.currency != "" ){
            var bodyApp = {
                    dev_uuid: userId,
                    amount: this.amount,
                    currency: this.currency,
                    // description: this.description
            };
            this.$http.post(config.api + config.port + "ui/issue_payment",bodyApp,{
                 headers:{
                    "Content-Type": "application/json",
                    "Authorization": newAuthadmin
                }
            }).then(function(response){
                console.log(response);
                if(response.body.ret === true){
                    $('#formClose').trigger('click');
                    
                    this.amount ="";
                    this.currency = "";
                    this.validateAmount = false;
                    this.validateCurrency = false;
                    this.getPayments();
                }
            })}
            else{
                if(this.amount == ""){
                    this.validateAmount = true;
                }
                if(this.currency == ""){
                    this.validateCurrency = true;
                }
            }
        },
        logout: function(){
                localStorage.removeItem('userUuid');
                localStorage.removeItem('userDevToken');
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('dev_name');
                this.$router.push("/login");
                location.reload("/login");
            },
        sortByAmount:function(){
                if (this.sortAmount === true){
                    this.sortAmount = false;
                    this.payments.reverse();
                }else{
                    this.sortAmount = true;
                    function compareNumbers(a,b){
                        return a.amount - b.amount
                    }
                    this.payments.sort(compareNumbers);
                }
                
                
            },
            saveId:function(uuid,status) {
                localStorage.removeItem('userId');
                if( localStorage.getItem("appStatus") != ''){
                    localStorage.removeItem('appStatus');
                }
                localStorage.setItem('appStatus', status); 
               
                localStorage.setItem('userId', uuid); 
            // alert(localStorage.getItem('userId'));

        }
    }




    
    }



</script>