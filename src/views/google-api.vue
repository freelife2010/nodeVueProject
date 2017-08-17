<template>
        <div class="wrapper" id = "google-api">
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
                            <!--<ul id="app_list" class="nav sidebar-subnav collapse">
                                <li class="sidebar-subnav-header">APP Dashboard</li>
                                
                                <li class=" ">
                                    <router-link to='/dashboard/Test App' title="Test App">
                                        <span>Test App</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to='/dashboard/devApp' title="devApp">
                                        <span>devApp</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to='/dashboard/Test App2' title="Test App2">
                                        <span>Test App2</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to='/dashboard/ND_App' title="ND_App">
                                        <span>ND_App</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to='/dashboard/SQL APP' title="SQL APP">
                                        <span>SQL APP</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to='/dashboard/yapp' title="yapp">
                                        <span>yapp</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <a href="http://portal.opentact.org/app/dashboard?app=191" title="dsadsafdsaf">
                                        <span>dsadsafdsaf</span>
                                    </a>
                                </li>
                            </ul>-->
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
                        <li class=" ">
                            <a href="#app_config" title="APP Config" data-toggle="collapse">
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

        <section  v-bind:class="{styleSec: openAside}">
              <div class="content-wrapper">

                <ul id="app_list" class="nav sidebar-subnav collapse app_list ">
                        <li class="sidebar-subnav-header">APP Dashboard</li>
                        
                        <li class="das_hov"  v-for="devs in app_data">
                            <!--<router-link to='/dashboard/Test App' title="Test App">
                                <span v-on:click="saveId(devs.uuid)">{{devs.name }}</span>
                            </router-link>-->
                            <a :href="'#/dashboard/' + devs.name" v-on:click="saveId(devs.uuid,dev.suspended)">
                                <span >{{ devs.name }}</span>
                            </a>
                        </li>
                  </ul>

                <div class="content-heading">
                    Google API Page
                    <small> Manage Google API </small>
                </div>
                            <div class="container-fluid">
                        <form action="/app-config/save-google-api-data" method="post">
            <input type="hidden" name="user_id" value="16">

            <div class="form-group">
                <label for="project_id" class="control-label">Project Id</label>
                <input class="form-control" id="project_id" type="text" name="project_id" value="">
            </div>

            <div class="form-group">
                <label for="private_key_id" class="control-label">Private Key Id</label>
                <input class="form-control" id="private_key_id" type="text" name="private_key_id" value="">
            </div>

            <div class="form-group">
                <label for="private_key" class="control-label">Private Key</label>
                <textarea class="form-control" id="private_key" name="private_key"></textarea>
            </div>

            <div class="form-group">
                <label for="client_email" class="control-label">Client Email</label>
                <input class="form-control" id="client_email" type="text" name="client_email" value="">
            </div>

            <div class="form-group">
                <label for="client_id" class="control-label">Client Id</label>
                <input class="form-control" id="client_id" type="text" name="client_id" value="">
            </div>

            <div class="form-group">
                <label for="client_x509_cert_url" class="control-label">Client x509 Certificate Id</label>
                <input class="form-control" id="client_x509_cert_url" type="text" name="client_x509_cert_url" value="">
            </div>

            <div class="pull-right">
                <div>
                    <button class="btn btn-lg btn-info" data-submit="ajax" id="task-submit-btn" type="submit">Save</button>
                </div>
            </div>
        </form>
                </div>
            </div>
        </section>
        <footer>
            <span>Opentact © 2015</span>
        </footer>
    </div> 
</template>

<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import VueRouter from 'vue-router'
    import config from '../config.js'

    var userId = localStorage.getItem("userUuid");
    var newAuthadmin = localStorage.getItem("newAuthadmin");
    export default{
        name: 'google-api',
        data(){
          return{
           app_count: '',
           app_data:[],
           checkId: null,
           openAside: true,
          }
      },
      created: function(){
           this.getData();
           this.checkId = localStorage.getItem("userUuid");
            if(this.checkId == null){
                this.$router.push("/login");
            }
            document.title = 'Manage Google API :: Developer UI';
        }, 
      mounted: function(){
            $('.dashboard').hover(function(){
                 $('#app_list').css('display','block')
            })
            $('#app_list').mouseleave(function(){
                $(this).css('display','none')
            })
        },
       methods:{

         logout: function(){
                localStorage.removeItem('userUuid');
                localStorage.removeItem('userDevToken');
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('dev_name');
                this.$router.push("/login");
                location.reload("/login");
                
            },
         getData: function(){
              this.$http.get(config.api + config.port + 'int/' + userId + '/apps',{
                  headers:{
                      "Content-Type": "application/json",
                      "Authorization": newAuthadmin
                  }
              }).then(function(response){
                  this.app_data = response.body.ret;                 
                  this.app_count =  response.body.ret.length;
                  
              })
          },
          saveId:function(uuid,status) {
                localStorage.removeItem('userId');
                if( localStorage.getItem("appStatus") != ''){
                    localStorage.removeItem('appStatus');
                }
                localStorage.setItem('appStatus', status); 
                localStorage.setItem('userId', uuid); 

        }
       }
  }
</script>