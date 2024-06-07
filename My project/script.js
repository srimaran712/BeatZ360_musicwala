const dealsimage = document.querySelector(".deals-image");
const sub_content = document.querySelector(".left-sub-content");
var circle_one =document.querySelector(".Circle5");
const circle_two=document.querySelector(".Circle3");
const circle_three=document.querySelector(".Circle4");
circle_one.addEventListener("click",function(){
    dealsimage.style.backgroundImage="url(/skullcandy/earbuds/skullcandy-earbud-Push-active-wireless.jpg)";
    sub_content.innerText="Skull Candy Grind ";
});