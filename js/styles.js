$(document).ready(function(){

    $(".design").click(function() {
      $("#design, .design").toggle("slow");
    })

    $("#design").click(function() {
      $(".design, #design").toggle("slow");
    })

    $(".development").click(function() {
      $("#development, .development").toggle("slow");
    })

    $("#development").click(function() {
      $(".development, #development").toggle("slow");
    })

    $(".productManagement").click(function() {
      $("#productManagement, .productManagement").toggle("slow");
    })

    $("#productManagement").click(function() {
      $(".productManagement, #productManagement").toggle("slow");
    })

})
