//Once everything is loaded.
$(document).ready(() => {
  //When elemtn about-button is clicked
  $('.about-button').on('click', () => {
    //Have body element scroll to "about" jumbotron
    $('body').scrollTo('.about', 1000);
  });
  //When elemtn about-button is clicked
  $('.team-button').on('click', () => {
    //Have body element scroll to "about" jumbotron
    $('body').scrollTo('.team', 1000);
  });
  //Grab any element with ID="button" and store it in a variable
  var btn = $('#button');
  //Hide the element immediately.
  btn.hide();
  //Scroll function
  $(window).scroll(function() {
    //If window is scrolled below a certain limit
    if ($(window).scrollTop() > 80) {
      //Fade in the btn element slowly.
      btn.fadeIn(300);
      //Above code but reverse, also im a dipshit and want to fucking die ig
    } else if ($(window).scrollTop() < 100) {
      //Fade out instead, same time.
      btn.fadeOut(300);
    }
  });
  //When btn is clicked
  btn.on('click', function(e) {
    e.preventDefault();
    //Scroll page to body element
    $('body').scrollTo('.topper', 1000);
  });
});