function toggle() {
    var navmenu = document.getElementById("navmenu");
    navmenu.classList.toggle("active");

}



// slideshow
let flag = 0;

function controler(x) {
    flag = flag + x;
    slideshow(flag);
    resetTimer();
}

slideshow(flag);
function slideshow(num){
    let allslides = document.getElementsByClassName('slides');
    if(num == allslides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = allslides.length-1;
        num  = allslides.length-1;
    }
    
    for(let y of allslides){
        y.style.display = "none";
    }

    allslides[num].style.display = "block";

}
function autoplay() {
    controler(1);
}
function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoplay,5000);
}
let timer = setInterval(autoplay,5000);

