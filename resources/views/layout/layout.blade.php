<!DOCTYPE html>
<html lang="en">
<head>
    <title>Admin</title>
    <meta charset="UTF-8">
    <meta name=description content="">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link href="/css/bootstrap.css" rel="stylesheet" media="screen">
    <link href="/css/custom.css" rel="stylesheet" media="screen">
    <link href="/css/animate.css" rel="stylesheet" media="screen">
    <link href="/css/media-query.css" rel="stylesheet" media="screen">
    <link href="/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
    <!-- jQuery -->
    <script src="/js/jquery.min.js"></script>
    <!-- Bootstrap JavaScript -->
    <script src="/js/bootstrap.min.js"></script>

    @yield('style')

    <style>


    </style>
</head>

<body>

{{-- HEADER --}}
    {{-- Navbar and Sidebar --}}
    @include('layout.header')
{{-- /HEADER --}}


    @yield('content')


{{-- FOOTER --}}
    {{-- Action Button, Modal and Scripts --}}
    @include('layout.footer')
{{-- /FOOTER --}}


    @yield('script')

</body>
</html>
