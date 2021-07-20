// Sub menu



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

    
