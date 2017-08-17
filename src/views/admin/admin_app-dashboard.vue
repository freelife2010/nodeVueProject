<template>
<div id="app_dash">
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
                    <a href="http://portal.opentact.org/auth/logout" title="Log out">
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
                <li class=" ">
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
                </li>
                <li class=" ">
                    <router-link to="/system">
                                <em class="icon-docs"></em>
                                <span>System logs</span>
                    </router-link>
                </li>
                <li class=" active">
                    <router-link to="/admin">
                                <em class="icon-users"></em>
                                <span>Modification log</span>
                    </router-link>
                </li>
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
                                <span>DID Local</span>
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
                    <router-link to="/rates">
                        <em class="icon-users"></em>
                        <span>Rates</span>
                    </router-link>
                </li>
                <li class=" ">
                    <router-link to="/admin/payments">
                        <em class="fa fa-credit-card"></em>
                        <span>Payments</span>
                    </router-link>
                </li>
                <li class=" ">
                    <router-link to="/config">
                                <em class="fa fa-cog"></em>
                                <span>Config</span>
                    </router-link>
                </li>
            </ul>
            <!-- END sidebar nav-->
        </nav>
    </div>
    <!-- END Sidebar (left)-->
</aside><div class="dropdown-backdrop"></div>            <section>
        <div class="content-wrapper">
            <div class="content-heading">
                Modification log
                <small> See history </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <div class="row">
            </div>
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="row"><div class="col-xs-6"><div class="dataTables_length" id="table_length"><label>Display <select name="table_length" aria-controls="table" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> Records per page</label></div></div><div class="col-xs-6"><div id="table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table"></label></div></div></div><table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1291px;">
                        <thead>
                        <tr class="th-revision" role="row"><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 16px;">ID</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Entity: activate to sort column ascending" style="width: 42px;">Entity</th><th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Entity ID: activate to sort column ascending" style="width: 59px;" aria-sort="descending">Entity ID</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Modified by: activate to sort column ascending" style="width: 261px;">Modified by</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Field: activate to sort column ascending" style="width: 117px;">Field</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Old value: activate to sort column ascending" style="width: 286px;">Old value</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="New value: activate to sort column ascending" style="width: 155px;">New value</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style="width: 115px;">Date</th></tr>
                        </thead>
                        <tbody><tr role="row" class="odd"><td>198</td><td>users</td><td class="sorting_1">372</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>phone</td><td>+123(456) 212-35-45</td><td>+861(824) 240-11-98</td><td>2016-08-10 21:52:11</td></tr><tr role="row" class="even"><td>199</td><td>users</td><td class="sorting_1">372</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>allow_outgoing_call</td><td>1</td><td></td><td>2016-08-10 21:52:11</td></tr><tr role="row" class="odd"><td>201</td><td>users</td><td class="sorting_1">372</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>phone</td><td>+861(824) 240-11-98</td><td>+222(222) 222-22-22</td><td>2016-08-10 23:13:51</td></tr><tr role="row" class="even"><td>207</td><td>users</td><td class="sorting_1">372</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>phone</td><td>+222(222) 222-22-22</td><td>+861(868) 879-77-88</td><td>2016-08-22 13:50:59</td></tr><tr role="row" class="odd"><td>208</td><td>users</td><td class="sorting_1">372</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>phone</td><td>+861(868) 879-77-88</td><td>+222(222) 222-22-22</td><td>2016-08-22 13:51:23</td></tr><tr role="row" class="even"><td>195</td><td>users</td><td class="sorting_1">371</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>allow_outgoing_call</td><td></td><td>1</td><td>2016-08-10 19:13:32</td></tr><tr role="row" class="odd"><td>196</td><td>users</td><td class="sorting_1">371</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>phone</td><td>+455(123) 455-68-74</td><td>+861(718) 085-90-31</td><td>2016-08-10 21:51:37</td></tr><tr role="row" class="even"><td>197</td><td>users</td><td class="sorting_1">371</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>allow_outgoing_call</td><td>1</td><td></td><td>2016-08-10 21:51:37</td></tr><tr role="row" class="odd"><td>200</td><td>users</td><td class="sorting_1">371</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>phone</td><td>+861(718) 085-90-31</td><td>+111(111) 111-11-11</td><td>2016-08-10 23:13:42</td></tr><tr role="row" class="even"><td>206</td><td>users</td><td class="sorting_1">371</td><td>matiasbarcos211@hotmail.com (ID: 83)</td><td>email</td><td>testuser@example.com</td><td>maba@cyberservices.com</td><td>2016-08-21 10:14:06</td></tr></tbody>
                    </table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing 1 to 10 of 211 entries</div></div><div class="col-xs-6"><div class="dataTables_paginate paging_simple_numbers" id="table_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous"><a href="#">Previous</a></li><li class="paginate_button active" aria-controls="table" tabindex="0"><a href="#">1</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">2</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">3</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">4</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">5</a></li><li class="paginate_button disabled" aria-controls="table" tabindex="0" id="table_ellipsis"><a href="#">…</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">22</a></li><li class="paginate_button next" aria-controls="table" tabindex="0" id="table_next"><a href="#">Next</a></li></ul></div></div></div></div>
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
    export default{
        name: 'app_dash',
        data(){
            return{
                checkAdmin: null,
            }
        },
        created: function(){
            this.checkAdmin = localStorage.getItem("adminCheckCode");
            if(this.checkAdmin == 'adminCheckIsSuccess777**' ){

            }
            else{
                this.$router.push('/login')
            }
        },
        methods:{
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


