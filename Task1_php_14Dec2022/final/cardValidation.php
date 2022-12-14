<?php
$title = '-Card Validation';
require_once('common_files/header.php');
?>

<?php
// $phnumber=$_POST['phnumber']; 
$state= $_POST['state'];
$radiobuttons=$_POST['choose'];
$phnumber=$_POST['phnumber']; 
$phno= '+91'. $phnumber;

// if(mobile_no.search())
// if($phnumber(/^[0-9]+$/)==-1||$phnumber.length !=10){
//     echo"Enter Valid number"
// }
// if(preg_match('/^[0-9]{10}+$/',$phnumber )) {
//     echo "Valid Phone Number";
//     } else {
//     echo "Invalid Phone Number";
//     }   

// $output=
// <p>Selected State:<strong>$state</strong></p>
// <p>From Karnataka:<strong>$radiobuttons</strong></p>
// <p>Phone Number:<strong>$phnumber</strong></p>

$divsec1="<div class='cardDiv'><p>Selected State:<strong>$state</strong></p>
<p>From Karnataka:<strong>$radiobuttons</strong></p>
<p>Phone Number:<strong>$phno</strong></p>
</div>";
for($i=0; $i<10; $i++)
{
    echo $divsec1;   
}
// echo $divsec1;



?>

<?php
require_once('common_files/header.php');
?>