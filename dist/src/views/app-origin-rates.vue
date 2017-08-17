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
                        0$                        </a>
                    </li>
                    <!-- Fullscreen (only desktops)-->
                    <!-- END Offsidebar menu-->
                </ul>
                <!-- END Right Navbar-->
                    </div>
    </nav>
    <!-- END Top Navbar-->
</header>                <aside class="aside">
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
                <span class="user-block-name">Hello, Developer</span>
                    <span class="user-block-role">
                                                                            Developer
                                            </span>
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
                            <router-link to="/credit-history" title="Credit History">
                                <em class="fa fa-credit-card"></em>
                                <span>Credit History</span>
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
                
               <li class=" ">
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
                
               <li class="show">
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
<div class="dropdown-backdrop">

</div>
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
                Test App2: Origination rates
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
                        <div id="table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" v-model="searchName" aria-controls="table"></label></div>
                        <!--<div id="table_processing" class="dataTables_processing" style="display: none;">Processing...</div>-->
                        <table id="table" class="table table-striped table-hover  dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1057px;">
                        <thead>
                        <tr role="row"><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 138px;" aria-label="Country: activate to sort column ascending">Country</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 425px;" aria-label="Destination: activate to sort column ascending">Destination</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 52px;" aria-label="Code: activate to sort column ascending">Code</th><th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 167px;" aria-sort="descending" aria-label="Opentact Sell Rate: activate to sort column ascending" v-on:click="sortByName">Opentact Sell Rate</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" style="width: 165px;" aria-label="Your Sell Rate: activate to sort column ascending">Your Sell Rate</th></tr>
                        </thead>
                        <tbody>
                             <tr role="row" class="odd" v-for="rate in filteredUsers">
                                <td>{{ rate.country }}</td>
                                <td> {{ rate.code_name }}</td>
                                <td>{{ rate.code }}</td>
                                <td class="sorting_1">{{ rate.rate }}</td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" step="0.01" style="width: 80px" id="app_rate" type="number" name="app_rate">
                                    </div>
                                    <a href="http://portal.opentact.org/app-rates/add-rate/58792?app=107" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                                        <span class="fa fa-plus"> </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Count of Origination rates - {{ ratesCount }} </div>
                    <div class="dataTables_paginate paging_simple_numbers" id="table_paginate"><ul class="pagination">
                        <!--<li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous">-->
                            <!--<a href="#">Previous</a></li><li class="paginate_button active" aria-controls="table" tabindex="0">
                            <li class="paginate_button next" aria-controls="table" tabindex="0" id="table_next"><a href="#">Next</a></li>-->
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

//  var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };
    export default{
      name: 'users',
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
              password: '',
              email: '',
              name: '',
              app_data: [],
              app_count: '',
              arr: [],
              ratesCount: '',
              cont: [],
              mark:0,
              searchName: '',
              mark_two:2,
          }
      },
    created: function(){
           this.getData();
           this.getRates();
        },
 computed: {
    filteredUsers() {
        if(this.mark == 1){
            for(var i = 0; i<this.arr.length-1; i++){
                    for(var j = 0 ; j<this.arr.length-1; j++){
                        if(this.arr[j].code > this.arr[j+1].code){
                            this.cont.push(this.arr[j])
                            this.arr[j] = this.arr[j+1]
                            this.arr[j+1] = this.cont[0]
                            this.cont.pop();
                         }
                    }
                }
                 return this.arr
                .filter(arr => arr.code.toUpperCase().indexOf(this.searchName.toUpperCase()) !== -1)
        }
        else{
             return this.arr
                // .filter(arr => arr.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1)

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
    methods:{
        getRates:function(){
            this.$http.get(config.api + config.port + "int/origination",{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": "pkwzoculknvouuyjidmr"
                }
            }).then(function(response){
                this.arr = response.body.ret
                this.ratesCount = response.body.ret.length
            })
        },
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
          create_user:function(){
              
          },
          logout: function(){
                localStorage.removeItem('userUuid');
                localStorage.removeItem('userDevToken');
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('dev_name');
                this.$router.push("/login");
                location.reload("/login");
                
            },
           sortByName:function(){
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
















