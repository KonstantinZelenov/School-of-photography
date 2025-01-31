
/*При загрузке страницы отображаем главную страницу*/

document.addEventListener("DOMContentLoaded", function() {
  mainPage();
   // Обработчики для навигационных кнопок
  const tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach(button => {
    button.addEventListener("click", function(evt) {
      openPage(evt, this.getAttribute('data-page'));
    });
  });
});

function mainPage() {
  let mainShow = document.getElementById("main-page");
  mainShow.style.display = "block";
}

function openPage(evt, pageName) {
  let i, tabcontent, tablinks;
  
  // Скрытие всех контентов
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  } 
  
  // Удаление класса "active" у всех кнопок
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показ выбранного контента и добавление класса "active" к кнопке
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";

  // Прокрутка страницы вверх
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


/*Слайды*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*GPT VERSION */

/*END GPT VERSION */

/*Слайды лов стори*/
let slideIndexLoveStory = 1;
showSlidesLoveStory(slideIndexLoveStory);

function plusSlidesLoveStory(n) {
  showSlidesLoveStory(slideIndexLoveStory += n);
}

function currentSlideLoveStory(n) {
  showSlidesLoveStory(slideIndexLoveStory = n);
}

function showSlidesLoveStory(n) {
  let i;
  let slidesLoveStory = document.getElementsByClassName("mySlidesLS");
  let dotsLoveStory = document.getElementsByClassName("dotLS");
  if (n > slidesLoveStory.length) {slideIndexLoveStory = 1}    
  if (n < 1) {slideIndexLoveStory = slidesLoveStory.length}
  for (i = 0; i < slidesLoveStory.length; i++) {
    slidesLoveStory[i].style.display = "none";  
  }
  for (i = 0; i < dotsLoveStory.length; i++) {
    dotsLoveStory[i].className = dotsLoveStory[i].className.replace(" active", "");
  }
  slidesLoveStory[slideIndexLoveStory-1].style.display = "block";  
  dotsLoveStory[slideIndexLoveStory-1].className += " active";
}

/*Слайды эвенты*/
let slideIndexEvents = 1;
showSlidesEvents(slideIndexEvents);

function plusSlidesEvents(n) {
  showSlidesEvents(slideIndexEvents += n);
}

function currentSlideEvents(n) {
  showSlidesEvents(slideIndexEvents = n);
}

function showSlidesEvents(n) {
  let i;
  let slidesEvents = document.getElementsByClassName("mySlidesEV");
  let dotsEvents = document.getElementsByClassName("dotEV");
  if (n > slidesEvents.length) {slideIndexEvents = 1}    
  if (n < 1) {slideIndexEvents = slidesEvents.length}
  for (i = 0; i < slidesEvents.length; i++) {
    slidesEvents[i].style.display = "none";  
  }
  for (i = 0; i < dotsEvents.length; i++) {
    dotsEvents[i].className = dotsEvents[i].className.replace(" active", "");
  }
  slidesEvents[slideIndexEvents-1].style.display = "block";  
  dotsEvents[slideIndexEvents-1].className += " active";
}