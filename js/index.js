$(document)
    .ready(function() {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;

        $('.ui.menu .ui.dropdown').dropdown({
            on: 'hover'
        });
        $('.ui.menu a.item')
            .on('click', function() {
                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active')
                ;
            })
        ;

        $( '.ui.huge.inverted.button' ).on('click', function() {
            $('.coupled.modal')
                .modal({
                    allowMultiple: false
                })
            ;

            // attach events to buttons
            $('.second.modal')
                .modal('attach events', '.first.modal .button')
            ;
            // show first now
            $('.first.modal')
                .modal('show')
            ;
        });

        $(' .ui.embed').embed();

        $('#numPlayers, #closePlayers').on('click', function(){
            $('#divPlayers').transition('fly right');
        });

        $('#numCoach, #closeCoach').on('click', function(){
            $('#divCoach').transition('fly left')
            ;
        });
        $('ui.text.shape')
            .shape('set next side', '.second.side')
            .shape('flip up')
        ;




        //rotation speed and timer
        var speed = 5000;

        var run = setInterval(rotate, speed);
        var slides = $('.slide');
        var container = $('#slides ul');
        var elm = container.find(':first-child').prop("tagName");
        var item_width = container.width();
        var previous = 'prev'; //id of previous button
        var next = 'next'; //id of next button
        slides.width(item_width); //set the slides to the correct pixel width
        container.parent().width(item_width);
        container.width(slides.length * item_width); //set the slides container to the correct total width
        container.find(elm + ':first').before(container.find(elm + ':last'));
        resetSlides();


        //if user clicked on prev button

        $('#buttons a').click(function (e) {
            //slide the item

            if (container.is(':animated')) {
                return false;
            }
            if (e.target.id === previous) {
                container.stop().animate({
                    'left': 0
                }, 1500, function () {
                    container.find(elm + ':first').before(container.find(elm + ':last'));
                    resetSlides();
                });
            }

            if (e.target.id === next) {
                container.stop().animate({
                    'left': item_width * -2
                }, 1500, function () {
                    container.find(elm + ':last').after(container.find(elm + ':first'));
                    resetSlides();
                });
            }

            //cancel the link behavior
            return false;

        });

        //if mouse hover, pause the auto rotation, otherwise rotate it
        container.parent().mouseenter(function () {
            clearInterval(run);
        }).mouseleave(function () {
            run = setInterval(rotate, speed);
        });


        function resetSlides() {
            //and adjust the container so current is in the frame
            container.css({
                'left': -1 * item_width
            });
        }
        //a simple function to click next link
        //a timer will call this function, and the rotation will begin

        function rotate() {
            $('#next').click();
        }
        /*
                        $('#followingMenu').on('click', function(event) {
                            $(this).parent().find('a').removeClass('active');
                            $(this).addClass('active');
                        });
        */
        /*
                            $(window).on('scroll', function() {
                                $('.scrolling').each(function() {
                                    if($(window).scrollTop() >= $(this).offset().top) {
                                        $('#followingMenu').removeClass('active');
                                        $('#followingMenu div a[href=#'+ $(this).attr('id') +']').addClass('active');
                                    }
                                });
                            });*/

        $('.scrolling').visibility({
            /*
            onOnScreen: function(calculations){
                var id = $(this).attr("id");
                $('#followingMenu div a[href=\\#'+ id +']').addClass('active');
            },*/


            onOnScreen: function (calculations) {
                $('#followingMenu div a').removeClass('active');
                var id = $(this).attr("id");
                $('#followingMenu div a[href=\\#' + id + ']').addClass('active');

            }

        });
    });

$(window).on('scroll', function() {

    $('.scrolling').visibility({
        /*
        onOnScreen: function(calculations){
            var id = $(this).attr("id");
            $('#followingMenu div a[href=\\#'+ id +']').addClass('active');
        },*/


        onOnScreen: function (calculations) {
            $('#followingMenu div a').removeClass('active');
            var id = $(this).attr("id");
            $('#followingMenu div a[href=\\#' + id + ']').addClass('active');

        }

    });
});
