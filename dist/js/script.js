$(document).ready(function() {
  $('.header-burger').click(function() {
      $('.header-burger, .menu').toggleClass('active');
  });
});

$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        focusOnSelect: true,
        infinite: true,
        swipe: true,
        speed: 500,
        useTransform: true,
        cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1.000)',
        variableWidth: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
      });       
  });


  $('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    });

    $(document).ready(function(){
      $('.slider-img').slick({
          asNavFor: '.slider-customers',
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          initialSlide: 1,
          focusOnSelect: true,
          speed: 500,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 1,
                infinite: true,
                adaptiveHeight: true
              }
            }
          ]
        });       
    });

$(document).ready(function(){
  $('.slider-customers').slick({
      asNavFor: '.slider-img',
      speed: 300,
      slidesToShow: 1,
      initialSlide: 1,
      fade: true,
      centerMode: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1,
            infinite: true,
            adaptiveHeight: true
          }
        }
      ]
    });       
});

$(document).ready(function() {

    //RADIO

    $.each($('.radiobuttons-item'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
      });
      $(document).on('click', '.radiobuttons-item', function(event) {
        $(this).parents('.form-selector-input').find('.radiobuttons-item').removeClass('active');
        $(this).parents('.form-selector-input').find('.radiobuttons-item input').prop('checked',false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked',true);
        return false;
      });
});

// Карточки Plan
var btnContainer = document.getElementById("form-card");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("card-case");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("act");
    current[0].className = current[0].className.replace(" act", "");
    this.className += " act";
  });
}