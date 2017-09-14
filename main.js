// Smooth scrolling nav bar

$(document).ready(function() {
  
  var scrollLink = $('.jes');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1300 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})


// Nav Bar animation


// get the value of the bottom of the #about element by 
// adding the offset of that element plus its height, set it as a variable

var mainbottom = $('#button-banner').offset().top + $('#button-banner').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.nav').addClass('past-main');
    } else {
        $('.nav').removeClass('past-main');
   }

});






