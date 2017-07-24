$("#arrow").on("click", function() {
    $("html, body").animate({
        scrollTop: $("#second-block").offset().top
    }, 500);
})

$(window).scroll( function(){
    var top_of_object = $('.js-trigger').offset().top;
    var top_of_window = $(window).scrollTop();
    if( top_of_window > top_of_object){
        $('.good-fourth-section__wrapper_idea-heading').css({"margin": "30px 0 20px 80px"});
    }
});
