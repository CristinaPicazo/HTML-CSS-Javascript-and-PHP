$.noConflict();
jQuery(document).ready(function($){

  //Search
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  //Animation text (not in mobile)
  $("h2").hover(function(){
    $("h2").animate({
      left: '45%',
      fontSize: "5em"
    },"slow");
  });

  //Show books
  $("#books2021").click(function(){
    $("#languageList2021").fadeToggle(1000);
  });

  $("#books2020").click(function(){
    $("#languageList2020").fadeToggle(1000);
  });
  
  $("#books2019").click(function(){
    $("#languageList2019").fadeToggle(1000);
  });
  
});

