function timer() {
  var sec = 10;
  var timer = setInterval(function () {
    console.log(sec);
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

timer();
