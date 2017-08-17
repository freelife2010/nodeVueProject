<template>
    <div id="cost_did">
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
                            <a  title="Log out" v-on:click="logout">
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
                                    <router-link to="/authorization">
                                         <span>Authorization e-mail</span>
                                    </router-link>
                                </li>
                                <li class=" ">
                                    <router-link to="/e_mail_confirm">
                                         <span>Confirmation e-mail</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>-->
                        <!--<li class=" ">
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
                        <li class=" active">
                            <a href="#costs" title="Manage costs" data-toggle="collapse">
                                <em class="fa fa-money"></em>
                                <span>Costs</span>
                            </a>
                            <ul id="costs" class="nav sidebar-subnav collapse">
                                <li class=" active">
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
        </aside>            
        <section  v-bind:class="{styleSec: openAside}">
                <div class="content-wrapper">
                    <div class="content-heading">
                        DID cost
                        <small> Modify DID cost </small>
                    </div>
                                <div class="container-fluid">
                            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <a href="/costs/did-create" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                            <span class="btn-label">
                                   <i class="fa fa-plus"></i>
                               </span>Set new cost
                        </a>
                        <a href="/costs/did-default" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-green">
                            <span class="btn-label">
                                   <i class="fa fa-tag"></i>
                               </span>Edit default cost
                        </a>
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
                                                </select> Records per page
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div id="table_filter" class="dataTables_filter">
                                            <label>Search by Country:<input type="search"  v-model="searchNname" class="form-control input-sm" placeholder="" aria-controls="table"></label>
                                        </div>
                                    </div>
                                </div>
                                <table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1308px;">
                                <thead>
                                <tr role="row">
                                    <th class="sorting"  v-bind:class="{ sorting_desc: sortCode }" v-on:click="sortByCountry" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Country: activate to sort column ascending" style="width: 96px;">Country</th>
                                    <th class="sorting"  v-bind:class="{ sorting_desc: sortState }" v-on:click="sortByState" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="State: activate to sort column ascending" style="width: 68px;">State</th>
                                    <th class="sorting"  tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Rate Center: activate to sort column ascending" aria-sort="descending" style="width: 133px;">Rate Center</th>
                                    <th class="sorting"  v-bind:class="{ sorting_desc: sortPerM }" v-on:click="sortByPerMinute" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Value (USD) - Per Minute: activate to sort column ascending" style="width: 258px;">Value (USD) - Per Minute</th>
                                    <th class="sorting"  v-bind:class="{ sorting_desc: sortOnTime }" v-on:click="sortByTime" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Value (USD) - One Time: activate to sort column ascending" style="width: 246px;">Value (USD) - One Time</th>
                                    <th class="sorting"  v-bind:class="{ sorting_desc: sortMonth }" v-on:click="sortByMonth" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Value (USD) - Monthly: activate to sort column ascending" style="width: 233px;">Value (USD) - Monthly</th>
                                    <th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 120px;">Actions</th></tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd" v-for="did in paginate">
                                        <td>{{did.country_name}}</td>
                                        <td>{{did.country_iso}}</td>
                                        <td class="sorting_1"></td>
                                        <td>{{did.per_unit_cost}}</td>
                                        <td>{{did.one_time_cost}}</td>
                                        <td>{{did.monthly_cost}}</td>
                                        <td>
                                            <a  id="edit_app_button"  data-toggle="modal"  title="Edit" class="btn btn-success btn-sm" >
                                                <span class="fa fa-pencil"></span>
                                            </a>
                                            <a class="delete" >
                                                <span class="fa fa-remove"></span>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                            </table>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing {{countStart}} to {{countShow}} of {{didListLength}} entries</div>
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
                                            <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || didListLength <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
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
    </div>
</template>
<script>

    import config from '../../config.js'

var newAuthadmin = localStorage.getItem("newAuthadmin");

    export default{
        name: 'cost_did',
        data(){
            return{
                checkAdmin: null,
                didListLength: null,
                didList: [],
                currentPage: 1,
                itemsPerPage: 10,
                startIndex: 0,
                endIndex: 10,
                countShow: 10,
                activeDeveloper: '',
                developersCount: 10,
                appDataCount: 0,
                oldpageNumber: null,
                countStart: 1,
                checkSearch: true,
                searchNname: '',
                didSearchArrLen: null,
                openAside: true,
                sortCode: false,
                sortState: false,
                sortPerM: false,
                sortOnTime: false,
                sortMonth: false,
            }
        },
        created: function(){
            this.getDidList();
            this.checkAdmin = localStorage.getItem("adminCheckCode");
            if(this.checkAdmin == 'adminCheckIsSuccess777**' ){

            }
            else{
                this.$router.push('/login')
            }
            document.title = 'DID Cost :: Admin UI';
        },
          computed: {
            totalPages: function() {
                if(this.searchNname == ''){
                    
                    if (this.endIndex >= this.didListLength){
                        this.countShow = this.didListLength;
                    }
                    else{
                            this.countShow = this.endIndex;
                    }
                    this.itemsPerPage = this.developersCount;
                    return Math.ceil(this.didListLength / this.itemsPerPage);
                }
                else{
                    if (this.endIndex >= this.didSearchArrLen){
                        this.countShow = this.didSearchArrLen;
                    }
                    else{
                        this.countShow = this.endIndex;
                    }
                    this.itemsPerPage = this.developersCount;
                    return Math.ceil(this.didSearchArrLen / this.itemsPerPage);
                }
            },
            paginate: function() {
                if(this.searchNname != ''){
                    var pagenumber = 1;
                    if(pagenumber != this.oldpageNumber && this.checkSearch === true || this.oldpageNumber == 1){
                        this.setPage(1);
                        this.checkSearch = false
                    }
                    var didSearchArr = this.didList
                    .filter(didList => didList.country_name.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)

                    this.didSearchArrLen = didSearchArr.length;
                    this.countShow = this.didSearchArrLen;
                    this.didListLength = this.didSearchArrLen;

                    if(this.didSearchArrLen >= this.developersCount){
                        this.countShow = this.developersCount;
                        this.didListLength = this.didSearchArrLen
                    }
                    else{
                        this.countShow = this.didSearchArrLen;
                        this.didListLength = this.didSearchArr;
                    }

                    if(this.didSearchArrLen == 0 || this.didListLength == 0){
                        this.countStart = 0;
                    }
                    return didSearchArr.slice(this.startIndex , this.endIndex );
                }
                else{
                    if(this.checkSearch === false ){
                        this.setPage(1);
                        this.checkSearch = true;
                        this.countStart = 1;
                    }
                    var array2 = this.didList.length;
                    this.countShow = array2;
                    this.didListLength = array2;
                    return this.didList.slice(this.startIndex , this.endIndex)
                }
            }
        },
         methods:{
             changeHandler: function() {

                if (this.endIndex >= this.didListLength){
                    this.countShow = this.didListLength;
                }
                else{
                        this.countShow = this.endIndex;
                }
                if(this.developersCount >= this.didListLength){
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
                    if (this.endIndex >= this.didListLength){
                            this.countShow = this.didListLength;
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


                if (this.endIndex >= this.didListLength){
                    this.countShow = this.didListLength;
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
                if (this.endIndex >= this.didListLength){

                        this.countShow = this.didListLength;
                }else{
                    this.countShow = this.endIndex;
                }
            },
             getDidList:function(){
                this.$http.get(config.api + config.port + 'voip/all_countries',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': newAuthadmin
                    }
                }).then(function(response){
                    console.log(response);
                    this.didList = response.body.ret;
                    this.didListLength = response.body.ret.length;
                    if(this.didListLength == 0){
                        this.countStart = 0;
                    }
                    else{
                        this.countStart = 1;
                    }
                })
             },
              sortByCountry: function(){
                if (this.sortCode === true){
                        this.sortCode = false;
                        this.didList.reverse();
                    }else{
                        this.sortCode = true;
                        function compare(a, b) {
                            var nameA = a.country_name.toUpperCase(); 
                            var nameB = b.country_name.toUpperCase();
                            if (nameA < nameB){
                                return -1                         
                            }
                            if (nameA > nameB){
                                return 1                        
                            }
                            // return 0
                        } 
                        this.didList.sort(compare)
                    }
            },
             sortByState: function(){
                if (this.sortState === true){
                    this.sortState = false;
                    this.didList.reverse();
                }else{
                    this.sortState = true;
                    function compare(a, b) {
                        var nameA = a.country_iso.toUpperCase(); 
                        var nameB = b.country_iso.toUpperCase();
                        if (nameA < nameB){
                            return -1                         
                        }
                        if (nameA > nameB){
                            return 1                        
                        }
                        // return 0
                    } 
                    this.didList.sort(compare)
                }
            },
            sortByPerMinute: function(){
                if (this.sortPerM === true){
                    this.sortPerM = false;
                    this.didList.reverse();
                }else{
                    this.sortPerM = true;
                    function compare(a, b) {
                        var A = a.per_unit_cost; 
                        var B = b.per_unit_cost;
                        if (A < B){
                            return -1                         
                        }
                        if (A > B){
                            return 1                        
                        }
                    } 
                    this.didList.sort(compare)
                }
            },
            sortByTime: function(){
                if (this.sortOnTime === true){
                    this.sortOnTime = false;
                    this.didList.reverse();
                }else{
                    this.sortOnTime = true;
                    function compare(a, b) {
                        var A = a.one_time_cost; 
                        var B = b.one_time_cost;
                        if (A < B){
                            return -1;            
                        }
                        if (A > B){
                            return 1 ;                       
                        }
                    } 
                    this.didList.sort(compare)
                }
            },
            sortByMonth: function(){
                if (this.sortMonth === true){
                    this.sortMonth = false;
                    this.didList.reverse();
                }else{
                    this.sortMonth = true;
                    function compare(a, b) {
                        var A = a.monthly_cost; 
                        var B = b.monthly_cost;
                        if (A < B){
                            return -1;            
                        }
                        if (A > B){
                            return 1 ;                       
                        }
                    } 
                    this.didList.sort(compare)
                }
            },

            logout:function(){
                localStorage.removeItem('newAuthadmin');
                localStorage.removeItem('userUuid');
                localStorage.removeItem('dev_name');
                localStorage.removeItem('adminCheckCode');				
                this.$router.push("/login");
            },
        }
    }
</script>