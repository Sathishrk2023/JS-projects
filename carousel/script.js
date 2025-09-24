const images = [
    "images/img1.png",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png"
];

let index = 0;
const imgElement = document.getElementById("slide-img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showImage(i){
    imgElement.src = images[i];
}

nextBtn.addEventListener ("click" ,()=>{
    index = (index+1) % images.length;
    showImage(index);
});

prevBtn.addEventListener("click", ()=>{
    index = (index-1 + images.length)%images.length;
    showImage(index)
});

setInterval(() =>{
    index = (index + 1) % images.length;
    showImage(index);
},3000);