const tahmin=document.getElementById("tahmin");
const  btn=document.getElementById("btn");
const sonuc=document.getElementById("sonuc");
const between=document.getElementById("between");



let random=Math.floor(Math.random()*101);
let hak=5;

console.log(random);
btn.addEventListener('click',(e)=>{
    if(tahmin.value<0){
        alert("Girdiğiniz sayı pozitif sayı olmalı ");
             tahmin.value="";
    }
    else if(!tahmin.value){
        
        alert("Lütfen 0-100 arası sayı giriniz: ");
        tahmin.value="";
    }
    else if(tahmin.value>100){
        alert("Girdiğiniz sayı 100 den büyük olmamalı ");
        tahmin.value="";
    }
      
       else if(tahmin.value.toString()===random.toString()){
            // sonuc.innerHTML=`<p>Tebrikler tahmin ettiniz</p>`;
            // tahmin.value="";
            // hak=0;
            ysYonlendir();
        
        }   
        else if(random>=50){        
            if(tahmin.value<random){
            //  alert("Tahmin edilen sayı , rastgele sayıdan küçüktür")
            //   sonuc.innerHTML=`<p>${tahmin.value} - 100 arasında bir sayı giriniz</p>`;
            sonuc.innerHTML=`<p>${tahmin.value}-100 arasında bir sayı giriniz</p>`;
            tahmin.value="";
            }
            else if(tahmin.value>random){
                sonuc.innerHTML=`<p> 50- ${tahmin.value} arasında bir sayı giriniz</p>`;
                tahmin.value="";
            }
        }    
        else if(random<50){
           
            if(tahmin.value>random){
                // alert("Tahmin edilen sayı , rastgele sayıdan küçüktür")
                 sonuc.innerHTML=`<p>0 - ${tahmin.value} arasında bir sayı giriniz</p>`;
                tahmin.value="";
 
             }
             else if(tahmin.value<random){
                 sonuc.innerHTML=`<p>${tahmin.value} - 50 arasında bir sayı giriniz</p>`;
                 tahmin.value="";
             }
        }
        
               //sonuc.innerHTML=`<p>${tahmin.value}</p>`;
      
            
  
        
        // else if(random<50){
        //     sonuc.innerHTML=`<h2>${tahmin.value}</p>`;
        // }
      
    });

    function ysYonlendir(){
      window.location.href='winner.html';
    }
    