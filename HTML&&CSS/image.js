const bg_img = document.querySelector("html");


function genRandom(){
    const number = Math.floor(Math.random()*4)+1;
    return number;
}

function print(img_number){
    const img = new Image();
    img.src=`image/${img_number}.jpg`;
    img.classList.add("bg-img");
    bg_img.appendChild(img);
}

function init(){
    const randomNumber= genRandom();
    print(randomNumber);
}

init();