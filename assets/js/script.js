
var button = $(".saveBtn")


$(document).ready(function() {
    var date = moment().format("dddd MMMM Do YYYY");
    $("#currentDay").html(date);

  
    function currentTime() {
        var currenthour = moment().hour()
        var blocktime = $(".time-block");
        blocktime.each(function() {
            var hour = parseInt($(this).attr("id"))
            if (hour === currenthour) {
                $(this).children(".col-sm-10").attr("class", "present col-sm-10")
            } else if (currenthour > hour) {
                $(this).children(".col-sm-10").attr("class", "past col-sm-10")
            } else {
                $(this).children(".col-sm-10").attr("class", "future col-sm-10")
            }
        })
    };
    currentTime()

    
    button.on("click", function(event) {
        event.preventDefault();
        var text = $(this).siblings(".col-sm-10").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, JSON.stringify(text));
    });

  
    $("#9 textarea").val(localStorage.getItem("9"));
    $("#10 textarea").val(localStorage.getItem("10"));
    $("#11 textarea").val(localStorage.getItem("11"));
    $("#12 textarea").val(localStorage.getItem("12"));
    $("#13 textarea").val(localStorage.getItem("13"));
    $("#14 textarea").val(localStorage.getItem("14"));
    $("#15 textarea").val(localStorage.getItem("15"));
    $("#16 textarea").val(localStorage.getItem("16"));
    $("#17 textarea").val(localStorage.getItem("17"));
});
