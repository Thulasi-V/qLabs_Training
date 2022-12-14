
<?php
$title = '- Number-Sort-Validation';
require_once('common_files/header.php');
?>

<?php
$number1 = $_POST['num1'];
$number2 = $_POST['num2'];
$number3 = $_POST['num3'];
$number4 = $_POST['num4'];
$number5 = $_POST['num5'];



echo "<p>Entered Number 1: <strong>$number1 </strong></p>";
echo "<p>Entered Number 2: <strong>$number2 </strong></p>";
echo "<p>Entered Number 3: <strong>$number3 </strong></p>";
echo "<p>Entered Number 4: <strong>$number4 </strong></p>";
echo "<p>Entered Number 5: <strong>$number5 </strong></p>";



$numbers= array($number1, $number2, $number3, $number4, $number5);
sort($numbers);
$arrlength = count($numbers);

 echo "<p>Ascending Order: </p>";
for($i=0; $i<$arrlength; $i++){
    echo"<p>$numbers[$i]</p>";
    
   
}

// Decending order
// $numbers= array($number1, $number2, $number3, $number4, $number5);
rsort($numbers);
// echo "$numbers[0]";

$arrlength = count($numbers);
// echo($arrlength);
echo "<p>Descending Order: </p>";
for($i=0; $i<$arrlength; $i++){
    // echo "<p>Ascending Order: <strong>$numbers[$i]</strong></p>";

    echo"<p>$numbers[$i]</p>";


}
?>








<?php
require_once('common_files/header.php');
?>