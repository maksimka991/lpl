 
<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="maksimka9112007@gmail.com";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl=" ";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- //  
 
// Принимаем данные с формы 
 
$name=$_POST['name'];  
$telefon=$_POST['telefon'];  


$msg=$_POST['message']; 
  
 
 
 
$msg="  
 
<p>Имя: $name</p> 
<p>telefon: $telefon</p>  
<p>Сообщение: $msg</p>  
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg"); 
 
 
 
 
 
?>