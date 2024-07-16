$(".shop-product-carousel").owlCarousel({
    items: 4,
    margin: 10,
})
$(".newly-products-carousel").owlCarousel({
    items: 4,
    margin: 10,
})
$(".mostly-sold-product-carousel").owlCarousel({
    items: 4,
    margin: 10,
})
$(".featured-product-carousel").owlCarousel({
    items: 4,
    margin: 10,
})



var owl1 = $('.shop-product-carousel');
owl1.owlCarousel();
$('.next-btn').click(function() {
    owl1.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.prev-btn').click(function() {
    owl1.trigger('prev.owl.carousel', [300]);
})

// second carousel
var owl2 = $('.newly-products-carousel');
owl2.owlCarousel();
$('.newly-next-btn').click(function() {
    owl2.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.newly-prev-btn').click(function() {
    owl2.trigger('prev.owl.carousel', [300]);
})

// third carousel

var owl3 = $('.mostly-sold-product-carousel');
owl3.owlCarousel();
$('.most-next-btn').click(function() {
    owl3.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.most-prev-btn').click(function() {
    owl3.trigger('prev.owl.carousel', [300]);
})

// 4th carousel
var owl4 = $('.featured-product-carousel');
owl4.owlCarousel();
$('.featured-next-btn').click(function() {
    owl4.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.featured-prev-btn').click(function() {
    owl4.trigger('prev.owl.carousel', [300]);
})