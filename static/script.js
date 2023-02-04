// IMAGE SLIDER 
var img = document.getElementById('image');

var slides=['photos/slider-2.jpg','photos/slider-3.jpg','photos/slider-4.jpg','photos/slider-5.jpg','photos/slider-6.jpg','photos/slider-1.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    img.innerHTML = "<img src="+slides[Start-1]+">";  
}
setInterval(slider,2000);


// SCROLL FUNCTION ABOUT SECTION 
function scrollToDiv(){ 
    if(location.pathname == "/"){
    element= document.getElementById('about');
    element.scrollIntoView()
    }
    else{
    location.replace('http://localhost/#about');
    }
}


//NAVBAR DROPDOWN
dropDown = document.querySelector('.dropDown');
navbar = document.querySelector('#navbar');
navList = document.querySelector('.navList');

dropDown.addEventListener('click',()=>{
    navList.classList.toggle('visibilityNav');
    navbar.classList.toggle('hNav');
});
