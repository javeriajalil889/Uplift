var button = $(".submitBtn");

button.on("click", storeVal)

var time;

function storeVal() {
  time = $(".time").val();

  if (time < 1) {
    alert("please insert a number greater than 0");
  }
  else {
    var timer = setInterval(countDown, 1000);
  }
  event.preventDefault();
}

function countDown() {
  if (time < 0) {
    alert("All done! Refresh the page if you would like to do this again");
    clearInterval(timer);
  } else {
    var counter = $(".counter");
    counter.text(`Time left: ${time}`);
    time--;
  }
}