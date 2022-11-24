//(a - b -c) ^2 = a^2 + b^2 + c^2 -2ab +2bc - 2ca)
function Answer(){
    var a= document.getElementById("num1").value;
    var b= document.getElementById("num2").value;
    var c= document.getElementById("num3").value;

    res=(a*a)+(b*b)+(c*c)-2*(a*b)+2*(b*c)-2*(a*c);
     alert("Answer:"+res);
     console.log(res);

}
