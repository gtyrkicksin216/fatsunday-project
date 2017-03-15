$(document).on('click', '.navbar-collapse.in', function(e){
           if($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle'){
               $(this).collapse('hide');
           } 
        });
        
//        $(window).scroll(function(){
//            $('nav.navbar.navbar-fixed-top.navbar-inverse').addClass('scrolled');
//        });
        
        $(function(){
            $(window).scroll(function(){
                var pageScroll = $(window).scrollTop();
                if(pageScroll == 0){
                    $('nav.navbar.navbar-fixed-top.navbar-inverse').removeClass('scrolled');
                } else {
                    $('nav.navbar.navbar-fixed-top.navbar-inverse').addClass('scrolled');
                }
            });
        });