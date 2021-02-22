//question 1
var min = 60 ;
var sec = 60 ;
function onSubmitHandler(){
    var min = 60 ;
    var sec = 60 ;
     var userHour = document.getElementById("hour").value;
     var tSeconds =   min * sec * userHour ;
      document.getElementById("ans1").innerHTML = tSeconds ;
}
// question 2
function onSubmitHandler1(){
    var Days = 365 ;
    var userAge = document.getElementById("age").value;
    var ageInDays = Days * userAge ;
     document.getElementById("ans2").innerHTML = ageInDays ;
}
// question 3
function onSubmitHandler2(){
    var open = "(";
    var close = ")"
    var coma = ",";
    var userValue1 = document.getElementById("val1").value;
    var userValue2 = document.getElementById("val2").value;
    var userValue3 = document.getElementById("val3").value;
    var invArray1 = -1 * userValue1 ; 
    var invArray2 = -1 * userValue2 ;
    var invArray3 = -1 * userValue3 ;  
    document.getElementById("open").innerHTML = open;
    document.getElementById("ans3").innerHTML = invArray1;
    document.getElementById("coma1").innerHTML = coma;
    document.getElementById("ans3-2").innerHTML = invArray2;
    document.getElementById("coma2").innerHTML = coma;
    document.getElementById("ans3-3").innerHTML = invArray3;
    document.getElementById("close").innerHTML = close;
}
//question 4
function onSubmitHandler3() {
    var userSt1 = document.getElementById("str1").value;
    var userSt2 = document.getElementById("str2").value;
    if (userSt1.length === userSt2.length) {
        result = document.getElementById("ans4").innerHTML = "Both have equal length";
    }
        else{
            result = document.getElementById("ans4").innerHTML = "Both have not equal length";

        }
    }
// question 5
function  onSubmitHandler4() {
    var str1 = '"' ;
    var str2 = '"' ;
    var open1 = "[";
    var close1 = "]";
    var coma1 = ",";
    var userInt1 = document.getElementById("int1").value;
    var userInt2 = document.getElementById("int2").value;
    var userInt3 = document.getElementById("int3").value;
    document.getElementById("open1").innerHTML = open1 ;
    document.getElementById("st1").innerHTML = str1 ;
    document.getElementById("ans5").innerHTML = userInt1;
    document.getElementById("st2").innerHTML = str1 ;
    document.getElementById("coma3").innerHTML = coma1 ;
    document.getElementById("st3").innerHTML = str2 ;
    document.getElementById("ans5-2").innerHTML = userInt2;
    document.getElementById("st4").innerHTML = str2;
    document.getElementById("coma4").innerHTML = coma1 ;
    document.getElementById("st5").innerHTML = str1 ;
    document.getElementById("ans5-3").innerHTML = userInt3 ;
    document.getElementById("st6").innerHTML = str1;
    document.getElementById("close1").innerHTML = close1;
}
//question no 6
function onSubmitHandler5(){
    var leapYear = document.getElementById("year").value ;
    var  reminder = parseInt(leapYear) % 4 ;
     if (reminder == 0 ) {
         document.getElementById("ans6").innerHTML = "leap year";
         }
     else{
        document.getElementById("ans6").innerHTML = "not a leap year";
     }
}
//question 7
function onSubmitHandler6() {
    let calculate ;
    var rC = document.getElementById("i1").value;
    var nC = document.getElementById("i2").value;
    var aC = document.getElementById("i3").value;
    if (rC<nC) {
        alert("New Cases Cannot Be More than Recovered Cases");
        }
        else{
            calculate =Math.ceil(aC/(rC-nC));
            document.getElementById("ans7").innerHTML = `${calculate} Days to End Corona`;  

            }
    
}
   