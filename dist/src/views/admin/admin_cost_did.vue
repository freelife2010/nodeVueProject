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
        </aside>            <section>
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
                            <div id="table_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="row"><div class="col-xs-6"><div class="dataTables_length" id="table_length"><label>Display <select name="table_length" aria-controls="table" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> Records per page</label></div></div><div class="col-xs-6"><div id="table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table"></label></div></div></div><table id="table" class="table table-striped table-hover dataTable no-footer" role="grid" aria-describedby="table_info" style="width: 1308px;">
                                <thead>
                                <tr role="row"><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Country: activate to sort column ascending" style="width: 96px;">Country</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="State: activate to sort column ascending" style="width: 68px;">State</th><th class="sorting_desc" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Rate Center: activate to sort column ascending" aria-sort="descending" style="width: 133px;">Rate Center</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Value (USD) - Per Minute: activate to sort column ascending" style="width: 258px;">Value (USD) - Per Minute</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Value (USD) - One Time: activate to sort column ascending" style="width: 246px;">Value (USD) - One Time</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Value (USD) - Monthly: activate to sort column ascending" style="width: 233px;">Value (USD) - Monthly</th><th class="sorting" tabindex="0" aria-controls="table" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 120px;">Actions</th></tr>
                                </thead>
                                <tbody><tr role="row" class="odd"><td>US</td><td>MD</td><td class="sorting_1">ANNAPOLIS</td><td>3</td><td>19</td><td>8</td><td>
                                <a href="http://portal.opentact.org/costs/did-edit/13" data-target="#myModal" data-toggle="modal" title="Edit" class="btn btn-success btn-sm">
                                    <span class="fa fa-pencil"></span></a>
                            
                                <a href="http://portal.opentact.org/costs/did-delete/13" data-target="#myModal" data-toggle="modal" title="Remove" class="btn btn-danger btn-sm">
                                    <span class="fa fa-remove"></span></a>
                            </td></tr><tr role="row" class="even"><td>US</td><td>CA</td><td class="sorting_1">All</td><td>1</td><td>0</td><td>0</td><td>
                                <a href="http://portal.opentact.org/costs/did-edit/15" data-target="#myModal" data-toggle="modal" title="Edit" class="btn btn-success btn-sm">
                                    <span class="fa fa-pencil"></span></a>
                            
                                <a href="http://portal.opentact.org/costs/did-delete/15" data-target="#myModal" data-toggle="modal" title="Remove" class="btn btn-danger btn-sm">
                                    <span class="fa fa-remove"></span></a>
                            </td></tr><tr role="row" class="odd"><td>US</td><td>AZ</td><td class="sorting_1">0</td><td>0</td><td>0</td><td>0</td><td>
                                <a href="http://portal.opentact.org/costs/did-edit/11" data-target="#myModal" data-toggle="modal" title="Edit" class="btn btn-success btn-sm">
                                    <span class="fa fa-pencil"></span></a>
                            
                                <a href="http://portal.opentact.org/costs/did-delete/11" data-target="#myModal" data-toggle="modal" title="Remove" class="btn btn-danger btn-sm">
                                    <span class="fa fa-remove"></span></a>
                            </td></tr></tbody>
                            </table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="table_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div></div><div class="col-xs-6"><div class="dataTables_paginate paging_simple_numbers" id="table_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table" tabindex="0" id="table_previous"><a href="#">Previous</a></li><li class="paginate_button active" aria-controls="table" tabindex="0"><a href="#">1</a></li><li class="paginate_button next disabled" aria-controls="table" tabindex="0" id="table_next"><a href="#">Next</a></li></ul></div></div></div></div>
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