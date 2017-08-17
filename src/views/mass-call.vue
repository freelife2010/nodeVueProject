<template>
    <div id="massCall">
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
                            <a href="javascript:void(0)">
                               Balance: {{userBalance}}$                        
                            </a>
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
                        </li>
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

        <section  v-bind:class="{styleSec: openAside}">
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
            <div class="content-wrapper">
            <div class="content-heading">
                APP List
                <small> Mass Call API </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-md-1 manage-btn">
                    <a href="http://portal.opentact.org/app/create" data-target="#myModal" data-toggle="modal" class="btn btn-labeled btn-info">
                        <span class="btn-label">
                               <i class="fa fa-plus"></i>
                           </span>Create APP
                    </a>
                </div>
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="row"><div class="col-xs-6"><div class="dataTables_length" id="table_length"><label>Display <select name="table_length" aria-controls="table" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> Records per page</label></div></div><div class="col-xs-6"><div id="table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table"></label></div></div></div><table id="table" class="table table-striped table-hover cursor-pointer dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1057px;">
                        <thead>
                        <tr role="row"><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 145px;">ID</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 263px;">Name</th><th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Users: activate to sort column ascending" aria-sort="descending" style="width: 162px;">Users</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 178px;">Status</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 199px;">Actions</th></tr>
                        </thead>
                        <tbody>
                            <tr id="27" role="row" class="odd">
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing  to  of  entries</div>
                            </div>
                        <div class="col-xs-6">
                        <div class="dataTables_paginate paging_simple_numbers" id="table_paginate">
                            <!--<ul class="pagination">
                                <li class="paginate_button previous " v-bind:class="{disabled: currentPage === 1 || currentPage === 0}" aria-controls="table" tabindex="0" id="table_previous">
                                    <a v-on:click="previousPage()">Previous</a>
                                </li>
                                <li  class="paginate_button active" aria-controls="table" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                                    <a  class="newPaging" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber || pageNumber === 0, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                                </li>
                                <li class="paginate_button next"  v-bind:class="{disabled: currentPage == totalPages || app_count <= developersCount}"  aria-controls="table" tabindex="0" id="table_next">
                                    <a v-on:click="nextPage()" >Next</a>
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
</div>
</template>

<script>

    var userId = localStorage.getItem("userUuid");
    var newAuthadmin = localStorage.getItem("newAuthadmin");
    var developer_name = localStorage.getItem("dev_name");

import config from '../config.js'

    export default{
        name:'massCall',
        data(){
            return{
                itemsPerPage: 10,
                startIndex: 0,
                endIndex: 10,
                developersCount: 10,
                countShow: 10,
                currentPage: 1,
                searchValue: '',
                app_data: [],
                app_count: null,
                userBalance: 0,
                checkId: null,
                openAside: true,
            }
        },
        mounted:function(){
            $('.dashboard').hover(function(){
                $('#app_list').css('display','block')
            })
            $('#app_list').mouseleave(function(){
                $(this).css('display','none')
            })
        },
        created:function(){
            this.getUserInfo();
            this.getData();
            this.checkId = localStorage.getItem("userUuid");
            if(this.checkId == null){
                this.$router.push("/login");
            }
            document.title = 'Mass Call API :: Developer UI';
        },
        computed: {
            // searchResult: function() {
            //     if(this.searchValue != ''){
            //         return this.payments
            //             .filter(payments => payments.currency.toLowerCase().indexOf(this.searchNname.toLowerCase()) !== -1)
            //     }else{
            //         return this.payments
            //     }
            //     console.log(this.payments)
            // 
            // },
            // totalPages: function() {
            //     if (this.endIndex >= this.payment_count){
            //         this.countShow = this.payment_count;
            //     }
            //     else{
            //             this.countShow = this.endIndex;
            //     }
            //         this.itemsPerPage = this.developersCount;
            //     return Math.ceil(this.payment_count / this.itemsPerPage)
            // },
            // paginate: function() {
            //     return this.payments.slice(this.startIndex, this.endIndex )
            // },
        },
        methods:{
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
                saveId:function(uuid) {
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