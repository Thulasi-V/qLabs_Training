<?php
$title = '-State Validation';
require_once('common_files/header.php');
?>

<?php
$state= $_POST['state'];
$radiobuttons=$_POST['choose'];
$phnumber=$_POST['phnumber'];

echo "<p>Selected State:<strong>$state</strong></p>";
echo "<p>From Karnataka:<strong>$radiobuttons</strong></p>";
echo "<p>Phone Number:<strong>$phnumber</strong></p>";



?>









<?php
require_once('common_files/header.php');
?>