
 (function() {
  $(function() {
//menu
   $('.menu__item--withsub').hover(function() {
        var $this = $(this);
        if ($this.children('.sub-menu').is(':visible')) {
        $this.removeClass('active');
        $this.children('.sub-menu').slideUp();
        if ($this.children('.sub-menu2').is(':visible')) {
        $this.children('.sub-menu2').fadeOut();
        }
}
        else {
          $this.addClass('active');
          $this.children('.sub-menu').slideDown();
          $this.children('.sub-menu2').fadeIn();
          $this.mouseleave(function(){
            $this.children('.sub-menu2').fadeOut();
          });

        }

    });

//sibebar

 $('.sidebar-rubrics').hide();

  $('.accordeon__item').click(function(){
    $(this).toggleClass('active');
    $('.sidebar-rubrics').slideToggle();
})
  });


  //mobile-menu

  $.fn.extend({

  // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options){

    // Set the default options
    var defaults = {
      color: 'black',
      width: 30,
      height: 25,
      speed: 400,
      animate: true
    }
    var options = $.extend(defaults, options);

    return this.each(function(){

      $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
      $(this).addClass('tb-menu-toggle');
      $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('tb-active-toggle');
        if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
        $('.tb-mobile-menu').slideToggle(options.speed);
      });
      $(this).children().css('background', options.color);
    });

  },

  // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options){

    // Set the default options
    var defaults = {
      speed: 400
    }
    var options =  $.extend(defaults, options);

    return this.each(function(){

      $(this).addClass('tb-mobile-menu');
      var menuItems = $(this).children('li');
      menuItems.find('.sub-menu').parent().addClass('tb-parent');
      menuItems.find('.sub-menu').parent().addClass('arrow');
      $('.tb-parent ul').hide();
      $('.tb-parent > a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).siblings().slideToggle(options.speed);
      });

    });
  }
});

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$('#menu-toggle').threeBarToggle({color: '#fff', width: 30, height: 25});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$('#menu').accordionMenu();

//searchform

$('.social__item--search').on('click', function(){
  $('.searchform').slideToggle(200);
})

$('.close-btn.i.fa.fa-times').on('click', function(){
  $('.searchform').slideUp();
})

//sitemap

 $('.list-categories').hide();

  $('.accordeon-posts__title').click(function(){
    $(this).children('ul').slideToggle();
    $(this).parents('.posts-wrapper').find('.post-type__name').toggleClass('active');
  });


//social buttons
if ($("#share").length>0){
  $("#share").jsSocials({
      shares: [ "vk", "googleplus", "twitter"],
      showLabel: true,
      showCount: true
    });
$('.jssocials-share-no-count').val('').css('display', 'inline-block').text('0');}

if ($(".shares").length>0){
  $(".shares").jsSocials({
      shares: [ "vk", "googleplus", "twitter"],
      showLabel: true,
      showCount: true
    });
$('.jssocials-share-no-count').val('').css('display', 'inline-block').text('0');}

//comments
if($(".comments__open".length)) {
  $('.comments__open').on('click', function(){
    $('.comments-form').slideToggle();
    $(this).toggleClass('active');
    return false;
  })
}

//spoilers
  $('.spoiler__arrow').click(function(){
    $(this).parents('.spoiler__item').find('.spoiler__body').slideToggle();
    $(this).parent('.spoiler__header').toggleClass('spoiler__header--active');
    return false;
  });


$('.rating.control-mode .fa').on('click', function(){
    var $this = $(this);
        $this
            .nextAll()
            .removeClass('is-active');
        $this
            .addClass('is-active')
            .prevAll()
            .addClass('is-active');
        rateCounter();
});

function rateCounter(){
    $('.rating').each(function(){
        var $this = $(this),
            _counter = $this.find('.is-active').length;

            if(_counter){
               $this.find('.rate-counter span').text(0);
             }
              $this.find('.rate-counter span').text(_counter);
    });
    return this;
}
rateCounter();


}).call(this);




