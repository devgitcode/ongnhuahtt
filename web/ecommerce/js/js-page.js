$('.flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 5000,
    animationSpeed: 1000,  
    pauseOnHover: false,
    start: function(slider){
    	$('body').removeClass('loading');
	}
});

function responsive_category(){
    if($('body').find('.grid-category').length > 0){
        $('body').find('.grid-category').each(function(){
            var width = Math.round($(this).find('.item:eq(0)').width() / 100 * 70);
            $(this).find('.img').css('height', width + 'px');
        });
    }
}
function service_first(){
    if($('body').find('.service-first').length > 0){
        $('body').find('.service-first').each(function(){
            var width = Math.round($(this).find('.img:eq(0)').width() / 100 * 60);
            $(this).find('.img').css('height', width + 'px');
        });
    }
}
function responsive_product(){
    if($('body').find('.product-carousel').length > 0){
        $('body').find('.product-carousel').each(function(){
            var width = Math.round($(this).find('.item:eq(0)').width() / 100 * 110);
            $(this).find('.img').css('height', width + 'px');
        });
    }
}
function responsive_news(){
    if($('body').find('.content-page-news').length > 0){
        $('body').find('.content-page-news').each(function(){
            var width = Math.round($(this).find('.item:eq(0)').width() / 100 * 70);
            $(this).find('.img').css('height', width + 'px');
        });
    }
}
function zoom_image(){
    if($('body').find('.zoom-image').length > 0){
        $('body').find('.zoom-image').each(function(){
            var width = Math.round($(this).width() / 100 * 80);
            $(this).css('height', width + 'px');
        });
    }
}

$(".zoom-thumbnail").owlCarousel({
    autoPlay: 5000,
    items : 4,
    stopOnHover:true,
    pagination:false,
    responsive:true,
    navigation:true,
    navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199, 4],
    itemsDesktopSmall : [979, 4],
    itemsTablet : [768, 3],
    itemsMobile : [479, 3],
});
/**/
$("#img_01").elevateZoom({gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: 'active'}); 

//pass the images to Fancybox
$("#img_01").bind("click", function(e) {  
  var ez =   $('#img_01').data('elevateZoom');  
    $.fancybox(ez.getGalleryList());
  return false;
});
/**/
if($('body').find('#modal1').length > 0){
    $("#modal_trigger").leanModal({top : 50, overlay : 0.6, closeButton: ".modal_close" });
}

$(function() {
    $(window).load(function(){
        responsive_category();
        service_first();
        responsive_product();
        responsive_news();
        zoom_image();
    });
    $(window).resize(function(){
        responsive_category();
        service_first();
        responsive_product();
        responsive_news();
        zoom_image();
    });
});