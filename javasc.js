$(document).ready(function(){
  $("#Fst").animate({left:200, opacity:"show"}, 1550);
    $("#Snd").animate({left:200, opacity:"show"}, 2050);

//  $("#Fst").show("slide", { direction: "left" }, 1550);
  //$("#Snd").show("slide", { direction: "left" }, 2000);
//$("#Fst").fadeIn("slow");
//$("#Snd").fadeIn("slow");
});

$(window).on("load",function() {
  function fade(pageLoad) {
    var min = 0.3;
    var max = 0.7;
    var threshold = 0.01;
    
    $(".banner").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom -30< windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")<=min+threshold || pageLoad) {$(this).fadeTo("slow",max);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")>=max-threshold || pageLoad) {$(this).fadeTo(500,min);}
      }
    });
  } fade(true); //fade elements on page-load
  $(window).scroll(function(){fade(false);}); //fade elements on scroll
});
