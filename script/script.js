$(document).ready(function(){
    //About me card
    $('[data-toggle="tooltip"]').tooltip();

    //flip
    AOS.init({
      duration: 1200,
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
      });
  
  });

     //Carousel Menu
     $('#collapseCarousel').on('click', function () {
      var text=$('#collapseCarousel').text();
      if(text === "Read More"){
        $(this).html('Hide');
      } else{
        $(this).text('Menu');
     }
    });
    
});
