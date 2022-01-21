$(document).ready(function(){
//functions to hide and display items on what to do section
    $(".design").click(function() {
      $("#design, .design").toggle("slow");
    });

    $("#design").click(function() {
      $(".design, #design").toggle("slow");
    });

    $(".development").click(function() {
      $("#development, .development").toggle("slow");
    });

    $("#development").click(function() {
      $(".development, #development").toggle("slow");
    });

    $(".productManagement").click(function() {
      $("#productManagement, .productManagement").toggle("slow");
    });

    $("#productManagement").click(function() {
      $(".productManagement, #productManagement").toggle("slow");
    });

 //Portal hover function
    $('#work1').mouseenter(function () {
      $('.work-heading').filter('#work1-popup').show("slow");
    }).mouseleave(function () {
      $('#work1-popup').hide("slow");
    });

});
