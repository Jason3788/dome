<?php
header('Content-Type:text/plain; charset=utf-8');
  $arry = array();
  $arry ['123'] = array("username"=>"超薄","size"=>"D");
  $arry ['124'] = array("username"=>"超薄","size"=>"b");
  $arry ['125'] = array("username"=>"超薄","size"=>"n");
  $arry ['126'] = array("username"=>"超薄","size"=>"Dq");
  
  $code = $_POST['code'];
  $scode = $arry[$code];

  echo "<ul><li>姓名：$scode[username]</li><li>大小：$scode[size]</li></ul>"
  




?>





