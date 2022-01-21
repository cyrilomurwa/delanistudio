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
    $('#work2').mouseenter(function () {
      $('.work-heading').filter('#work2-popup').show("slow");
    }).mouseleave(function () {
      $('#work2-popup').hide("slow");
    });
    $('#work3').mouseenter(function () {
      $('.work-heading').filter('#work3-popup').show("slow");
    }).mouseleave(function () {
      $('#work3-popup').hide("slow");
    });
    $('#work4').mouseenter(function () {
      $('.work-heading').filter('#work4-popup').show("slow");
    }).mouseleave(function () {
      $('#work4-popup').hide("slow");
    });
    $('#work5').mouseenter(function () {
      $('.work-heading').filter('#work5-popup').show("slow");
    }).mouseleave(function () {
      $('#work5-popup').hide("slow");
    });
    $('#work6').mouseenter(function () {
      $('.work-heading').filter('#work6-popup').show("slow");
    }).mouseleave(function () {
      $('#work6-popup').hide("slow");
    });
    $('#work7').mouseenter(function () {
      $('.work-heading').filter('#work7-popup').show("slow");
    }).mouseleave(function () {
      $('#work7-popup').hide("slow");
    });
    $('#work8').mouseenter(function () {
      $('.work-heading').filter('#work8-popup').show("slow");
    }).mouseleave(function () {
      $('#work8-popup').hide("slow");
    });
});

//retrieve form details
$(document).ready(function() {
  $("#blanks form").submit(function(event) {

      var pnameInput = $("input#pname").val();
      var emailInput = $("input#email").val();
      var country = $("#country").val();
      var colour = $("input#colour").val();
      var dob = $("input#dob").val();
      var gender = $("input:radio[name=gender]:checked").val();

       var music = [];
           $("input:checkbox[name='music']:checked").each(function(){    
               cricketer.push($(this).val());    		
           });
           alert("The selected chocolate are: " + cricketer.join(", "));
      
      $(".pname").text(pnameInput);
      $(".email").text(emailInput);
      $(".gender").text(gender);
      $(".country").text(country);
      $(".colour").text(colour);
      $(".dob").text(dob);
  
  
  
      alert("Thank you for your Message. We have received your information as below"+"\\n"+"Your Name "+pnameInput+" Gender "+gender+" Date of Birth "+dob+" Email "+emailInput+" "+"\\n"+"Country "+country+" Favourite Color "+colour+" Music Genre "+ cricketer.join(", ")+"");

      event.preventDefault();
  });
});