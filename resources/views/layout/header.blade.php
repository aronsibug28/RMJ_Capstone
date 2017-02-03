{{--NAVBAR--}}

<div class="container-fluid rs-row-navbar">
    <div class="row" id="row-navbar">

        {{--Navbar--}}
        <nav class="navbar navbar-inverse navbar-fixed-top rs-navbar-bg" id="navbar" role="navigation" >
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" id="icon-bars" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="rs-navbar-bg">
                    <a class="navbar-brand" href="#">
                        <img class="img-responsive rs-img-logo" src="/images/twistresources_logo.png" alt="Twistresources" />
                        {{--<span class="rs-navbar-brand">twist<b>resources</b></span>--}}
                        <span class="rs-navbar-brand">Company Name</span>
                    </a>
                </div>
            </div>

            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav navbar-right rs-margin-right ">
                    <li class="rs-active"><a href="#">Admin</a></li>
                    <li><a href="#">PIM</a></li>
                    <li><a href="#">Leave</a></li>
                    <li><a href="#">Time</a></li>
                    <li><a href="#">Recruitment</a></li>
                    <li><a href="#">Discipline</a></li>
                    <li><a href="#">Training</a></li>
                </ul>
            </div>
        </nav>
    </div>
</div>

{{--/NAVBAR--}}



{{--SIDEBAR--}}

<div class="rs-sidebar-left-fixed" id="wrapper">
    <div id="sidebar-wrapper">

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

        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a class="navbar-brand rs-sidebar-menu rs-color-white" href="#">
                    <span class="glyphicon glyphicon-user rs-sidebar-menu-icon"></span>  Admin Menu
                </a>
            </li>
            <li>
                <a href="#">Dashboard</a>
            </li>
            <li>
                <a class="sidebar-active" style="color:white;" href="#">User Management</a>
            </li>
            <li>
                <a href="#">Job</a>
            </li>
            <li>
                <a href="#">Organization</a>
            </li>
            <li>
                <a href="#">Competencies</a>
            </li>
            <li>
                <a href="#">Qualifications</a>
            </li>
            <li>
                <a href="#">Nationalities</a>
            </li>
            <li>
                <a href="#">Announcements</a>
            </li>
            <li>
                <a href="#">Configuration</a>
            </li>
            <li>
                <a href="#">Audit Trail</a>
            </li>
        </ul>
    </div>
</div>

{{--/SIDEBAR--}}