<template>
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
                        <li class=" ">
                            <a href="#app_list" title="APP Dashboard" data-toggle="collapse">
                                <div class="pull-right label label-info">
                                    7
                                </div>
                                <em class="icon-speedometer"></em>
                                <span>APP Dashboard</span>
                            </a>
                            <ul id="app_list" class="nav sidebar-subnav collapse">
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
                            </ul>
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
                    </ul>
                    <!-- END sidebar nav-->
                </nav>
            </div>
            <!-- END Sidebar (left)-->
        </aside>

        <section>
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
                        <tbody><tr id="27" role="row" class="odd"><td>41241</td><td>Test App</td><td class="sorting_1">5</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/27" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="110" role="row" class="even"><td>34434</td><td>ND_App</td><td class="sorting_1">1</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/110" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="129" role="row" class="odd"><td>47256</td><td>SQL APP</td><td class="sorting_1">1</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/129" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="91" role="row" class="even"><td>71059</td><td>devApp</td><td class="sorting_1">0</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/91" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="107" role="row" class="odd"><td>47339</td><td>Test App2</td><td class="sorting_1">0</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/107" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="186" role="row" class="even"><td>34268</td><td>yapp</td><td class="sorting_1">0</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/186" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="191" role="row" class="odd"><td>31893</td><td>dsadsafdsaf</td><td class="sorting_1">0</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/191" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="192" role="row" class="even"><td>83046</td><td>name</td><td class="sorting_1">0</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/192" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr><tr id="193" role="row" class="odd"><td>61199</td><td>fff</td><td class="sorting_1">0</td><td>true</td><td><a href="http://portal.opentact.org/app-config/enable-mass-call/193" data-target="#myModal" data-toggle="modal" title="Enable" class="btn btn-danger btn-sm ">
                            <span class="fa fa-check"></span></a></td></tr></tbody>
                    </table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing 1 to 9 of 9 entries</div></div><div class="col-xs-6"><div class="dataTables_paginate paging_simple_numbers" id="table_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous"><a href="#">Previous</a></li><li class="paginate_button active" aria-controls="table" tabindex="0"><a href="#">1</a></li><li class="paginate_button next disabled" aria-controls="table" tabindex="0" id="table_next"><a href="#">Next</a></li></ul></div></div></div></div>
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
</template>