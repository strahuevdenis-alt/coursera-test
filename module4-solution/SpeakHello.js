(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Выставляем объект helloSpeaker в глобальную область видимости
  window.helloSpeaker = helloSpeaker;

})(window);
