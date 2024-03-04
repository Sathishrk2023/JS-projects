const container = document.querySelector('.containers');
const buttons = document.querySelectorAll('.btn');

let imgList = ["1","2","3","4","5"];

let index=0;
buttons.forEach((button)=> button.addEventListener('click',()=>{
    if (button.classList.contains('.btn-left')){
        index--;
        if(index<0){
            index=imgList.length-1;
        }
        container.style.background = ` url("images/${imgList[index]}.png") ceter/cover`
    }
    else{
        index++;
        if(index===imgList.length-1){
            index=0;
        }
        container.style.background = `url("images/${imgList[index]}.png") center/cover `

    }


    
}));