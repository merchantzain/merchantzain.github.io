//functions to control right column upon button clicks
function about_me() {
	$("#default").css("display", "block");
	$("#about_me").css("display", "none");
    $("#my_blog").css("display", "none");
    $("#contact_me").css("display", "none");
}

function about_me() {
	$("#default").css("display", "none");
	$("#about_me").css("display", "block");
    $("#my_blog").css("display", "none");
    $("#contact_me").css("display", "none");
}

function my_blog() {
	$("#default").css("display", "none");
	$("#about_me").css("display", "none");
    $("#my_blog").css("display", "block");
    $("#contact_me").css("display", "none");
}

function contact_me() {
	$("#default").css("display", "none");
	$("#about_me").css("display", "none");
    $("#my_blog").css("display", "none");
    $("#contact_me").css("display", "block");
}

//create a slideshow to change an image and the caption text
var slideIndex = 0;
var slideImages = ["media/ucsd-e4e.jpg", "media/haystack.jpg", "media/utd-css.jpg"];
var slideCaptions = [
"This summer I was part of UC San Diego's Engineering for Exploration REU program. Our project was to build a working hexacopter with all control and command algorithms running on a Xilinx ZYNQ ARM + FPGA board. Learn more about what I did <a href=\"https://ieeexplore.ieee.org/document/8622102\" target=\"_blank\">here</a>.", 
"For summer 2017, I was part of the MIT Haystack Observatory's REU program. That summer I worked on the avionics system for an air-dropped data collection device for antarctic research missions. Learn more about what I did <a href=\"https://www.haystack.mit.edu/edu/reu/2017/files/2017_Merchant_Poster.pdf\" target=\"_blank\">here</a>.", 
"This is a quadrifilar helicoidal nested antenna system I made at the UT Dallas Center for Space Sciences to track satellites and record signals for measuring the total electron content (TEC) in the Ionosphere."];

function slideshowFunction(isClicked) {
    document.getElementById("slideshow").src = slideImages[slideIndex];
    document.getElementById("slideshow_captions").innerHTML = slideCaptions[slideIndex];
    
    if (slideIndex == slideImages.length - 1) {
    	slideIndex = 0;
    } else {
    	slideIndex += 1;
    }
    
    if (!isClicked) {
        setTimeout(slideshowFunction, 10000);
    }
}