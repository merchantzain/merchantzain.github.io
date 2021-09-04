// reposition navbar on every viewport resizing and page refresh
function navpos_update() {
    if ($(window).width() > 768) {
        var height = $(".about").height();
        $('.navbar').css("margin-top" , (height-12).toString() + "px");
    }
    else {
        $('.navbar').css("margin-top" , "15%");
    }
}

$(window).resize(navpos_update);
navpos_update();
$(".navbar").show()

// prevent some transitions from occuring until after the page has loaded
$(".transition_after_load").each(function() {
    $(this).removeClass("transition_after_load");
});