$(document).ready(function () {
  $(".form").on("submit", function () {
      $(".spinner").removeClass("show");
      $(".form").css("display", "none");
      

  });
  setTimeout(function () {

      $(".loading-icon").addClass("show");
  }, 5000);
});