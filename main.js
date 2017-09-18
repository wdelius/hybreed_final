

// fade in

$(document).ready(function(){
    $('nav').fadeIn(2000);
}); 









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

var mainbottom = $('#landing').offset().top + $('#landing').height();

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



// Nav Bar animation


// get the value of the bottom of the #about element by 
// adding the offset of that element plus its height, set it as a variable

var mainbot = $('#vectors').offset().top + $('#vectors').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbot) {
        $('.nav').addClass('past-main');
    } else {
        $('.nav').removeClass('past-main');
   }

});





// Navbar responsiveness

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("headid");
    if (x.className === "navigation") {
        x.className += "responsive";
    } else {
        x.className = "navigation";
    }
}





// Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-loading');
        }, 100);
      });






