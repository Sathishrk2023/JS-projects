let scrollbar = document.querySelector('.gallery');
let backBtn = document.getElementById('backbtn');
let nextBtn = document.getElementById('nexkbtn');

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollbar.scrollLeft += evt.deltaY;
    scrollbar.style.scrollBehavior = "auto";

})
backBtn.addEventListener('click',()=>{
    scrollbar.style.scrollBehavior = "smooth";
    scrollbar.scrollRight -=1000;
})
nextBtn.addEventListener('click',()=>{
    scrollbar.style.scrollBehavior = "smooth";
    scrollbar.scrollRight +=1000;
})