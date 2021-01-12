$(document).ready(function(){
    //About me card
    $('[data-toggle="tooltip"]').tooltip();

    //flip
    AOS.init({
      duration: 650,
      once: true
    });

    //Read more
    $('#collapseToRead').on('click', function () {
        var text=$('#collapseToRead').text();
        if(text === "Read More"){
          $(this).html('Hide');
        } else{
          $(this).text('Read More');
       }
      });

    //Pause Carousel
    $(function(){
      $('#carousel.slide').carousel({
          interval: 1000,
          pause: "hover"
      });
  
      $('input').focus(function(){
         $("#carousel").carousel('pause');
      }).blur(function() {
         $("#carousel").carousel('cycle');
      });
});
