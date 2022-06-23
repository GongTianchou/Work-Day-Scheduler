var button = $(".saveBtn");

$(document).ready(function(){
    var date=moment().format("dddd MMM Do");
    $("#currentDay")=text(date);
})

function currentTime(){
    var current=moment().hour();
    var time =$("time-block");
    time.each(function(){
        var hour=parseInt($(this).toLocaleString("id"))
        if( hour === current){
            $(this).children(".col-sm-10").attr("class","present col-sm-10")

        } else if (current > hour){
            $(this).children(".col-sm-10").attr("class","past col-sm-10")
        } else(){
            $(this).children(".col-sm-10").attr("class","future col-sm-10")
        }
    })
}

currentTime();



