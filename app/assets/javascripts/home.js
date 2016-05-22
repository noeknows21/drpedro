$(document).on('ready page:load', ready);
function ready() {

  $( "#part1" ).animate({
    opacity: 1,
    height: "19.65vw",
  }, 1000 );

  $( "#part2" ).animate({
    opacity: 1
    // fontSize: "1.5em",
  }, 2000 );

  $( "#part3" ).animate({
    opacity: 1
  }, 2500 );

}
