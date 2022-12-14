<?php

$title=' -State';
require_once('common_files/header.php');
?>


<form action="cardValidation.php" method="POST">
    <lable id="states" name="state">State:</lable><br>
    <?php
    require_once('includes/india_states.php');
    ?>

<br><lable>From Karnataka:</lable><br>
    <!-- <label for="yes">Yes</label> -->
    <input type="radio" id="yes" name="choose" value="Yes" >Yes
    <!-- <label for="no">No</label> -->
    <input type="radio" id="no" name="choose"  value="No">No<br>
    <lable>Phone Number:</lable><br>
    <input type="text" id="phno" name="phnumber" maxlength="10" minlength="10" required>
    <br>
     <?php
     $phnumber=$_POST['phnumber'];
     var_dump(is_numeric(  $phnumber))
     
     
     
     
     ?>
<input type="submit" value="submit">

</form>



<?php

$title='';
require_once('common_files/header.php');
?>