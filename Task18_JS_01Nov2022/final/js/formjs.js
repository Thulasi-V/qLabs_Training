var education="";
var check="";
var score="";
function result1(){
    
        document.getElementById("cgpa").removeAttribute("disabled");
        document.getElementById("res1").setAttribute("value","10th")
    
}
function result2(){
    
    document.getElementById("cgpa").removeAttribute("disabled");
    document.getElementById("res2").setAttribute("value","PUC/Diploma")

}
function result3(){
    
    document.getElementById("cgpa").removeAttribute("disabled");
    document.getElementById("res3").setAttribute("value","BE/Btech")

}
function Submits(){
    var fname= document.getElementById("fname").value;
    var lname= document.getElementById("lname").value;
    var mailId=document.getElementById("mail").value;
    var cgpa=document.getElementById("cgpa").value;
    var res1 = document.getElementById("res1").getAttribute("value");
    var res2 = document.getElementById("res2").getAttribute("value");
    var res3 = document.getElementById("res3").getAttribute("value");

    if(res1 != null){
      education=res1;
       }
    
       else if(res2 != null)
       {
        education=res2;
       }
    
       else{
        education=res3;
       }
  
    //    var h1 = document.getElementById("sing");
    //    var h2 = document.getElementById("dance");
    //    var h3 = document.getElementById("cooking");
    //    var h4 = document.getElementById("swim");
    //    var h5 = document.getElementById("paint");
    //    var h6 = document.getElementById("art_craftt");
    //    var h7 = document.getElementById("novel_reading");
    //    var h8 = document.getElementById("gardening");
    //    var h9 = document.getElementById("writing");
    //    var h10 = document.getElementById("theatre_plays");
    // //    var s=h1.checked;
    // //    console.log(s);
    // //    console.log(h1.value);
    //    var arr =[h1,h2,h3,h4,h5,h6,h7,h8,h9,h10];
    // //    console.log(arr);
    //    console.log(arr[0].value);
    //    for(var i=0 ;i<arr.length; i++)
    //    { console.log(arr[i].checked);
    //     if(arr[i].checked==true)
    //        {
    //            // console.log(arr[i].value);
    //        switch(i)
    //        {
    //            case 0:
    //                check=h1.value;
    //                break;
    //            case 1:
    //                check=h2.value;
    //                break;
    //            case 2:
    //                check=h3.value;
    //                break;
    //            case 3:
    //                check=h4.value;
    //                break;
    //            case 4:
    //                check=h5.value;
    //                break;
    //            case 5:
    //                check=h6.value;
    //                break;
    //            case 6:
    //                check=h7.value;
    //                break;
    //            case 7:
    //                check=h8.value;
    //                break;
    //            case 8:
    //                check=h9.value;
    //                break;
    //            case 9:
    //                check=h10.value;
    //                break;
                   
    //        }
    //        score= score+", "+check;
    //    }
           
    //    }
      
       var message=`Hi HR 
    My name is ${fname} ${lname}\n
    I've completed ${education} with
    ${cgpa}
    And my mail id is"${mailId}"
    Thank you ${fname} ${lname}`;
    console.log(message);
    document.getElementById("message").innerHTML=message;
   }

    




