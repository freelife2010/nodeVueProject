<template>
<div id="confirm">
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
                <li class=" active">
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
                        <li class=" active">
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
</aside>            <section>
        <div class="content-wrapper">
            <div class="content-heading">
                Confirmation E-mail
                <small> Modify confirmation e-mail content </small>
            </div>
                        <div class="container-fluid">
                        <form accept-charset="utf-8" class="form-vertical" method="POST" action="http://portal.opentact.org/emails/confirm-content/4">        <fieldset>
            <div class="form-group">
                <div class="col-sm-2 pull-left">
                    <div class="form-group required"><label for="smtp_host" class="control-label">SMTP Host<sup>*</sup></label><input class="form-control" required="true" id="smtp_host" type="text" name="smtp_host" value="mail.denovolab.com"></div>                    <div class="form-group required"><label for="smtp_port" class="control-label">SMTP Port<sup>*</sup></label><input class="form-control" required="true" id="smtp_port" type="text" name="smtp_port" value="25"></div>                </div>
                <div class="col-sm-2 pull-left">
                    <div class="form-group"><label for="smtp_user" class="control-label">SMTP User</label><input class="form-control" id="smtp_user" type="text" name="smtp_user" value="qualityassurance@denovolab.com"></div>                    <div class="form-group"><label for="smtp_password" class="control-label">SMTP Password</label><input class="form-control" id="smtp_password" type="password" name="smtp_password" value="KDJF#@$H@#Mf"></div>                </div>
                <div class="clearfix"></div>
                <br>
                <div class="col-sm-10">
                    <div class="form-group required"><label for="from_name" class="control-label">From (name)<sup>*</sup></label><input class="form-control" required="true" id="from_name" type="text" name="from_name" value="qualityassurance"></div>                    <div class="form-group required"><label for="from_address" class="control-label">From (address)<sup>*</sup></label><input class="form-control" required="true" id="from_address" type="text" name="from_address" value="qualityassurance@denovolab.com"></div>                    <div class="form-group required"><label for="subject" class="control-label">Subject<sup>*</sup></label><input class="form-control" required="true" id="subject" type="text" name="subject" value="Confirmation from AdminUI"></div>                    <label for="content">Content*</label>
                    <div data-role="editor-toolbar" data-target="#editor" class="btn-toolbar btn-editor">
                        <div class="btn-group dropdown">
                            <a data-toggle="dropdown" title="Font" class="btn btn-default">
                                <em class="fa fa-font"></em><b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#" data-edit="fontName Arial" style="font-family:'Arial'">Arial</a>
                                </li>
                                <li><a href="#" data-edit="fontName Sans" style="font-family:'Sans'">Sans</a>
                                </li>
                                <li><a href="#" data-edit="fontName Serif" style="font-family:'Serif'">Serif</a>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-group dropdown">
                            <a data-toggle="dropdown" title="Font Size" class="btn btn-default">
                                <em class="fa fa-text-height"></em>&nbsp;<b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#" data-edit="fontSize 5" style="font-size:24px">Huge</a>
                                </li>
                                <li><a href="#" data-edit="fontSize 3" style="font-size:18px">Normal</a>
                                </li>
                                <li><a href="#" data-edit="fontSize 1" style="font-size:14px">Small</a>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <a data-edit="bold" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Bold (Ctrl/Cmd+B)">
                                <em class="fa fa-bold"></em>
                            </a>
                            <a data-edit="italic" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Italic (Ctrl/Cmd+I)">
                                <em class="fa fa-italic"></em>
                            </a>
                            <a data-edit="strikethrough" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Strikethrough">
                                <em class="fa fa-strikethrough"></em>
                            </a>
                            <a data-edit="underline" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Underline (Ctrl/Cmd+U)">
                                <em class="fa fa-underline"></em>
                            </a>
                        </div>
                        <div class="btn-group">
                            <a data-edit="insertunorderedlist" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Bullet list">
                                <em class="fa fa-list-ul"></em>
                            </a>
                            <a data-edit="insertorderedlist" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Number list">
                                <em class="fa fa-list-ol"></em>
                            </a>
                            <a data-edit="outdent" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Reduce indent (Shift+Tab)">
                                <em class="fa fa-dedent"></em>
                            </a>
                            <a data-edit="indent" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Indent (Tab)">
                                <em class="fa fa-indent"></em>
                            </a>
                        </div>
                        <div class="btn-group">
                            <a data-edit="justifyleft" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Align Left (Ctrl/Cmd+L)">
                                <em class="fa fa-align-left"></em>
                            </a>
                            <a data-edit="justifycenter" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Center (Ctrl/Cmd+E)">
                                <em class="fa fa-align-center"></em>
                            </a>
                            <a data-edit="justifyright" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Align Right (Ctrl/Cmd+R)">
                                <em class="fa fa-align-right"></em>
                            </a>
                            <a data-edit="justifyfull" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Justify (Ctrl/Cmd+J)">
                                <em class="fa fa-align-justify"></em>
                            </a>
                        </div>
                        <div class="btn-group dropdown">
                            <a data-toggle="dropdown" title="Hyperlink" class="btn btn-default">
                                <em class="fa fa-link"></em>
                            </a>
                            <div class="dropdown-menu">
                                <div class="input-group ml-xs mr-xs">
                                    <input id="LinkInput" placeholder="URL" type="text" data-edit="createLink" class="form-control input-sm">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-sm btn-default">Add</button>
                                    </div>
                                </div>
                            </div>
                            <a data-edit="unlink" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Remove Hyperlink">
                                <em class="fa fa-cut"></em>
                            </a>
                        </div>
                        <div class="btn-group pull-right">
                            <a data-edit="undo" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Undo (Ctrl/Cmd+Z)">
                                <em class="fa fa-undo"></em>
                            </a>
                            <a data-edit="redo" data-toggle="tooltip" title="" class="btn btn-default" data-original-title="Redo (Ctrl/Cmd+Y)">
                                <em class="fa fa-repeat"></em>
                            </a>
                        </div>
                    </div>
                        <br>
                    <div class="well well-sm">
                        <strong>Markers:</strong>
                        <ul>
                            <li>__username__</li>
                            <li>__activation_link__</li>
                        </ul>
                    </div>
                    <div style="overflow:scroll; height:250px;max-height:250px" id="editor" contenteditable="true" class="form-control wysiwyg mt-lg"><p>
    <b>Hello, __username__!</b>
</p>
<p>
    You e-mail address has been confirmed!
</p></div>
                        <input class="form-control" type="hidden" name="content" value="<p>
    <b>Hello, __username__!</b>
</p>
<p>
    You e-mail address has been confirmed!
</p>">                    <br>
                    <div><button class="btn btn-primary btn-lg" data-submit="ajax" id="submit-btn" type="submit">Save changes</button> <a href="http://portal.opentact.org/emails/confirm-content/4" class="btn btn-default btn-lg">Reset</a></div>                </div>
            </div>
        </fieldset>
    <input class="form-control" type="hidden" name="_token" value="78oopuL5k8eUcGImVnfVNshepvFLuDSS4SuySYM2"></form>            </div>
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
    var userDevToken = localStorage.getItem("userDevToken");
    var newAuthadmin = localStorage.getItem("newAuthadmin");
    var developer_name = localStorage.getItem("dev_name");


        export default{
            name: 'confirm',
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