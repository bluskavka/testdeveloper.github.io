
/**********************************************************************back-top*****************************************************************************/
jQuery(function () {

// scroll body to top
 jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 100) {
   jQuery('#back-top').fadeIn();
  } else {
   jQuery('#back-top').fadeOut();
  }
 });
 

	// scroll body to 0px on click
 jQuery('#back-top a').click(function () {
  jQuery('body,html').stop(false, false).animate({
   scrollTop: 0
  }, 800);
  return false;
 });
 // scroll body to top end

/*******************bootrtrap-menu dropdown link active **********/
 
//CAROUSEL STARTS

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }
$("#steps-sl").each(function(){

        var carousel_columns = $(this).data('carousel_columns');
        var autoplay = $(this).data('autoplay');
        var slidespeed = $(this).data('slidespeed');
        var pagination = $(this).data('pagination');

        if(pagination == 'yes'){ pagination = 'true'; }
        if(pagination == 'no'){ pagination = 'false'; }

        $(this).owlCarousel({
            autoplay: autoplay,
            autoplaySpeed: slidespeed,
            items: carousel_columns,
            responsive: {
                0:    {items: 1},
                479:  {items: 1},
                768:  {items: 1},
                991:  {items: 1.25},
                1024:  {items: 1.5},
                1199: {items: 1.75}
            },
            dots: false,
            dotsEach: true,
            loop:true,
            pagination : true,
            nav: true,
            navText : ['', ''],
            loop: true

        });
    });

/**/

//CAROUSEL END


    
});
