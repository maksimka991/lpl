 
<?php
// ----------------------------конфигурация-------------------------- //  
$adminemail="maksimka9112007@gmail.com";   
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды  
$backurl="sadf";  // На какую страничку переходит после отправки письма  
//---------------------------------------------------------------------- //   
// Принимаем данные с формы  
$name=$_POST['name'];  
$telefon=$_POST['telefon'];  
 
$msg="  
 цей чувак скачав прайс <br>
 Имя: $name <br>
 telefon: $telefon   
";  
 
mail("$adminemail", "$date $time лодки $name", "$msg"); 

 // Выводим сообщение пользователю  
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 100); 
//--></script> 
 
$msg  
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit; 