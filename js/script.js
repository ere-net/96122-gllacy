(function () {

  ymaps.ready(init);
  var myMap,
  myPlacemark;

  function init(){
    myMap = new ymaps.Map ("map", {
      center: [59.93958168, 30.32764115],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: "yandex#search"
    });

    myPlacemark = new ymaps.Placemark([59.93866675783276,30.32307250000002], {
      hintContent: "ул. Большая Конюшенная 19/8, Санкт-Петербург"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.png",
      iconImageSize: [218, 142],
      iconImageOffset: [-40, -142]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  if (document.querySelector(".btn--feedback")) {

  var feedback = document.querySelector(".btn--feedback");
  var feedbackPopup = document.querySelector(".feedback");
  var feedbackClose = feedbackPopup.querySelector(".feedback__close");
  var form = feedbackPopup.querySelector("form");
  var author = feedbackPopup.querySelector("[name='feedback-author']");
  var email = feedbackPopup.querySelector("[name='feedback-email']");
  var comment = feedbackPopup.querySelector("[name='feedback-comment']");

  feedback.addEventListener("click", function (event) {
    event.preventDefault();
    feedbackPopup.classList.add("feedback__show");
    author.focus();
  });

  form.addEventListener("submit", function (event) {
    if (!(author.value && email.value && comment.value)) {
      event.preventDefault();
      feedbackPopup.classList.remove("feedback__error");
      feedbackPopup.classList.add("feedback__error");
    } else {
      localStorage.setItem("author", author.value);
    }
  });

  feedbackClose.addEventListener("click", function (event) {
    event.preventDefault();
    feedbackPopup.classList.remove("feedback__show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
      if (feedbackPopup.classList.contains("feedback__show")) {
        feedbackPopup.classList.remove("feedback__show");
      }
    }
  });

  }
})();