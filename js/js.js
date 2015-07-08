 function testBlock() {  

      var b_o_1 = document.getElementById('b_o_1');
      var b_o_2 = document.getElementById('b_o_2');
      var b_o_3 = document.getElementById('b_o_3');

      var r1 = document.getElementById('r1');
      var r2 = document.getElementById('r2');
      var r3 = document.getElementById('r3');


     if (r1.checked == true ) 
     {
          b_o_1.style.display = 'block';
          b_o_2.style.display = 'none'; 
          b_o_3.style.display = 'none';  
     }

   if (r2.checked == true ) 
     { 
          b_o_1.style.display = 'none'; 
          b_o_2.style.display = 'block'; 
          b_o_3.style.display = 'none';  
     }

      if (r3.checked == true ) 
     { 
          b_o_1.style.display = 'none'; 
          b_o_2.style.display = 'none'; 
          b_o_3.style.display = 'block';  
     }
      
 
 }

 