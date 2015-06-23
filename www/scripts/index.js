// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);






    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        };

        function onResume() {
            // TODO: This application has been reactivated. Restore application state here
        };
            
       

    }



})();

            //stick in the fixed 100% height behind the navbar but don't wrap it
            $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));

            $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));

            // Enter your ids or classes
            var toggler = '.navbar-toggle';
            var pagewrapper = '#page-content';
            var navigationwrapper = '.navbar-header';
            var menuwidth = '100%'; // the menu inside the slide menu itself
            var slidewidth = '25%';
            var menuneg = '-100%';
            var slideneg = '-25%';


            $("#slide-nav").on("click", toggler, function (e) {

                var selected = $(this).hasClass('slide-active');

                $('#slidemenu').stop().animate({
                    left: selected ? menuneg : '0px'
                });

                $('#navbar-height-col').stop().animate({
                    left: selected ? slideneg : '0px'
                });

                $(pagewrapper).stop().animate({
                    left: selected ? '0px' : slidewidth
                });

                $(navigationwrapper).stop().animate({
                    left: selected ? '0px' : slidewidth
                });


                $(this).toggleClass('slide-active', !selected);
                $('#slidemenu').toggleClass('slide-active');


                $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


            });



            var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


            $(window).on("resize", function () {

                if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
                    $(selected).removeClass('slide-active');
                }


            });

            var $window = $(window),
                   $stickyEl = $('#slide-nav.navbar-inverse #slidemenu'),
                   elTop = $stickyEl.offset().top;

            $window.scroll(function () {
                $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
            });

            

   


    