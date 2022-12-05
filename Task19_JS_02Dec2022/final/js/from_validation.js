// var popup=document.getElementById("popup_1");


var education="";
var check="";
var hobby="";
// function result1(){
    
//     if    // document.getElementById("cgpa").removeAttribute("disabled");
//  document.getElementById("board1").style.display="block"
//         document.getElementById("res1").setAttribute("value","10th")
    
// }

function result1(){
    var value=document.getElementById("res1").value;
}
function result2(){
    var value=document.getElementById("res2").value;
    console.log(value);
    // document.getElementById("cgpa").removeAttribute("disabled");
    document.getElementById("res2").setAttribute("value","PUC/Diploma")
}
function result3(){
    
    document.getElementById("cgpa").removeAttribute("disabled");
    document.getElementById("res3").setAttribute("value","BE/Btech")

}
function submitForm(){
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
  
       var h1 = document.getElementById("sing");
       var h2 = document.getElementById("dance");
       var h3 = document.getElementById("cooking");
       var h4 = document.getElementById("swim");
       var h5 = document.getElementById("paint");
       var h6 = document.getElementById("artcraft");
       var h7 = document.getElementById("novelreading");
       var h8 = document.getElementById("gardening");
       var h9 = document.getElementById("writing");
       var h10 = document.getElementById("theatre");
    //    var s=h1.checked;
    //    console.log(s);
    //    console.log(h6.value);
       var hobbies=[h1,h2,h3,h4,h5,h6,h7,h8,h9,h10];
    //    console.log(hobbies);
    //    console.log(hobbies[].checked);
    //    var hobby="";
       for(var i=0;i<hobbies.length;i++)
        {  
            if(hobbies[i].checked==true)
           {
               console.log(hobbies[i].checked);
           switch(i)
           {
               case 0:
                   check=h1.value;
                //    console.log(check);
                   break;

               case 1:
                   check=h2.value;
                //    console.log(check);
                   break;
               case 2:
                   check=h3.value;
                   break;
               case 3:
                   check=h4.value;
                   break;
               case 4:
                   check=h5.value;
                   break;
               case 5:
                   check=h6.value;
                   break;
               case 6:
                   check=h7.value;
                   break;
               case 7:
                   check=h8.value;
                   break;
               case 8:
                   check=h9.value;
                   break;
               case 9:
                   check=h10.value;
                   break;
                   
           }

           hobby= hobby+" "+","check;
            // console.log(hobby);
       }
      
   
       }
      
       var message=`Hi HR 
       My name is ${fname} ${lname}
       I've completed ${education} with
       ${cgpa} % or cgpa
       And my mail id is"${mailId}"
       And my hobbies are "${hobby}"
       Thank you ${fname} ${lname}`;
       console.log(message);
       
       document.getElementById("popup_1").classList.toggle("active");
       document.getElementById("display_Content").innerHTML=message;
    }
   

    




