
var myarray = [];
var myJSON = "";

// function for clear
function c(val) {
    document.getElementById("chasaweriveli").value = val;
}
// function for +, -, *, /, %
function v(val) {
    document.getElementById("chasaweriveli").value += val;
}
// function for add + or -
function neg() {
    document.getElementById("chasaweriveli").value *= -1;
}
// function for backspace numbers
function del()
    {
        var val = document.getElementById("chasaweriveli").value;
        if(val.length > 0){
        val = val.substring(0, val.length - 1);
        document.getElementById("chasaweriveli").value = val;
    }
}
// function for calculation i.e click equals to
function e() {
    try {
        var Formula = document.getElementById("chasaweriveli").value;
        var Result =eval(Formula);
        var total = "";
        document.getElementById("totalHistory").innerHTML = "0";
        c(Result)
        //console.log(Formula);
        var total = total += Formula +"="+Result;
        var item = {
        "value": total
        };
        myarray.push(item);
        var myJSON = JSON.stringify({myarray: myarray});
        localStorage.setItem("myKey", myJSON);
        document.getElementById("prnt").innerHTML = myJSON;
        document.getElementById("history").innerHTML += total+"<br/>";
        document.getElementById("totalHistory").innerHTML = myarray.length;

         //jQuery to post json object to json.php for writing to json file
        //console.log(myJSON);
        //console.log(myarray.length);
    } catch (e) {
        c('Error')
    }
}
// function for on keyup input only valid numbers and arithmetic operations
$(document).ready(function(){
    $('#chasaweriveli').bind('keyup blur',function(){
        $(this).val($(this).val().replace(/[^0-9.%/*+-]/g,''));
    });
});
// hide or show history menu
$(window).load(function(){
    $("#slideThree").click(function() {
    if($("#slideThree").is(":checked")) {
        $("#sidebar").animate({right:'0px'},200);
    }else {
        $("#sidebar").animate({right:'-400px'},200);
    }
    });

// code for drag calculator


});//]]> 
