$(document).ready(function(){

  $(document).scroll(function(){
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".js-modal").click(function(){
    $(".popup").addClass("active");
  });
  $(".js-popup-close").click(function(){
    $(".popup").removeClass("active");
  });
  $(".js-butter").click(function(){
    $(this).toggleClass("active");
    $(".menu-container").toggleClass("active");
  });

  $("input[type='range']").rangeslider({
    polyfill: false,
  });

  $(".js-slide-like").on("click", function(){
    $(this).toggleClass("active");
  });

  $(".js-slide-btn").on("click", function(){
    $(this).toggleClass("active");
  });

  $(".slide-color").on("click", function(){
    $(this).parent(".slide-colors").find(".slide-color").removeClass("active");
    $(this).addClass("active");
  });

  function tableAdaptive() {
    if (($(window).innerWidth() <= 768) & !($(".js-table").hasClass("mobile"))) {
      $(".js-table").find("tr:nth-child(n+1)").each(function(){
        $(this).find("td:nth-child(n+1)").prepend('<span class="table-td-title">' + $(this).find("td:first-child").text() + '</span>');
      });
      $(".js-table").addClass("mobile");
    } else if ($(window).innerWidth() > 768) {
      $(".js-table").find("tr:nth-child(n+1)").each(function(){
        $(this).find(".table-td-title").remove();
      });
      $(".js-table").removeClass("mobile");
    }
  }

  tableAdaptive();
  $(window).resize(function(){
    tableAdaptive();
  });

  
  

  $('.rate-circle').each(function(){
    var circle = $(this).find('circle'),
        radius = $(circle).attr('r'),
        circumference = radius * 2 * Math.PI;
    $(circle).attr("stroke-dasharray",`${circumference} ${circumference}`);
    $(circle).attr("stroke-dashoffset",circumference);
    function setProgress(percent) {
      var offset = circumference - percent / 100 * circumference;
      $(circle).attr("stroke-dashoffset", offset);
    }
    setProgress($(this).data("value"));
  });

  
  $(".js-slider").slick({
    slidesToShow: 3,
    variableWidth: true,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".slider-navi-arrow").on("click", function(){
    if ($(this).hasClass("slider-navi-arrow--next")) {
      $(".js-slider").slick("slickNext");
    } else {
      $(".js-slider").slick("slickPrev");
    }
  });

  $(".js-slider").on('beforeChange',function(event, slick, currentSlide, nextSlide){
    if (nextSlide+1 < 10) nextSlide = '0'+(nextSlide+1);
    $(slick.$slider).parents(".slider").find(".slider-current").text(nextSlide);
  });
  
    var st = '';
    if ($(".slide").length < 10) {
      st = '0';
    }
    $(this).find(".slider-count").text(st + $(".slide").length);



  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });


  

});