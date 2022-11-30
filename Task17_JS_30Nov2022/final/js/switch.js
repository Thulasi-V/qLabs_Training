function Submit(){
  var num=(document.getElementById("num").value);
  var  res=0;
  var total="";
    // console.log(num);
//    var a= num.length;
//    console.log(typeof(a));
    // console.log(a);
 for(var i=0; i<num.length;i++)
 {
    
    // var x=parseInt(num[i]);
    // console.log(typeof(x));
    // console.log(parseInt(x));
    switch(parseInt(num[i]))
    {
        case 0:
        res="zero";
        break;

        case 1:
        res="One";
        break;

        case 2:
        res="two";
        break;
        
        case 3:
        res="three";
        break;

        case 4:
        res="four";
        break;

        case 5:
        res="five";
        break;

        case 6:
        res="six";
        break;

        case 7:
        res="seven";
        break;

        case 8:
        res="eight";
        break;

        case 9:
        res="nine";
    }
    total=total+" "+res;
    // console.log(res);
    document.getElementById("value").innerHTML=num;
    document.getElementById("result").innerHTML=total;
 }
}







