//a^2 + b^2 = (a+b)^2-2ab//
function Answer(){
    var a= document.getElementById("num1").value;
    var b= document.getElementById("num2").value;
     res=((a*a)+(b*b)+(2*a*b))-(2*a*b);
     alert("Answer:"+ res);
     console.log(res);
}