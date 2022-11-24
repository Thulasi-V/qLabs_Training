//(a-b)^3 = a^3-3a^2b+3ab^2– b^3//
function Answer(){
    var a =document.getElementById("num1").value;
    var b =document.getElementById("num2").value;

    res= (a*a*a)-(3*a*a*b)+(3*a*b*b)-(b*b*b);
  alert("Answer:"+res);
  console.log(res);
}