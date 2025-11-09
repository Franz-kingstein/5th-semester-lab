$(document).ready(function() {
  $("#show").click(() => $("#box").show());
  $("#hide").click(() => $("#box").hide());
  $("#toggle").click(() => $("#box").toggle());
  $("#fadeIn").click(() => $("#box").fadeIn());
  $("#fadeOut").click(() => $("#box").fadeOut());
  $("#fadeToggle").click(() => $("#box").fadeToggle());
  $("#slideUp").click(() => $("#box").slideUp());
  $("#slideDown").click(() => $("#box").slideDown());
  $("#slideToggle").click(() => $("#box").slideToggle());
  $("#animate").click(() => {
    $("#box").animate({
      width: "400px",
      height: "200px",
      opacity: 0.7,
      borderRadius: "50px"
    }, 800).animate({
      width: "250px",
      height: "120px",
      opacity: 1,
      borderRadius: "15px"
    }, 800);
  });
});
