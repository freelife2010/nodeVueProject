<template>
<div id="ratesContent">
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
                    <a v-on:click="logout()" class="ceil_bar_hover" title="Log out">
                        <em class="icon-logout"></em>
                    </a>
                </li>
                <!-- END lock screen-->
            </ul>
                    </div>
    </nav>
    <!-- END Top Navbar-->
</header>            <aside class="aside">
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
                <a href="" data-target="#myModal" data-toggle="modal">
                    <div class="user-block-status">
                            <img src="" alt="Avatar" title="Click to edit" width="60" height="60" class="img-thumbnail img-circle">
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
                            <a href="#rateTo" title="Manage costs" data-toggle="collapse">
                                <em class="icon-users"></em>
                                <span>Rates</span>
                            </a>
                            <ul id="rateTo" class="nav sidebar-subnav collapse">
                                <li class=" ">
                                    <router-link to="/origin_rates">
                                                <em class="fa fa-cc"></em>
                                                <span>Origination Rate</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to="">
                                            <em class="fa fa-cc"></em>
                                            <span>Termination rate</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                <li class=" ">
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
</aside>            <section>
        <div class="content-wrapper">
            <div class="content-heading">
                Termination rates
                <small> Manage Termination rates </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer">
                        <!--<div class="dt-buttons">
                            <a class="dt-button btn btn-primary" tabindex="0" aria-controls="table">
                                <span>Export to CSV</span>
                            </a>
                        </div>-->
                        <div id="table_filter" class="dataTables_filter">
                            <label>Search:<input v-model="searchNname" autofocus class="form-control input-sm" placeholder="" aria-controls="table"></label>
                        </div>
                        <div id="table_processing" class="dataTables_processing" style="display: none;">Processing...</div>
                        <table id="table" class="table table-striped table-hover  dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1291px;">
                        <thead>
                        <tr role="row">
                            <th class="sorting"  v-bind:class="{ sorting_desc: sortCountry }" v-on:click="sortByCountry()" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Country: activate to sort column ascending" style="width: 215px;">Country</th>
                            <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Destination: activate to sort column ascending" style="width: 641px;">Destination</th>
                            <th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Code: deactive to sort column ascending" style="width: 88px;" v-on:click="sortByCode">Code</th>
                            <th class="" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-sort="descending" aria-label="Opentact Sell Rate: activate to sort column ascending" style="width: 259px;">Opentact Sell Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr role="row" class="odd" v-for="listRates in filteredUsers">
                                <td>{{ listRates.country }}</td>
                                <td>{{  }}</td>
                                <td>{{ listRates.code }}</td>
                                <td class="sorting_1">
                                    <div class="form-group">
                                        <input class="form-control" step="0.01" style="width: 80px" v-on:change="changeNumber" :value="listRates.rate" id="ratesEdit" type="number" name="rateName">
                                    </div>
                                    <a  title="Change opentact rate" class="btn btn-success add_rate_btn btn-sm" v-on:click="changeRate">
                                        <span class="fa fa-check"> </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table><div class="dataTables_info" id="table_info" role="status" aria-live="polite">Count of Termination Rate - {{ratesCount}}</div><div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                   <!--  <ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous"><a href="#">Previous</a></li><li class="paginate_button active" aria-controls="table" tabindex="0"><a href="#">1</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">2</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">3</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">4</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">5</a></li><li class="paginate_button disabled" aria-controls="table" tabindex="0" id="table_ellipsis"><a href="#">…</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">4152</a></li><li class="paginate_button next" aria-controls="table" tabindex="0" id="table_next"><a href="#">Next</a></li>
                    </ul> -->
                    </div></div>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" name="_token" value="7JEuNwetDKccbS2b1Wk676gHcTWztb4JWnMJi09A">            </div>
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
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import axios from 'axios'

import config from '../../config.js'

 
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate);

// local storge's***

var newAuthadmin = localStorage.getItem("newAuthadmin");

// var config = {
//   api: 'http://149.56.96.236',
//   port: ':8002/'
// };

    export default {
       name: 'ratesContent',
       data() {  
          return {
             ratesArray: [],
             otherNumber: "",
             searchNname: '',
             ratesCount: '',
             mark:0,
             mark_two:2,
             cont: [],
             sortCountry: false
          } 
    },
    
    computed: {
         filteredUsers() {
               if(this.mark == 1){
            for(var i = 0; i<this.ratesArray.length-1; i++){
                    for(var j = 0 ; j<this.ratesArray.length-1; j++){
                        if(this.ratesArray[j].code > this.ratesArray[j+1].code){
                            this.cont.push(this.ratesArray[j])
                            this.ratesArray[j] = this.ratesArray[j+1]
                            this.ratesArray[j+1] = this.cont[0]
                            this.cont.pop();
                         }
                    }
                }
                 return this.ratesArray
                .filter(ratesArray => ratesArray.code.indexOf(this.searchNname) !== -1)
        }
        else{
             return this.ratesArray
                .filter(ratesArray => ratesArray.code.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
        } 
            }
    },
    created:function(){
        this.getRates();
    },
    methods:{
        getRates:function(){
            this.$http.get(config.api + config.port + "int/termination",{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": "pkwzoculknvouuyjidmr"
                }
            }).then(function(response){
                console.log(response);
                this.ratesArray = response.body.ret
                this.ratesCount = response.body.ret.length
            })
        },
        changeNumber:function(){
            this.otherNumber =  $('#ratesEdit').val()
            console.log(this.otherNumber)
        },
        changeRate:function(codeNumber){
            var rateBody = {
               rate: this.otherNumber
            };
            this.$http.patch(config.api + config.port + "int/termination",rateBody,{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": 'pkwzoculknvouuyjidmr'
                }
            }).then(function(response){
                console.log(response);
                console.log(rateBody);
                this.getRates();
            })
        },
        logout:function(){
                localStorage.removeItem('newAuthadmin');
				localStorage.removeItem('DevId');
				localStorage.removeItem('app_uuid');				
                this.$router.push("/login");
            },
        sortByCode:function(){
                if(this.mark_two == 2){
                     this.mark = 1
                     this.mark_two = 1
                }
                else{
                    this.mark = 0;
                    this.mark_two = 2
                }
            },
        sortByCountry: function(){
            if (this.sortCountry === true){
                    this.sortCountry = false;
                    this.filteredUsers.reverse();
                }else{
                    this.sortCountry = true;
                      function compare(a, b) {
                        var nameA = a.name.toUpperCase(); 
                        var nameB = b.name.toUpperCase();
                        if (nameA < nameB){
                            return -1                         
                        }
                        if (nameA > nameB){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.filteredUsers.sort(compare)
                }
        }
    }
}





</script>