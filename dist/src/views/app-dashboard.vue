<template>
    <div id="dashboard_head">
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
                            <a href="#app-config" title="APP Config" data-toggle="collapse">
                                <em class="fa fa-cog"></em>
                                <span>Config</span>
                            </a>
                            <ul id="app_config" class="nav sidebar-subnav ">
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




                        <!--HIDDEN-->
                <li class="nav-heading show" v-if="$route.params.id">
                    <span data-localize="sidebar.heading.HEADER">Manage APP: devApp</span>
                </li>
                <!--<li class="show" v-if="$route.params.id">
                    <a href="#app-data" title="APP Info" data-toggle="collapse">

                        <em class="icon-drawer"></em>
                        <span>APP Info</span>
                    </a>
                    
                    <ul id="app-data" class="nav sidebar-subnav ">

                        <li class="show" v-if="$route.params.id">
                            <router-link to="/dashboard/Test App/app-cdr" title="View APP CDR">

                                <em class="icon-call-out"></em>
                                <span>View APP CDR</span>
                            </router-link>

                        </li>

                        <li class="show" v-if="$route.params.id">
                            <router-link to="/dashboard/Test App/daily-usage" title="Daily usage">                              
                                <em class="icon-calculator"></em>
                                <span>Daily usage</span>
                            </router-link>

                        </li>

                    </ul>

                </li>-->
                
                <li class="show" v-if="$route.params.id">
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
                
                <!--<li class="show" v-if="$route.params.id">
                    <a href="#app-pbx" title="PBX" data-toggle="collapse">

                        <em class="fa fa-phone"></em>
                        <span>PBX</span>
                    </a>
                    
                    <ul id="app-pbx" class="nav sidebar-subnav ">

                        <li class="">
                            <router-link to="/dashboard/Test App/conferences" title="Conference log">

                                <em class="fa fa-file-text"></em>
                                <span>Conference log</span>
                            </router-link>

                        </li>

                        <li class="">
                            <router-link to="/dashboard/Test App/pbx/agent-log" title="Agent session log">

                                <em class="fa fa-file-text-o"></em>
                                <span>Agent session log</span>
                            </router-link>

                        </li>

                        <li class="">
                            <router-link to="/dashboard/Test App/pbx/caller-log" title="Caller session log">

                                <em class="fa fa-file-text-o"></em>
                                <span>Caller session log</span>
                            </router-link>

                        </li>

                    </ul>

                </li>-->
                
                <li class="show" v-if="$route.params.id">
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
                
                <!--<li class="show" v-if="$route.params.id">
                    <router-link to="/dashboard/Test App/sip" title="SIP Accounts">

                        <em class="icon-earphones"></em>
                        <span>SIP Accounts</span>
                    </router-link>
                    
                </li>-->
                
                <!--<li class="show" v-if="$route.params.id">
                    <router-link to="/app-keys" title="API keys">

                        <div class="pull-right label label-info">
                            1
                        </div>
                        <em class="icon-key"></em>
                        <span>API keys</span>
                    </router-link>
                    
                </li>
                
                <li class="show" v-if="$route.params.id">
                    <router-link to="/dashboard/Test App/did" title="Manage DID">

                        <div class="pull-right label label-info">
                            0
                        </div>
                        <em class="fa fa-phone-square"></em>
                        <span>Manage DID</span>
                    </router-link>
                    
                </li>-->
                
                <!--<li class="show" v-if="$route.params.id">
                    <router-link to="/dashboard/Test App/conference-edit" title="Conferences">

                        <div class="pull-right label label-info">
                            0
                        </div>
                        <em class="fa fa-list"></em>
                        <span>Conferences</span>
                    </router-link>
                    
                </li>-->
                
                <li  class=" ">
                    <router-link to="/dashboard/Test App/queues" title="Queues">

                        <!--<div class="pull-right label label-info">
                            
                        </div>-->
                        <em class="fa fa-list"></em>
                        <span>Queues</span>
                    </router-link>
                    
                </li>
                
                <li class="show">
                    <router-link to="/dashboard/Test App/users" title="Users">

                        <div class="pull-right label label-info">
                            0
                        </div>
                        <em class="icon-user"></em>
                        <span>Users</span>
                    </router-link>
                    
                </li>
                
                <!--<li class="show" v-if="$route.params.id">
                    <router-link to="/dashboard/Test App/invoice" title="Invoice">

                        <em class="icon-credit-card"></em>
                        <span>Invoice</span>
                    </router-link>
                    
                </li>-->
                        <!--HIDDEN-->
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
                APP Dashboard: {{ $route.params.id }}
                <small> Manage APP </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Manage APP</div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-8">
                            <!--<a href="" class="btn btn-labeled btn-xl btn-info">
                                <span class="btn-label">
                                    <i class="fa fa-key"></i>
                                </span> APP API keys
                            </a>-->
                            <router-link to="/dashboard/Test App/users" title="users" class="btn btn-labeled btn-xl btn-info">
                               <span class="btn-label">
                               <i class="fa fa-user"></i>
                                </span> APP Users
                            </router-link>
                            <!--<a href="" class="btn btn-labeled btn-xl btn-green">
                            <span class="btn-label">
                                   <i class="fa fa-phone-square"></i>
                               </span> Manage DID
                            </a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <div class="input-group date" id="from_date">
                <input type="text" value="01.02.2017" class="form-control" style="height: 36px">
                    <span class="input-group-addon">
                        <span class="fa fa-calendar"></span>
                    </span>
            </div>
        </div>
        <div class="col-md-2">
            <div class="input-group date" id="to_date">
                <input type="text" value="01.03.2017" class="form-control" style="height: 36px">
                    <span class="input-group-addon">
                        <span class="fa fa-calendar"></span>
                    </span>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading"><h4>APP CDR Summary</h4></div>
                <div class="panel-body">
                    <div class="col-sm-12">
                        <div class="loader-demo loader-app-cdr hide">
                            <div class="ball-scale-multiple block-center">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <canvas id="chartjs-app-cdr" height="249" width="498" style="width: 498px; height: 249px;"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading"><h4>APP Daily usage</h4></div>
                <div class="panel-body">
                    <div class="col-sm-12">
                        <div class="loader-demo loader-app-daily hide">
                            <div class="ball-scale-multiple block-center">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <canvas id="chartjs-app-daily" height="249" width="498" style="width: 498px; height: 249px;"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading"><h4>Overall CDR</h4></div>
                <div class="panel-body">
                    <div class="col-sm-12">
                        <div class="loader-demo loader-overall-cdr hide">
                            <div class="ball-scale-multiple block-center">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <canvas id="chartjs-overall-cdr" height="528" width="1057" style="width: 1057px; height: 528px;"></canvas>
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
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import config from '../config.js'

Vue.use(VueRouter)
Vue.use(VueResource)

//  var config = {
//   api: 'http://198.100.149.164',
//   port: ':8002/'
// };

//**** local Storgs
var userId = localStorage.getItem("userUuid");
var userDevToken = localStorage.getItem("userDevToken");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
var devCount = localStorage.getItem("devCount");

/* Vue.filter('searchByName', function(value){
return
 });
*/
     export default{
      name: 'dashboard_head',
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
      data(){
          return{
            app_data: [],
            app_count: ''
          }
      },
    created: function(){
           this.getData();
        },
    methods:{
          getData:function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": 'pkwzoculknvouuyjidmr'
                  }
              })
              .then(response => {
                  this.app_data = response.body.ret;
                  this.app_count = response.body.ret.length;
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
            saveId:function(uuid) {
            alert(localStorage.getItem('userId'))
                localStorage.removeItem('userId');
               
                localStorage.setItem('userId', uuid); 
            alert(localStorage.getItem('userId'));

        }
     }
     }



</script>



<style>
    section{
        height: 1000px;
    }
</style>