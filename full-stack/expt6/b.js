let car = null;
let pos = 10;
let timer;

window.onload = function(){
    car = document.getElementById("car");
};

function startCar(){
    if (!timer) {
        timer = setInterval(moveCar, 20);
    }
}

function moveCar(){
    if(pos >= window.innerWidth - 150){
        clearInterval(timer);
        timer = null;
        document.getElementById("danger").style.display = "block";
    }else{
        pos +=5;
        car.style.left = pos + "px";
    }
}


function stopCar(){
    clearInterval(timer);
    timer = null;
}

function resetCar(){
    clearInterval(timer);
    timer = null;
    pos = 10;
    car.style.left = pos + "px";
    document.getElementById("danger").style.display = "none";
}
