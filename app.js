function toPersianNumber(n) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/[0-9]/g, (x) => persianDigits[x]);
}

var countDownDate = new Date("2025-05-01T19:30:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    toPersianNumber(days) +
    " روز " +
    toPersianNumber(hours) +
    " ساعت " +
    toPersianNumber(minutes) +
    " دقیقه " +
    toPersianNumber(seconds) +
    " ثانیه ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "مراسم آغاز شد!";
  }
}, 1000);
