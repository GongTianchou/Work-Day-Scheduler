var button = $(".saveBtn");

$(document).ready(function () {
  var date = moment().format("dddd MMM Do");
  $("#currentDay").text(date);
});

function currentTime() {
  var current = moment().hours();
  var time = $(".time-block");
  time.each(function () {
    var hour = parseInt($(this).toLocaleString("id"));
    if (hour === current) {
      $(this).children(".col-sm-10").attr("class", "present col-sm-10");
    } else if (current > hour) {
      $(this).children(".col-sm-10").attr("class", "past col-sm-10");
    } else {
      $(this).children(".col-sm-10").attr("class", "future col-sm-10");
    }
  });
}

currentTime();

button.on("click", function (event) {
  event.preventDefault();
  var text = $(this).siblings(".description").val();
  var parent = $(this).parent().attr("id");

  localStorage.setItem(parent, JSON.stringify(text));
});

$("#6am .description").val(localStornge.getItem("6am"));
$("#7am .description").val(localStornge.getItem("7am"));
$("#8am .description").val(localStornge.getItem("8am"));
$("#9am .description").val(localStornge.getItem("9am"));
$("#10am .descriptiona").val(localStornge.getItem("10am"));
$("#11am .description").val(localStornge.getItem("11am"));
$("#12pm .description").val(localStornge.getItem("12pm"));
$("#1pm .description").val(localStornge.getItem("1pm"));
$("#2pm .description").val(localStornge.getItem("2pm"));
$("#3pm .description").val(localStornge.getItem("3pm"));
$("#4pm .description").val(localStornge.getItem("4pm"));
$("#5pm .description").val(localStornge.getItem("5pm"));
$("#6pm .description").val(localStornge.getItem("6pm"));
