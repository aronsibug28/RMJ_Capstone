{{--NAVBAR--}}

<div class="container-fluid" id="row-nav">
    <div class="nav-links pull-right">
        <span class="glyphicon glyphicon-bell"></span>
        <span>Notification</span>
        <span>My Account</span>
        <span>Logout</span>
    </div>
</div>

<div class="container-fluid rs-row-navbar">

    <div class="row" id="row-navbar">

        {{--Navbar--}}
        <nav class="navbar navbar-fixed-top rs-navbar-bg" id="navbar" role="navigation" >
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" id="icon-bars" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="rs-navbar-company">
                    <a class="navbar-brand" href="#">
                        <img class="img-responsive rs-img-logo" src="/images/twistresources_logo.png" alt="Twistresources" />
                        {{--<span class="rs-navbar-brand">twist<b>resources</b></span>--}}
                        <span class="rs-navbar-brand">twist<b>resources</b></span>
                    </a>
                </div>
            </div>

            <div class="collapse navbar-collapse navbar-ex1-collapse rs-navbar-links">
                <ul class="nav navbar-nav navbar-right rs-margin-right rs-navbar-links">
                    <li class="menu rs-active"><a href="#">Home</a></li>

                    <li class="menu dropdown menu-admin">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">User Management</a></li>
                            <li><a href="#">Job</a></li>
                            <li><a href="#">Organization</a></li>
                            <li><a href="#">Competencies</a></li>
                            <li><a href="#">Qualifications</a></li>
                            <li><a href="#">Nationalities</a></li>
                            <li><a href="#">Announcements</a></li>
                            <li><a href="#">Configuration</a></li>
                            <li><a href="#">Audit Trail</a></li>
                        </ul>
                    </li>

                    <li class="menu dropdown menu-pim">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PIM</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Employee List</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Configuration</a></li>
                        </ul>
                    </li>

                    <li class="menu dropdown menu-leave">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Leave</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Leave List</a></li>
                            <li><a href="#">Entitlements</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Configuration</a></li>
                        </ul>
                    </li>

                    <li class="menu dropdown menu-time">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Time</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Timesheets</a></li>
                            <li><a href="#">Attendance</a></li>
                            <li><a href="#">Project Info</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Configuration</a></li>
                        </ul>
                    </li>

                    <li class="menu dropdown menu-performance">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Performance</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Employee Trackers</a></li>
                            <li><a href="#">Competencies</a></li>
                            <li><a href="#">Goals</a></li>
                            <li><a href="#">Appraisals</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Configuration</a></li>
                        </ul>
                    </li>

                    <li class="menu dropdown menu-recruitment">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Recruitment</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Vacancies</a></li>
                            <li><a href="#">Candidates</a></li>
                            <li><a href="#">Configuration</a></li>
                        </ul>
                    </li>

                    <li class="menu dropdown menu-discipline">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Discipline</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Disciplinary Cases</a></li>
                            <li><a href="#">Configuration</a></li>
                        </ul>
                    </li>

                    <li class="menu dropdown menu-training">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Training</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Sessions</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Configuration</a></li>
                        </ul>
                    </li>

                    <li class="rs-navbar-search">
                        <form role="search-page">
                            {{ csrf_field() }}

                            <form class="form-group">
                                <div class="row">
                                    <input type="text" class="form-control" placeholder="Go to..." />
                                    <i class="glyphicon glyphicon-search form-control-feedback rs-navbar-search-icon"></i>
                                </div>
                            </form>
                        </form>
                    </li>

                </ul>
            </div>
            

        </nav>
    </div>
</div>

{{--/NAVBAR--}}



{{--SIDEBAR--}}

<div class="rs-sidebar-left-fixed" id="wrapper">
    <div id="sidebar-wrapper">

        <ul class="sidebar-nav">
            <div class="media rs-profile-align-center groove">
                <a href="#" class="media-left">
                    <div class="rs-profile-circle"></div>
                </a>
                <div class="media-body">
                    <span class="media-heading text-semibold rs-sidebar-name">RS Aron M. Sibug </span>
                    <div class="rs-text-size-mini text-muted">
                        Administrator
                    </div>
                </div>

                <div class="media-right rs-sidebar-settings">
                    <a href="#"><i class="icon-cog3  rs-color-white"></i></a>
                </div>
            </div>

            <li class="sidebar-brand">
                <a class="navbar-brand rs-sidebar-menu" href="#">
                    <span class="glyphicon glyphicon-user"></span>&nbsp; User Management
                </a>
            </li>
            <li>
                <a href="#" class="rs-sidebar-active" style="color:white;">System Users</a>
            </li>
            <li>
                <a href="#">User Roles</a>
            </li>

            <li class="sidebar-brand">
                <a class="navbar-brand rs-sidebar-menu rs-color-white" href="#">
                    <span class="glyphicon glyphicon-bell"></span>&nbsp; Notifications
                </a>
            </li>
            <li>
                <a href="#">Pending Timesheets</a>
            </li>
            <li>
                <a href="#">Pending Leave Requests</a>
            </li>
            <li>
                <a href="#">Scheduled Events</a>
            </li>

            <li class="sidebar-brand">
                <a class="navbar-brand rs-sidebar-menu rs-color-white" href="#">
                    <span class="glyphicon glyphicon-bookmark"></span>&nbsp; My Shortcuts
                </a>
            </li>
            <li>
                <a href="#">System Users</a>
            </li>
            <li>
                <a href="#">User Roles</a>
            </li>
        </ul>
    </div>
</div>

{{--/SIDEBAR--}}