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
                                        <span class="user-block-name">Hello, Developer</span>
                                        <span class="user-block-role">oper</span>
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
                        
                        <li class="nav-heading">
                            <span data-localize="sidebar.heading.HEADER">Manage APP: Test App2</span>
                        </li>
                         <!--<li class="">
                    <a href="#app-data" title="APP Info" data-toggle="collapse">
                        
                        <em class="icon-drawer"></em>
                        <span>APP Info</span>
                    </a>
                    
                        <ul id="app-data" class="nav sidebar-subnav collapse">
                            
                <li class="">
                    <a href="http://portal.opentact.org/app-cdr/index?app=107" title="View APP CDR">
                        
                        <em class="icon-call-out"></em>
                        <span>View APP CDR</span>
                    </a>
                    
                </li>
                
                <li class="">
                    <a href="http://portal.opentact.org/app/daily-usage?app=107" title="Daily usage">
                        
                        <em class="icon-calculator"></em>
                        <span>Daily usage</span>
                    </a>
                    
                </li>
                
                        </ul>
                        
                </li>-->
                
                 <li class="">
                    <a href="#app-rates" title="Finance" data-toggle="collapse">
                        
                        <em class="fa fa-money"></em>
                        <span>Finance</span>
                    </a>
                    
                        <ul id="app-rates" class="nav sidebar-subnav collapse">
                            
                            <li class="">
                                <router-link to="/app_origin"  title="Sell rates">
                                    
                                    <em class="fa fa-phone"></em>
                                    <span>Origination rates</span>
                                </router-link>
                                
                            </li>
                            
                            <li class="">
                                <router-link to="/app_term" title="Mass rates">
                                    
                                    <em class="fa fa-phone"></em>
                                    <span>Termination rates</span>
                                </router-link>
                                
                            </li>
                
                        </ul>
                        
                </li>
                
                <!--<li class="">
                    <a href="#app-pbx" title="PBX" data-toggle="collapse">
                        
                        <em class="fa fa-phone"></em>
                        <span>PBX</span>
                    </a>
                    
                        <ul id="app-pbx" class="nav sidebar-subnav collapse">
                            
                <li class="">
                    <a href="http://portal.opentact.org/conferences/log?app=107" title="Conference log">
                        
                        <em class="fa fa-file-text"></em>
                        <span>Conference log</span>
                    </a>
                    
                </li>
                
                <li class="">
                    <a href="http://portal.opentact.org/pbx/agent-log?app=107" title="Agent session log">
                        
                        <em class="fa fa-file-text-o"></em>
                        <span>Agent session log</span>
                    </a>
                    
                </li>
                
                <li class="">
                    <a href="http://portal.opentact.org/pbx/caller-log?app=107" title="Caller session log">
                        
                        <em class="fa fa-file-text-o"></em>
                        <span>Caller session log</span>
                    </a>
                    
                </li>
                
                        </ul>
                        
                </li>-->
                <li class="show" >
                    <router-link to="/dashboard/Test App/sms" title="SMS">

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
                            <router-link to="/dashboard/Test App/friend-list" title="Friend List">

                                <em class="fa fa-paper-plane"></em>
                                <span>Friend List</span>
                            </router-link>

                        </li>

                        <li class="">
                            <router-link to="/dashboard/Test App/block-list" title="Block List">

                                <em class="fa fa-file-text"></em>
                                <span>Block List</span>
                            </router-link>

                        </li>

                    </ul>

                </li>
                
                
                <!--<li class="">
                    <a href="http://portal.opentact.org/app-users/sip?app=107" title="SIP Accounts">
                        
                        <em class="icon-earphones"></em>
                        <span>SIP Accounts</span>
                    </a>
                    
                </li>-->
                
                <!--<li class="">
                    <a href="http://portal.opentact.org/app-keys/index?app=107" title="API keys">
                        
                        <div class="pull-right label label-info">
                            1
                        </div>
                        <em class="icon-key"></em>
                        <span>API keys</span>
                    </a>
                    
                </li>-->
                
                <!--<li class="">
                    <a href="http://portal.opentact.org/did/index?app=107" title="Manage DID">
                        
                        <div class="pull-right label label-info">
                            0
                        </div>
                        <em class="fa fa-phone-square"></em>
                        <span>Manage DID</span>
                    </a>
                    
                </li>-->
                
                <!--<li class="">
                    <a href="http://portal.opentact.org/conferences/index?app=107" title="Conferences">
                        
                        <div class="pull-right label label-info">
                            0
                        </div>
                        <em class="fa fa-list"></em>
                        <span>Conferences</span>
                    </a>
                    
                </li>-->
                
                <li  class=" ">
                    <router-link to="/dashboard/Test App/queues" title="Queues">

                        <!--<div class="pull-right label label-info">
                            1
                        </div>-->
                        <em class="fa fa-list"></em>
                        <span>Queues</span>
                    </router-link>
                    
                </li>
                
                <li class="show" v-if="$route.params.id">
                    <router-link to="/dashboard/Test App/users" title="Users">

                        <div class="pull-right label label-info">
                            0
                        </div>
                        <em class="icon-user"></em>
                        <span>Users</span>
                    </router-link>
                    
                </li>
                
                <!--<li class="">
                    <a href="http://portal.opentact.org/app-invoice/index?app=107" title="Invoice">
                        
                        <em class="icon-credit-card"></em>
                        <span>Invoice</span>
                    </a>
                    
                </li>-->
                
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
                {{ $route.params.id }}: Friends List
                <small> Manage Friends </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-3">
                <form accept-charset="utf-8" class="form-horizontal" method="POST" >                <!--email_off-->
                <select class="form-control" id="app_user" name="app_user"  v-model = "from_identity">
                    <!--<option value="" v-for="devs in app_data">{{devs.name}}</option>-->
                    <option v-for="user in app_user" :value="user.uuid">{{user.name}}</option>
                </select>                
                <input class="form-control" type="hidden" name="_token" value="wvOTshnlqZEs4hBAk7EnQWRFGQkQL4fQrMyCdXvI"></form>                <!--/email_off-->
                </div>
                <div class="col-md-2">
                    <a href="" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
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
                    <div class="col-xs-6"><div id="table_users_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table_users"></label></div></div></div><table id="table_users" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_users_info" style="width: 1057px;">
                        <thead>
                        <tr role="row"><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 85px;">ID</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 156px;">Name</th><th class="sorting_desc" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="E-mail: activate to sort column ascending" aria-sort="descending" style="width: 166px;">E-mail</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Phone: activate to sort column ascending" style="width: 166px;">Phone</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 166px;">Status</th><th class="sorting" tabindex="0" aria-controls="table_users" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 186px;">Actions</th></tr>
                        </thead>
                        <tbody><tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr></tbody>
                    </table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_users_info" role="status" aria-live="polite">Count of Apps -<!--Showing 0 to 0 of 0 entries--></div></div><div class="col-xs-6"><div class="dataTables_paginate paging_simple_numbers" id="table_users_paginate">
                    <!--<ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table_users" tabindex="0" id="table_users_previous"><a href="#">Previous</a></li><li class="paginate_button next disabled" aria-controls="table_users" tabindex="0" id="table_users_next"><a href="#">Next</a></li></ul>-->
                    </div></div></div></div>
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
        <form accept-charset="utf-8" class="form-vertical" method="POST" >            
            <div style="margin-left: 15px">
            <input class="form-control" type="hidden" name="app_id" value="107">            
            <input class="form-control" type="hidden" name="app_user_id" value="">            
            <input class="form-control" type="hidden" name="id" value="">            
            <div class="form-group"><label for="app_recipient_user_id" class="control-label"><!--App User-->App UserName</label>
            <select class="form-control" id="app_recipient_user_id" name="app_recipient_user_id" v-model = "target_identity"><!--<option value="">Select APP user</option>-->
            <option v-for="user in app_user" :value="user.uuid">{{user.name}}</option>

            </select></div>

                <div class="form-group">
                <label for="app_recipient_user_name" class="control-label"><!--App User-->App Name</label><input class="form-control" id="app_recipient_user_name" name="app_recipient_user_name">
                </div>
            </div>
        <div style="clear: both"></div>
    <br>
    <div class="pull-right">
        <div><button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="submit"  
        v-on:click = "sendRequest()">Send</button> <button class="btn btn-lg btn-default" data-dismiss="modal" type="button">Close</button></div>        <input class="form-control" type="hidden" name="_token" value="KIohPZ1oAxOpOWLxU5odbTTaRT1DxNGBEb0dlynl">    </div></form>
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

//  var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };

//**** local Storgs
var userId = localStorage.getItem("userUuid");
var userDevToken = localStorage.getItem("userDevToken");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
var devCount = localStorage.getItem("devCount");


    export default{
      name: 'friend',
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
      data(){
          return{
            app_data: [],
            app_count: '',
            app_user: [],

            user_id: '',
            from_identity:'',
            target_identity:''
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
    created: function(){
           this.getData();
           this.appUser();
           
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
/**************************************************/
          

            appUser:function(){
                this.user_id = localStorage.getItem('userId');
                
                    this.$http.get(config.api + config.port + 'app/' +this.user_id+ '/identities' ,{
                headers:{ 
                     "Content-Type": "application/json",
                      "Authorization": 'pkwzoculknvouuyjidmr'
                   
                }
            }).then(function(response){
                    this.app_user = response.body.ret;
                    console.log(response);
                    console.log(this.app_user);

                })
            },
            
            sendRequest:function(){

                this.$http.post('http://149.56.96.236:8002/' + 'identity/' + this.from_identity + '/follow/'+
                    this.target_identity ,{
                headers:{
                    "Content-Type": "application/json",
                      "Authorization": "pkwzoculknvouuyjidmr"
                }
            }).then(function(response){
                console.log(response);

                if(response.ret == true){
                    alert("You Successfully Send a Friend Request");

                }


            })
            alert(this.from_identity);
            alert(this.target_identity);
            },
            saveId:function(uuid) {
            alert(localStorage.getItem('userId'))
                localStorage.removeItem('userId');
               
                localStorage.setItem('userId', uuid); 
            alert(localStorage.getItem('userId'));

        }
/*****************************************************/

        }
    }

</script>