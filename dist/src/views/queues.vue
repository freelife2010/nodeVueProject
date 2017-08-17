<template>
    <div id="queues">
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
                            <a  title="Logout" v-on:click="logout">
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
                        <li class="">
                            <router-link to="/" title="APP">
                                <em class="icon-list"></em>
                                <span>APP List</span>
                            </router-link>
                        </li>
                        <li class=" dashboard">
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

                        <!--<div class="pull-right label label-info">
                            0
                        </div>-->
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
                 {{ $route.params.id }}: Queues
                <small> View queue list </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-1 manage-btn">
                    <a data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-plus"></i>
                           </span>Create queue
                    </a>
                </div>
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="row"><div class="col-xs-6"><div class="dataTables_length" id="table_length"><label>Display <select name="table_length" aria-controls="table" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> Records per page</label></div></div><div class="col-xs-6"><div id="table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table"></label></div></div></div><table id="table" class="table table-striped table-hover  dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1057px;">
                        <thead>
                        <tr role="row">
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 45px;">ID</th>
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 136px;">Name</th>
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Client waiting prompt: activate to sort column ascending" style="width: 275px;">Client waiting prompt</th>
                            <th class="sorting_asc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Agent waiting prompt: activate to sort column descending" aria-sort="ascending" style="width: 276px;" v-on:click="sortByPrompt">Agent waiting prompt</th>
                            <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 215px;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr role="row" class="odd" v-for="que in filteredUsers">
                                <td>{{  }}</td>
                                <td>{{  }}</td>
                                <td>{{  }}</td>
                                <td class="sorting_1">{{  }}</td>
                                <td>
                                    <a href="" data-target="#myModal" data-toggle="modal" title="Edit" class="btn btn-success btn-sm">
                                        <span class="fa fa-pencil"></span></a>
                                
                                    <a href="" data-target="#myModal" data-toggle="modal" title="Remove" class="btn btn-danger btn-sm">
                                        <span class="fa fa-remove"></span></a>
                                
                                    <a href="" data-target="#myModal" data-toggle="modal" title="Upload/Replace" class="btn btn-info btn-sm">
                                        <span class="fa fa-upload"></span></a>
                                </td>
                            </tr>
                       </tbody>
                    </table>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Count of Queue - {{queue_count}}</div>
                            </div>
                            <div class="col-xs-6">
                                <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                                    <ul class="pagination">
                                        <li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous">
                                            <a href="#">Previous</a></li><li class="paginate_button active" aria-controls="table" tabindex="0"><a href="#">1</a>
                                            </li>
                                            <li class="paginate_button next disabled" aria-controls="table" tabindex="0" id="table_next">
                                                <a href="#">Next</a></li></ul></div></div></div></div>
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
    <!--Cretae Queues-------******-->

    <div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade in" style="display: none;">
        <div class="modal-dialog" id="modal-dialog" style="width:600px">
            <div class="modal-content">
<div class="modal-header" style="margin-bottom: 10px;">
    <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-hidden="true">×</button>
    <h4 class="modal-title">    <em class="icon-plus"></em>&nbsp; Create new queue
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
            <form enctype="multipart/form-data" accept-charset="utf-8" class="form-vertical" method="POST" >    <div style="margin-left: 15px">
        <input class="form-control" type="hidden" name="id" value="">        <input class="form-control" type="hidden" name="app_id" value="91">        <div class="form-group"><label for="queue_name" class="control-label">Queue name</label><input class="form-control" id="queue_name" type="text" name="queue_name"></div>        <div class="form-group"><label for="client_waiting_prompt" class="control-label">Client waiting prompt</label><input class="form-control" id="client_waiting_prompt" type="text" name="client_waiting_prompt"></div>	<div class="form-group"><label for="client_waiting_audio" class="control-label">Client waiting audio</label><input id="client_waiting_audio" type="file" name="client_waiting_audio"></div>        <div class="form-group"><label for="agent_waiting_prompt" class="control-label">Agent waiting prompt</label><input class="form-control" id="agent_waiting_prompt" type="text" name="agent_waiting_prompt"></div>	<div class="form-group"><label for="agent_waiting_audio" class="control-label">Agent waiting audio</label><input id="agent_waiting_audio" type="file" name="agent_waiting_audio"></div>        <input class="form-control" type="hidden" name="created_by" value="16">    </div>
    <div style="clear: both"></div>
    <br>
    <div class="pull-right">
        <div><button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="submit">Create</button> <button class="btn btn-lg btn-default" data-dismiss="modal" type="button">Close</button></div>        <input class="form-control" type="hidden" name="_token" value="rRI97W2CwMBNSs5vH1ARby7BvbmH5dLXiRdz1XbG">    </div></form>
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

import config from '../config.js'
 
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate);

// local storgs*****

var userId = localStorage.getItem("userUuid");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");

// var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };

export default {
       name: 'queues',
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
            queueList: [],
            mark:0,
            mark_two:2,
            cont: [],
            app_data: [],
            app_count: '',
            queue_count: ''
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
            for(var i = 0; i<this.queueList.length-1; i++){
                    for(var j = 0 ; j<this.queueList.length-1; j++){
                        if(this.queueList[j].amount > this.queueList[j+1].amount){
                            this.cont.push(this.queueList[j])
                            this.queueList[j] = this.queueList[j+1]
                            this.queueList[j+1] = this.cont[0]
                            this.cont.pop();
                         }
                    }
                }
                 return this.queueList
                .filter(queueList => queueList.currency.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
        }
        else{
             return this.queueList
                .filter(queueList => queueList.currency.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
        } 
            }
    },
      created:function(){
        this.getQueues();
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
          getQueues:function(){
              this.$http.get(config.api + config.port + '/voice/' + userId + '/queues',{
                  headers:{
                    "Content-Type": "application/json",
                    "Authorization": 'pkwzoculknvouuyjidmr'
                  }
              }).then(function(response){
                  this.queueList = response.body.ret
                  this.queue_count = response.body.ret.length
                  console.log(userId)
              })
          },
          createQueue:function(){
              var body_ques={

              }
              this.$http.post(config.api + config.port + 'int/freeswitch/queue',body_ques,{
                   headers:{
                    "Content-Type": "application/json",
                    "Authorization": 'pkwzoculknvouuyjidmr'
                  }
              }).then(function(response){
                  console.log(response)
              })
          },
        sortByPrompt:function(){
                if(this.mark_two == 2){
                     this.mark = 1
                     this.mark_two = 1
                }
                else{
                    this.mark = 0;
                    this.mark_two = 2
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
            saveId:function(uuid) {
            alert(localStorage.getItem('userId'))
                localStorage.removeItem('userId');
               
                localStorage.setItem('userId', uuid); 
            alert(localStorage.getItem('userId'));

        }
      }
}

</script>