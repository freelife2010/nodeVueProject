
<template>
<div id="table_app">
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
                            <a  class="ceil_bar_hover" title="Logout" v-on:click="logout">
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
                                        <span class="user-block-role"></span>
                                    </div>
                                </div>
                            </div>
                        </li>                
                        <!-- END user info-->
                        <!-- Iterates over all sidebar items-->
                        <li class="nav-heading ">
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
                    </ul>
                    <!-- END sidebar nav-->
                </nav>
            </div>
            <!-- END Sidebar (left)-->
        </aside>
        <section class="sec">
             <div class="content-wrapper">
                  <ul id="app_list" class="nav sidebar-subnav collapse app_list ">
                        <li class="sidebar-subnav-header">APP Dashboard</li>
                        
                        <li class="das_hov"  v-for="devs in app_data">
                            <router-link to='/dashboard/Test App' title="Test App">
                                <span>{{devs.name }}</span>
                            </router-link>
                        </li>
                  </ul>
                <div class="content-heading">
                    APP List
                    <small> Manage APP </small>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-md-1 manage-btn" id="create_app_button">
                                    <a href="" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info"
                                    >
                                    <span class="btn-label">
                                       <i class="fa fa-plus"></i>
                                   </span>Create APP
                               </a>
                           </div>
                       </div>
                       <br/>
                       <div class="panel panel-default"  id="table_app">
                            <div class="panel-body">
                                <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <div class="dataTables_length" id="table_length">
                                                <!-- <label>Display 
                                                    <select name="table_length" aria-controls="table" class="form-control input-sm"><option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select> 
                                                Records per page</label> -->
                                            </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div id="table_filter" class="dataTables_filter">
                                                <label>Search by Name:
                                                <input  type="text" v-model="searchNname"  autofocus class="form-control input-sm">
                                                </label>
                

                                                <!-- <ul v-for="item in filteredUsers">
                                                    <li  >{{item.name}}</li>
                                                </ul> -->
                                            </div>
                                        </div>
                                    </div>
                                    <table id="table" class="table table-striped table-hover cursor-pointer dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1291px;">
                                        <thead>
                                            <tr role="row">
                                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 82px;">ID</th>
                                                <th class="sorting " id="sortBy-name" v-bind:class="{ sorting_desc: sortName }" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 156px;" v-on:click="sortByName">Name</th>
                                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Users: activate to sort column ascending" aria-sort="descending" style="width: 92px;">Users</th>
                                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Daily active: activate to sort column ascending" style="width: 166px;" v-on:click="gago++">Description</th>
                                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Weekly active: activate to sort column ascending" style="width: 193px;">Weekly active</th>
                                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Monthly active: activate to sort column ascending" style="width: 206px;">Monthly active</th>
                                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 103px;">Status</th>
                                                <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 117px;">Actions</th>
                                            </tr>
                                        </thead>
<!-- v-else-if="searchNname == '' "   v-if="searchNname == item.name"  -->
                                        <tbody>
                                            <tr id="27" role="row" class="odd" 
                                            v-for="item in app_data" >
                                                <td >{{item.uuid}}</td>
                                                <td >{{item.name}}</td>
                                                <td >{{item.user_name}}</td>
                                                <td class="sorting_1" >{{item.description}}</td>
                                                <td ></td>
                                                <td ></td>
                                                <td ><em class="fa fa-check"></em></td>
                                                <td >
                                                    <a href="#myEditModal" id="edit_app_button" data-target="#myEditModal" data-toggle="modal"  title="Edit" class="btn btn-success btn-sm" v-on:click="edit_app(item.uuid)">
                                                        <span class="fa fa-pencil"></span>
                                                    </a>
                                                    <a class="delete" v-on:click="deleteApp(item.uuid)">
                                                        <span class="fa fa-remove"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Count of Apps - {{app_count}}</div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                                            <!-- <ul class="pagination">
                                                <li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous">
                                                    <a href="#">Previous</a>
                                                </li>
                                                <li class="paginate_button active" aria-controls="table" tabindex="0">
                                                    <a href="#">1</a>
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

    <!--Create Modal-->
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
                <h4 class="modal-title"><em class="icon-plus"></em>&nbsp; Create new APP

                </h4>
            </div>
            <div class="modal-body">
                <div id="loader" class="loader-demo">
                    <div class="ball-scale-multiple block-center">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <form id="create_app_form" class="form-vertical" method="POST"  @submit.prevent="createApp">
                    <div style="margin-left: 15px">
                        <input class="form-control" type="hidden" name="id" value="">       
                        <div class="form-group">
                           <label for="name" class="control-label">Name</label> 
                           <input class="form-control" id="name" type="text" name="name" v-model="name">
                        </div>       
                        <div class="form-group">
                            <label for="description" class="control-label">Description</label>
                            <input class="form-control" id="description" type="text" name="description" v-model="description">
                        </div>       
                        <div class="form-group">
                            <label for="status" class="control-label">Status</label>
                            <select class="form-control" id="status" name="status">
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>    
                    </div>
                                <!--  <div style="clear: both"></div> -->
                    <br>
                <div class="pull-right">
                    <div>
                        <button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="button" v-on:click="create_app">Create</button> 
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
<!--Create Modal-->


<!--Edit Modal-->
<div id="myEditModal" tabindex="-1" role="dialog" aria-labelledby="myeditModalLabel" aria-hidden="true" class="modal fade in">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" style="margin-bottom: 10px;">
                <button type="button" id="close-edit-modal" class="close"  data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">  
                    <em class="icon-plus"></em>&nbsp; Edit APP
                </h4>
            </div>
            <div class="hide preloader" style="text-align: center; margin: 10px;">
                <div id="edit_loader" class="loader-demo">
                    <div class="ball-scale-multiple block-center">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="modal-body" style="overflow: auto">
                <form accept-charset="utf-8" id="edit_app_form" class="form-vertical" v-for="item in app_data" v-if="item.uuid == app_uuid">    
                    <div style="margin-left: 15px" >
                        <input class="form-control" type="hidden" name="id" value="27">     
                            <div class="form-group">
                                <label for="name_edit" class="control-label">Name</label>
                                <input class="form-control" id="name_edit" type="text" name="name_edit" value="" :value="item.name">
                            </div>     
                            <div class="form-group">
                                <label for="description_edit" class="control-label">Description</label>
                                <input class="form-control" id="description_edit" type="text" name="description_edit" :value="item.description">
                            </div>      
                            <div class="form-group">
                                <label for="status_edit" class="control-label">Status</label>
                                <select class="form-control" id="status_edit" name="status_edit">
                                    <option value="1" selected="selected">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>    
                    </div>
                    <div style="clear: both"></div>
                        <br>
                    <div class="pull-right">
                        <div>
                            <button class="btn btn-lg btn-info"  id="task-submit-btn" type="button" v-on:click="edit_save(item.uuid)">Save</button> 
                            <button id="edit-app" class="btn btn-lg btn-default" data-dismiss="modal" type="button">Close</button>
                        </div>      
                        <input class="form-control" type="hidden" name="_token" value="XXs8WeGUdPSwBbJEpekWpRY0rLchGZadwCyYqlyV"> 
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!--Edit Modal-->

    </div>
</template>

<script type="text/javascript">

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
console.log(userId);
var userDevToken = localStorage.getItem("userDevToken");
var newAuthadmin = localStorage.getItem("newAuthadmin");
var developer_name = localStorage.getItem("dev_name");
var devCount = localStorage.getItem("devCount");

/* Vue.filter('searchByName', function(value){
return
 });
*/
     export default{
      name: 'table_app',
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
        };
      },
       data() {
        return {
         openBlock: '',
         active: '',
         name: '',
         description: '',
         dev_token: "",
         tech_prefix: "",
         app_data: [],
         app_data_new: [],
         app_count:null,
         name_edit: '',
         description_edit: '',
         app_uuid: '',
         searchNname: '',
         cont: [],
         mark_two :2,
         mark:0,
         sortName: false,
    }
  },
  watch: {
    'searchNname': function(search) {
        console.log(search)
        // do my stuff
        // this.app_data.filter(function(val){
        //     return val == 'eee';
        // });
       
    }
},
	computed: {

        // changeinput() {
        //     console.log(this.searchNname)
        // }
        
        // filteredUsers() {
        //        if(this.mark == 1){
        //     for(var i = 0; i<this.app_data.length-1; i++){
        //             for(var j = 0 ; j<this.app_data.length-1; j++){
        //                 if(this.app_data[j].name.toLowerCase() > this.app_data[j+1].name.toLowerCase()){
        //                     this.cont.push(this.app_data[j])
        //                     this.app_data[j] = this.app_data[j+1]
        //                     this.app_data[j+1] = this.cont[0]
        //                     this.cont.pop();
        //                  }
        //             }
        //         }
        //          return this.app_data
        //         .filter(app_data => app_data.name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
        // }
        // else{
        //      return this.app_data
        //         .filter(app_data => app_data.name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
        // } 
        //     }
	},

    mounted: function(){
     
            document.getElementById('create_app_form').style.display = 'none';
            document.getElementById('loader').style.display = 'block';


            /*Create App*/
            $('#create_app_button').on('click', function() {
                setTimeout("$('#loader').css('display', 'none'); $('#create_app_form').css('display', 'block')",
                    1000)
            });
            $('#close-modal').click(function() {
                document.getElementById('loader').style.display = 'block';
                document.getElementById('create_app_form').style.display = 'none';
            });  
            $('#close-create-modal').click(function() {
                document.getElementById('loader').style.display = 'block';
                document.getElementById('create_app_form').style.display = 'none';
            });

            // open Dashboard------------***

               
            $('.dashboard').mouseover(function(){
                $('#app_list').css('display','block')
                $('#app_list').css('transition','all 1sc ease')
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
           this.getDataRes();
        },

  methods: {
      
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
                    console.log(this.app_data)
                })
          },
          getDataRes: function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": 'pkwzoculknvouuyjidmr'
                  }
              })
              .then(response => {
                  this.app_data_new = response.body.ret;
                    console.log(response)
                    console.log(this.app_data_new)
                })
          },

          create_app:function(){
           
            var CreateData = {
                name: this.name,
                description: this.description,
                dev_uuid: userId,
                dev_token: userDevToken
            }
            console.log(CreateData);

        this.$http.post(config.api + config.port + 'int/app', CreateData, {
             headers: {
                "Authorization": 'pkwzoculknvouuyjidmr',
               'Content-Type': 'application/json'
             }
        }).then(function (response) {
            console.log(response)
                if (response.body.ret != "" || response.body.ret != false) {
                    alert('An app was created successfully');
                    $("#close-create-modal").trigger('click');
                    this.name = '';
                    this.description = '';
                   this.getData(); 
                }
                })         
         },
        edit_app: function(uuid){ 
                this.$http.get(config.api + config.port + 'app/' + uuid)
                    .then(response => {
                        this.name_edit = response.body.ret.name;
                        this.description_edit = response.body.ret.description;
                        this.app_uuid = uuid;
                    });
            },
        edit_save: function(app_uuid){
                var editData = {
                    name: $('#name_edit').val(),
                    description: $('#description_edit').val(),
                    app_uuid: app_uuid,
                    tech_prefix: "",
                    XiaomiAPPSecret: "",
                    HuaweiAPSecret: "",
                    HuaweiAPPSecret: "",
                    APNKey: ""
                }

                this.$http.patch(config.api + config.port + 'int/app', editData,{
                    headers: {
                       "Authorization": 'pkwzoculknvouuyjidmr',
                       'Content-Type': 'application/json'
                     }
                }).then(function(response){
                    if (response.body.error_message == '') {
                        $("#edit-app").trigger('click');
                        this.getData();
                    }
                })
            },
            deleteApp:function(delete_app){
                var deleteBody = {
                    app_uuid: delete_app
                };
                this.$http.delete(config.api + config.port + "int/app",deleteBody, {
                    headers:{
                        "Authorization": 'pkwzoculknvouuyjidmr',       
                        'Content-Type': 'application/json'
                    }
                }).then(function(response){
                    console.log(response)
                    console.log(delete_app)
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
            sortByName:function(){
                if (this.sortName === true){
                    this.sortName = false
                    this.app_data.reverse()
                }else{
                    this.sortName = true
                    //  $('#sortBy-name').addClass('sorting_desc');
                    function compare(a, b) {
                        if (a.name < b.name){
                            return -1                         
                        }
                        if (a.name > b.name){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.app_data.sort(compare)
                }
            },
            changeItem(rowId, event) {
                  
                    console.log(event.target.value)
            }

// ------------Sorts--------******
            // sortName:function(){
            //     alert('af')
            //      for(var i = 0; i<this.app_data.length-1; i++){
            //         for(var j = 0 ; j<this.app_data.length-1; j++){
            //             if(this.app_data[j].name.substr(0,2).toLowerCase() > this.app_data[j+1].name.substr(0,2).toLowerCase()){
            //                 this.cont.push(this.app_data[j])
            //                 this.app_data[j] = this.app_data[j+1]
            //                 this.app_data[j+1] = this.cont[0]
            //                 this.cont.pop();
            //              }
            //         }
            //     }
            //     console.log(this.app_data)
            //     return this.app_data
            //     // .filter(app_data => app_data.name.toUpperCase().indexOf(this.searchNname.toUpperCase()) !== -1)
            //     console.log(this.app_data)
            // }
       }
    }

 
</script>
