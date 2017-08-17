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
                        <li class=" active">
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
                {{ $route.params.id }}: Mass rates
                <small> Manage mass rates </small>
            </div>
                        <div class="container-fluid">
                    <div class="row">
        <div class="col-lg-12">
            <br>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="dt-buttons"><a class="dt-button btn btn-primary" tabindex="0" aria-controls="table"><span>Export to CSV</span></a></div><div id="table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table"></label></div><div id="table_processing" class="dataTables_processing" style="display: none;">Processing...</div><table id="table" class="table table-striped table-hover  dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1057px;">
                        <thead>
                        <tr role="row"><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Country: activate to sort column ascending" style="width: 138px;">Country</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Destination: activate to sort column ascending" style="width: 425px;">Destination</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Code: activate to sort column ascending" style="width: 52px;">Code</th><th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-sort="descending" aria-label="Opentact Sell Rate: activate to sort column ascending" style="width: 167px;">Opentact Sell Rate</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Your Sell Rate: activate to sort column ascending" style="width: 165px;">Your Sell Rate</th></tr>
                        </thead>
                        <tbody><tr role="row" class="odd"><td>INTL NETWORKS</td><td>INTL NETWORKS 882 Oration Technologies Network</td><td>88233</td><td class="sorting_1">10</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58792?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="even"><td>Inmarsat</td><td>Inmarsat B HSD</td><td>87039</td><td class="sorting_1">6.35</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-2" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58780?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="odd"><td>Inmarsat</td><td>Inmarsat Satellite</td><td>87095</td><td class="sorting_1">5.98</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-3" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58788?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="even"><td>Inmarsat</td><td>Inmarsat Gan/Fleet/Hsd</td><td>87060</td><td class="sorting_1">5.98</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-4" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58783?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="odd"><td>Inmarsat</td><td>Inmarsat Satellite</td><td>870</td><td class="sorting_1">5.66</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-5" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58785?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="even"><td>Inmarsat</td><td>Inmarsat Bgan HSD</td><td>87078</td><td class="sorting_1">5.44</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-6" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58782?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="odd"><td>Iridium</td><td>Iridium Satellite</td><td>8816</td><td class="sorting_1">3.79</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-7" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58819?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="even"><td>Global</td><td>Global Mobile 881</td><td>881</td><td class="sorting_1">3.79</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-8" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/55349?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="odd"><td>Iridium</td><td>Iridium Satellite</td><td>8817</td><td class="sorting_1">3.79</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-9" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58820?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr><tr role="row" class="even"><td>Inmarsat</td><td>Inmarsat Aero</td><td>8705</td><td class="sorting_1">3.78</td><td><div class="form-group"><input class="form-control" step="0.01" style="width: 80px" id="app_rate-10" type="number" name="app_rate"></div>
                <a href="http://portal.opentact.org/app-rates/add-rate/58779?app=27" title="Set app rate" class="btn btn-primary add_rate_btn btn-sm">
                    <span class="fa fa-plus"> </span></a>
            </td></tr></tbody>
                    </table><div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing 1 to 10 of 41,519 entries</div><div class="dataTables_paginate paging_simple_numbers" id="table_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous"><a href="#">Previous</a></li><li class="paginate_button active" aria-controls="table" tabindex="0"><a href="#">1</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">2</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">3</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">4</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">5</a></li><li class="paginate_button disabled" aria-controls="table" tabindex="0" id="table_ellipsis"><a href="#">…</a></li><li class="paginate_button " aria-controls="table" tabindex="0"><a href="#">4152</a></li><li class="paginate_button next" aria-controls="table" tabindex="0" id="table_next"><a href="#">Next</a></li></ul></div></div>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" name="_token" value="wvOTshnlqZEs4hBAk7EnQWRFGQkQL4fQrMyCdXvI">            </div>
        </div>
        </section>
        <footer>
            <span>Opentact © 2015</span>
        </footer>
    </div>
</template>