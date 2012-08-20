<?php foreach($_POST as $key => $value): ?>
  <b><?php echo $key ?> : </b> <?php echo (is_array($value)) ? implode(",", $value) : $value ?> <br /> 
<?php endforeach ?>
