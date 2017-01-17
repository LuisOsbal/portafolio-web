$(document).ready(function () {
  // Operative system detect.
  // var os = navigator.platform.toLowerCase();
  // if (os.match(/linux armv7/i)) {
  //   alert('Android')
  // } else if (os.match(/iPad/i)) {
  //   alert('iPad')
  // } else if (os.match(/iPhone/i)) {
  //   alert('iPhone')
  //   $(".Landing-image").addClass("ios");
  // } else if (os.match(/iPod/i)) {
  //   alert('iPod')
  // } else if (os.match(/mac/i)) {
  //   alert('Macintosh')
  // } else if (os.match(/linux/i)) {
  //   alert('Linux')
  // } else if (os.match(/win32/i)) {
  //   alert('Windows')
  // };

  var os = navigator.platform.toLowerCase();

  if (os.match(/iPad/i) || os.match(/iPhone/i) || os.match(/iPod/i)) {
    $(".Landing-image").addClass("ios");
  };

  // Navbar button animation.
  $('button').on('click', function() {
    $(this).toggleClass('isActive');
  });

  var buttonMobile =  $(".Navbar-mobileButton"),
      menu         =  $(".Navbar-list-container");
  buttonMobile.on('click', function (e) {
      e.preventDefault();
      menu.toggleClass('isActive');
  });

  // Changes the style of the menu bar.
  $(function() {
    var backgroundBar = $(".Navbar");
    var blackColorLogo = $(".Navbar-logo");
    var blackColorButton = $(".Navbar-mobileButton");
    $(window).scroll(function(event) {
        height = $(event.target).scrollTop();
        if (height > 100) {
            backgroundBar.addClass("backgroundNav");
            blackColorLogo.addClass("blackColor");
            blackColorButton.addClass("colorMobileButton");
        }   else {
            backgroundBar.removeClass("backgroundNav");
            blackColorLogo.removeClass("blackColor");
            blackColorButton.removeClass("colorMobileButton");
        }
    });
  });

  // It shows the effect Smooth scrolling.
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
        location.hostname == this.hostname) {
        var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length){
          $('html,body').animate( {
              scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});

/*  Show and hide mobile menu.  */
// $(function () {
//     var buttonMobile =  $(".Menu-mobileButton"),
//         menu         =  $(".Menu-list");
//     buttonMobile.on('click', function (e) {
//         e.preventDefault();
//         menu.toggleClass('isActiveMenu');
//     });
// });