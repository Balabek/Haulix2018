/**
 * Created by krm on 01/12/2018.
 */

$(document).ready(function(){


    // Dynamic motion of the elements on the homepage (on scroll)
    var $window  = $(window),
        win_height_padded = $window.height() * 1.1;
    $window.on('scroll', revealOnScroll);
    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'),1));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }
    $('.revealOnScroll.animated').each(function(index){
        var $this = $(this), offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
            $(this).removeClass('animated bounceInLeft bounceInRight pulse fadeInLeftBig fadeInRightBig')
        }
    });



    // Rotates the hamburger menu in the collapse mode
    var collapseToggleButton = $('.navbar-default .navbar-toggle');
    $(collapseToggleButton).on('click', function(){
        $(this).toggleClass('rotator');
    });


});