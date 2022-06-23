var button = $(".saveBtn");

$(document).ready(function(){
    var date = moment().format("dddd MMM Do");
    $("#currentDay").text(date);
})

function currentTime(){
    var current=moment().hours();
    var time =$(".time-block");
    time.each(function(){
        var hour=parseInt($(this).toLocaleString("id"))
        if( hour === current){
            $(this).children(".col-sm-10").attr("class","present col-sm-10")

        } else if (current > hour){
            $(this).children(".col-sm-10").attr("class","past col-sm-10")
        } else {
            $(this).children(".col-sm-10").attr("class","future col-sm-10")
        }
    })
}

currentTime();


button.on("click",function(event){
    event.preventDefault();
    var text = $(this).siblings("col-sm-10").val().replace(/[""]+/g,"");
    var parent=$(this).parent().attr("id");

    localStorage.setItem(parent,JSON.stringify(text));


});

$("#6am textarea").val(localStornge.getItem("6am").replace(/[""]+/g,""));
$("#7am textarea").val(localStornge.getItem("7am").replace(/[""]+/g,""));
$("#8am textarea").val(localStornge.getItem("8am").replace(/[""]+/g,""));
$("#9am textarea").val(localStornge.getItem("9am").replace(/[""]+/g,""));
$("#10am textarea").val(localStornge.getItem("10am").replace(/[""]+/g,""));
$("#11am textarea").val(localStornge.getItem("11am").replace(/[""]+/g,""));
$("#12pm textarea").val(localStornge.getItem("12pm").replace(/[""]+/g,""));
$("#1pm textarea").val(localStornge.getItem("1pm").replace(/[""]+/g,""));
$("#2pm textarea").val(localStornge.getItem("2pm").replace(/[""]+/g,""));
$("#3pm textarea").val(localStornge.getItem("3pm").replace(/[""]+/g,""));
$("#4pm textarea").val(localStornge.getItem("4pm").replace(/[""]+/g,""));
$("#5pm textarea").val(localStornge.getItem("5pm").replace(/[""]+/g,""));
$("#6pm textarea").val(localStornge.getItem("6pm").replace(/[""]+/g,""));
