$(document).ready(function () {
  //   $(".element").rotate(180);

  //   $("h1").css({ "background-color": "yellow", "font-size": "200%" });
  $(".main__header").css({
    background: "red",
  });
  $("main__header").css({
    background: "red",
  });

  $(function () {
    function myRepeat() {
      $("h1").delay(150).fadeOut(1000).delay(150).fadeIn(1000);
    }
    setInterval(myRepeat, 500);
  });
});
console.log(jQuery);
