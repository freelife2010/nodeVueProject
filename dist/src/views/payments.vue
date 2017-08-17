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
                            <a href="#" data-toggle-state="aside-collapsed" class="hidden-xs" title="Collapse/expand sidebar">
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
        <aside class="aside">
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
                                        <span class="user-block-name">Hello, Developer</span>
                                        <span class="user-block-role">{{dev_new}}</span>
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
                            <router-link to="/credit-history" title="Credit History">
                                <em class="fa fa-credit-card"></em>
                                <span>Credit History</span>
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
                    </ul>
                    <!-- END sidebar nav-->
                </nav>
            </div>
            <!-- END Sidebar (left)-->
        </aside>

        <section>
                <div class="content-wrapper">
                    <ul id="app_list" class="nav sidebar-subnav collapse app_list ">
                        <li class="sidebar-subnav-header">APP Dashboard</li>
                        
                        <li class="das_hov"  v-for="devs in app_data">
                            <router-link to='/dashboard/Test App' title="Test App">
                                <span v-on:click="saveId(devs.uuid)">{{devs.name }}</span>
                            </router-link>
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
                                    <!-- <label>Display 
                                    <select name="table_length" aria-controls="table" class="form-control input-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> Records per page</label> -->
                                </div>
                                </div>
                                <div class="col-xs-6">
                                    <div id="table_filter" class="dataTables_filter">
                                        <label>Search by Currency:<input v-model="searchNname" class="form-control input-sm"  autofocus aria-controls="table">
                                        </label>
                                    </div>
                                </div>
                                <div id="table_processing" class="dataTables_processing" style="display: none;">Processing...</div>
                        </div>
                        <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 789px;">
                        <thead>
                            <tr role="row">
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-sort="descending" aria-label="Time: activate to sort column ascending" style="width: 94px;">Time</th>
                                <th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Amount: activate to sort column ascending" style="width: 132px;" v-on:click="sortByAmount">Amount</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Payment Method: activate to sort column ascending" style="width: 255px;">Currency</th>
                                <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Transaction ID: activate to sort column ascending" style="width: 220px;">Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd" v-for="pay in filteredUsers">
                                <td valign="top" class="dataTables_empty">{{ pay.datetime }}</td>
                                <td valign="top" class="dataTables_empty">{{ pay.amount }}</td>
                                <td valign="top" class="dataTables_empty">{{ pay.currency }}</td>
                                <td valign="top" class="dataTables_empty">{{ pay.uuid }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Count of Payments - {{payment_count}}</div>
                        </div>
                    <div class="col-xs-6">
                    <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                       <!--  <ul class="pagination">
                            <li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous">
                                <a href="#">Previous</a>
                            </li>
                            <li class="paginate_button next disabled" aria-controls="table" tabindex="0" id="table_next">
                                <a href="#">Next</a>
                            </li>
                        </ul> -->
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
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('amount') }">
                    <label for="amount" class="control-label">Amount</label>
                    <input class="form-control" id="amount" type="text" v-model="amount" name="amount" required  v-validate="'required|min:1'">
                    <span v-show="errors.has('amount')" class="help-block error text-danger">Please enter Amount</span>
                </div>
                <div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('currency') }">
                    <label for="currency" class="control-label">Currency</label>
                    <input class="form-control" id="currency" type="text" v-model="currency" name="currency" required  v-validate="'required|min:1'">
                    <span v-show="errors.has('currency')" class="help-block error text-danger">Please enter Currency</span>
                </div>
                <!--<div class="form-group has-feedback" v-bind:class="{ 'has-error' : errors.has('description') }">
                    <label for="description" class="control-label">Description</label>
                    <input class="form-control" id="description" type="text" v-model="description" name="description" required  v-validate="'required|min:1'">
                    <span v-show="errors.has('description')" class="help-block error text-danger">Please enter Description</span>
                </div>-->
            </div>
            <div style="clear: both"></div>
            <br>
            <div class="pull-right">
                <div>
                    <button class="btn btn-lg btn-info"  id="task-submit-btn" type="button" v-on:click="addPayment">Create</button> 
                    <button class="btn btn-lg btn-default" id="formClose" data-dismiss="modal" type="button">Close</button>
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

import config from '../config.js'


// var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };

    export default {
       name: 'wrapper',
        mounted: function(){
    $.fn.dataTableExt.sErrMode = 'throw';
    $.extend( $.fn.dataTable.defaults, {
        "fnDrawCallback": appendFilter()()
    } );

    function appendFilter() {
        return function() {
            setTimeout(function() {
                var $create_button_div = $('#create-btn');
                $('#create-btn-div').append($create_button_div);
                $create_button_div.removeClass('hide');
            }, 50);
        }
        }
      },
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
          } 

    },
      mounted:function(){
           $('.dashboard').mouseover(function(){
                $('#app_list').css('display','block')
            })
            .mouseleave(function(){
                $('#app_list').css('display','none')
                
            })
            
            $('#app_list').mouseover(function(){
                $('#app_list').css('display','block')
            })
            .mouseleave(function(){
                $('#app_list').css('display','none')
                
            })
      },
    computed: {
        filteredUsers() {
               if(this.mark == 1){
            for(var i = 0; i<this.payments.length-1; i++){
                    for(var j = 0 ; j<this.payments.length-1; j++){
                        if(this.payments[j].amount > this.payments[j+1].amount){
                            this.cont.push(this.payments[j])
                            this.payments[j] = this.payments[j+1]
                            this.payments[j+1] = this.cont[0]
                            this.cont.pop();
                         }
                    }
                }
                 return this.payments
                .filter(payments => payments.currency.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
        }
        else{
             return this.payments
                .filter(payments => payments.currency.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
        } 
            }
    },
    created:function(){
        this.getPayments();
        this.getData();
    },
    methods:{
          getData: function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": 'pkwzoculknvouuyjidmr'
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
                    "Authorization": 'pkwzoculknvouuyjidmr'
                }
            }).then(function(response){
                this.payments = response.body.ret;
                this.payment_count = response.body.ret.length;
            })
        },
        addPayment:function(){
            var bodyApp = {
                    dev_uuid: userId,
                    amount: this.amount,
                    currency: this.currency,
                    // description: this.description
            };
            this.$http.post(config.api + config.port + "/ui/issue_payment",bodyApp,{
                 headers:{
                    "Content-Type": "application/json",
                    "Authorization": 'pkwzoculknvouuyjidmr'
                }
            }).then(function(response){
                console.log(response);
                if(response.body.ret == true){
                    $('#formClose').trigger('click');
                    this.getPayments();
                }
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
        sortByAmount:function(){
                if(this.mark_two == 2){
                     this.mark = 1
                     this.mark_two = 1
                }
                else{
                    this.mark = 0;
                    this.mark_two = 2
                }
            },
            saveId:function(uuid) {
            alert(localStorage.getItem('userId'))
                localStorage.removeItem('userId');
               
                localStorage.setItem('userId', uuid); 
            alert(localStorage.getItem('userId'));

        }
    }




    
    }



</script>