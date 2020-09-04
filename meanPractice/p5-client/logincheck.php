<?php
session_start();
$con =mysqli_connect("localhost","root","123456")
if($con){
    echo "connection successful";
}
else{
    echo "no connection";
}
?>