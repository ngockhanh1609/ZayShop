// Sub menu
var header = document.getElementById('header-bot');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = '91px';
    }
}
var menuItems = document.querySelectorAll('#header-bot .nav-bot li a[href*="#"] ');
for(var i=0; i < menuItems.length;i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(){
        header.style.height = '91px';

    }
}

//search


//Slide 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1;
 showSlides(slideIndex);
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("carousel-item");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace("active", "");
   }
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length -1) {
      slideIndex = 0;
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 7000);

  slides[slideIndex].style.display = "block"
  dots[slideIndex].getElementsByClassName += "active";
 }
 showSlides(slideIndex = 1);

    
