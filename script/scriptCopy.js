$('.show_hide').toggle(function(){
    $(this).text().replace("Read More", "Read Less");
    $('.' + $(this).attr('data-content')).slideDown();
    
    },function(){
    $(this).text().replace("Read Less", "Read More");
    $('.' + $(this).attr('data-content')).slideUp();
    });

    
$('.carousel').carousel({
    interval: 3000
 })
$('.carousel-control.left').click(function() {
   $('#slide').carousel('prev');
});

$('.carousel-control.right').click(function() {
   $('#slide').carousel('next');
});