
new WOW().init();

$(window).scroll(() => {
  var scrollPosition = $(document).scrollTop();
  console.log(Math.floor(scrollPosition));
 if (scrollPosition > 1300) {

    $('#mySkills').fadeIn(2000);
    $('.skillbar').each(function () {
      $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
      }, 9000);
    });
  }

});


function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
  document.getElementById("mySideImage").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0%";
  document.getElementById("mySideImage").style.height = "0%";
  document.getElementById("Signature").style.height = "0%";
}

function openSignature() {
  document.getElementById("mySidenav").style.height = "100%";
  document.getElementById("Signature").style.height = "100%";
}

var app = document.getElementById('app');
        
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Alkwifi')
            .pauseFor(2500)
            .deleteAll()
            .pauseFor(2500)
            .start(2000);

$('a[data-toggle="tooltip"]').tooltip({
  animated: 'fadeIn',
  placement: 'left',
  html: true
});
