/*-- Navbar transparent to solid --*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

/*-- Close mobile nav on click --*/
$(document).ready(function () {
  $(document).on('click', function (event) {
    const clickover = $(event.target);
    const _opened = $('.navbar-collapse').hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });
});

/*-- Smooth scrolling to links --*/
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});