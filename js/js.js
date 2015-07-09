 function testBlock() {

     var b_o_1 = document.getElementById('b_o_1');
     var b_o_2 = document.getElementById('b_o_2');
     var b_o_3 = document.getElementById('b_o_3');

     var r1 = document.getElementById('r1');
     var r2 = document.getElementById('r2');
     var r3 = document.getElementById('r3');


     if (r1.checked == true) {
         b_o_1.style.display = 'block';
         b_o_2.style.display = 'none';
         b_o_3.style.display = 'none';
     }

     if (r2.checked == true) {
         b_o_1.style.display = 'none';
         b_o_2.style.display = 'block';
         b_o_3.style.display = 'none';
     }

     if (r3.checked == true) {
         b_o_1.style.display = 'none';
         b_o_2.style.display = 'none';
         b_o_3.style.display = 'block';
     }


 }


 function testBlock2() {

     var gal_one_img1 = document.getElementById('gal_one_img1');
     var gal_one_img2 = document.getElementById('gal_one_img2');
     var gal_one_img3 = document.getElementById('gal_one_img3');
     var gal_one_img4 = document.getElementById('gal_one_img4');
     var gal_one_img5 = document.getElementById('gal_one_img5');

     var galer1 = document.getElementById('galer1');
     var galer2 = document.getElementById('galer2');
     var galer3 = document.getElementById('galer3');
     var galer4 = document.getElementById('galer4');
     var galer5 = document.getElementById('galer5');


     if (galer1.checked == true) {
         gal_one_img1.style.display = 'block';
         gal_one_img2.style.display = 'none';
         gal_one_img3.style.display = 'none';
         gal_one_img4.style.display = 'none';
         gal_one_img5.style.display = 'none';
     }

     if (galer2.checked == true) {
         gal_one_img1.style.display = 'none';
         gal_one_img2.style.display = 'block';
         gal_one_img3.style.display = 'none';
         gal_one_img4.style.display = 'none';
         gal_one_img5.style.display = 'none';
     }

     if (galer3.checked == true) {
         gal_one_img1.style.display = 'none';
         gal_one_img2.style.display = 'none';
         gal_one_img3.style.display = 'block';
         gal_one_img4.style.display = 'none';
         gal_one_img5.style.display = 'none';
     }
     if (galer4.checked == true) {
         gal_one_img1.style.display = 'none';
         gal_one_img2.style.display = 'none';
         gal_one_img3.style.display = 'none';
         gal_one_img4.style.display = 'block';
         gal_one_img5.style.display = 'none';
     }

     if (galer5.checked == true) {
         gal_one_img1.style.display = 'none';
         gal_one_img2.style.display = 'none';
         gal_one_img3.style.display = 'none';
         gal_one_img4.style.display = 'none';
         gal_one_img5.style.display = 'block';
     }

 }



    var date= new Date;
    var today=date.getMinutes();
    var metka=false;
    var hours= 1,minutes=15,seconds=59;

    function load_page(){
        setInterval('timer()',1000);
      }
        function timer()
      {
        /* alert(metka);*/
         if(seconds==0)
            seconds=59;
        if(minutes==0)
            minutes=59;
         document.getElementById('hours').innerHTML='01';
         document.getElementById('minutes').innerHTML=minutes;
         document.getElementById('secund').innerHTML=seconds;
         if((seconds==0)&&(minutes==0)&&(metka==false))
         {
            hours=23;
            seconds=59;
                  minutes=59;
         }
         else
         {
         seconds--;
            if(seconds==0)
          minutes--;
          if(minutes==0)
          hours--;
         }
          metka=true;
      }
