//display current day
$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY")); 

//function to display what color to the time block
var currentHour = dayjs().hour(); 
function hourColor() {
    $(".time-block").each(function () {
        var currentBlock = parseInt($(this).attr("id").split("hour")[1]);
        if (currentBlock < currentHour) {
            $(this).addClass("past");
        }
        else if (currentBlock === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}
hourColor();

//save button to save text to local storage
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 
    localStorage.setItem(time, text);
});
    
//load saved text from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


