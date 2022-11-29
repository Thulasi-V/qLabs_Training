var num=parseInt(prompt("Enter the table of:"));
var r=prompt("Enter the range of table of:");
var n=typeof(num);
console.log(typeof(num));

if(n =='number')
{
    if(num<=1){
        alert("Enter the Positive number");
    }
    
    else{
        for( i=1 ; i<=r; i++)
        {
           res =num*i;
        console.log(res);
        }
    
    }

}



