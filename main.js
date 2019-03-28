$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  })
})