const actual_marks=625;
function calculate_grade(){

var kannada = parseInt(document.getElementById("kannada").value);
    if(kannada < 0)
    {
        alert("Enter positive number for kannada");
    }
    else if(kannada > 125){
        alert("value should be less than 125 for kannada");
    }
    else if(kannada < 35)
    {
        alert("Failed in kannada");
    }
var english = parseInt(document.getElementById("english").value);
    if(english < 0)
    {
         alert("Enter positive number for english");
    }
    else if(english > 100){
        alert("value should be less than 100 for english ");
    }
    else if(english < 35)
    {
        alert("Failed in english");
    }
var hindi = parseInt(document.getElementById("hindi").value);
    if(hindi < 0)
    {
         alert("Enter positive number for hindi");
    }
    else if(hindi > 100){
         alert("value should be less than 100 for hindi");
    }
    else if(hindi < 35)
    {
        alert("Failed in hindi");
    }
var science = parseInt(document.getElementById("science").value);
    if(science < 0)
    {
          alert("Enter positive number for science");
    }
    else if(science > 100){
         alert("value should be less than 100 for science");
    }
    else if(science < 35)
    {
        alert("Failed in science");
    }
var s_science = parseInt(document.getElementById("s_science").value);
    if(s_science < 0)
    {
        alert("Enter positive number for s_science");
    }
    else if(s_science > 100){
        alert("value should be less than 100 for s_science");
    }
    else if(s_science < 35)
    {
        alert("Failed in s_science");
    }
var mathametics = parseInt(document.getElementById("mathametics").value);
    if(mathametics < 0)
    {
        alert("Enter positive number for mathametics");
    }
    else if(mathametics > 100){
        alert("value should be less than 100 for mathametics");
    }
    else if(mathametics < 35)
    {
        alert("Failed in mathametics");
    }

var Obtainedmarks = kannada + english + hindi + science + s_science + mathametics;
var percentage = (Obtainedmarks/actual_marks)*100;

if(Obtainedmarks >= 600 && Obtainedmarks <= 625){
    alert("Congrats! Your Grade is S and percentage is:"+percentage);
}

else if(Obtainedmarks >= 590 && Obtainedmarks <= 600){

 alert("Congrats! Your Grade is A and percentage is"+percentage);
}
else if(Obtainedmarks >= 560 && Obtainedmarks <= 590){

    alert("Congrats! Your Grade is B and percentage is"+percentage);
 }
 else if(Obtainedmarks >= 530 && Obtainedmarks <= 560){

    alert("Congrats! Your Grade is C and percentage is "+percentage);
   }
   else if(Obtainedmarks >= 465 && Obtainedmarks <= 560){
   
       alert("Congrats! Your Grade is D and percentage is"+percentage);
    }
    else if(Obtainedmarks >= 310 && Obtainedmarks <= 465){

        alert("Congrats! Your Grade is E and percentage is "+percentage);
       }
       else if(Obtainedmarks >= 200 && Obtainedmarks <= 310){
       
           alert("Congrats! Your Grade is F and percentage is"+percentage);
        }
       
else{
    alert("Better luck next time"+percentage);
}
}
