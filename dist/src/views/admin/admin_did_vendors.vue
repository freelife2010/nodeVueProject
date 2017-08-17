<template>
<div id="did_vendors">
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
                        <a  data-toggle-state="aside-collapsed" class="hidden-xs" title="Collapse/expand sidebar" v-on:click="close_aside">
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
                        <a  title="Log out">
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
                                <a href=" http://portal.opentact.org/emails/auth-content" title="Modify authorization e-mail">
                                    <span>Authorization e-mail</span>
                                </a>
                            </li>
                            <li class=" ">
                                <a href=" http://portal.opentact.org/emails/confirm-content" title="Modify confirmation e-mail">
                                    <span>Confirmation e-mail</span>
                                </a>
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
                    <li class=" active">
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
                    DID vendors list
                    <small> See DID vendors </small>
                </div>
                            <div class="container-fluid">
                        <div class="row">
            <div class="col-lg-12">
                <br>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <table id="table" class="table table-striped table-hover ">
                            <thead>
                            <tr>
                                <th>Code</th>
                                <th>Country</th>
                                <th>Area</th>
                                <th>Rate</th>
                                <th>Vendor</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
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
