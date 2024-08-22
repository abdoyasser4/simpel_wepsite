let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains1 =document.getElementById('mountains1');
let mountains2 =document.getElementById('mountains2');
let river =document.getElementById('river');
let boat =document.getElementById('boat');
let mountains3 =document.getElementById('mountains3');
let logo =document.getElementById('logo');

onscroll =()=>{
    let value=scrollY;
    stars.style.left=value +'px';
    moon.style.top=scrollY *4 +'px';
    mountains1.style.top=scrollY*1.5  +'px';
    mountains2.style.top=scrollY *1.2 +'px';
    river.style.top=scrollY  +'px';
    boat.style.top=scrollY  +'px';
    boat.style.left=scrollY*3  +'px';
    if(scrollY >=90){
        logo.style.fontSize=90  +'px';
        if(scrollY >= 460){
            logo.style.display='none';
        }else{
            logo.style.display='block';
        }
    }
    else{
        logo.style.fontSize=scrollY  +'px';
        logo.style.position='fixed';
    }

    if (scrollY>=95) {
        document.querySelector('.main').style.background='linear-gradient(#2b1962, #18094e)';
     
    }else{
        document.querySelector('.main').style.background='linear-gradient(#000000 , #38094e)';
    }
}