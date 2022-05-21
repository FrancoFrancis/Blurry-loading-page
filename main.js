
const loadText= document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)  //stops intrval
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0) //when it goes from zero to 100 we wanna map opacity from 1 to 0 
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //scale load from 0 to 100 and the blur from 30 to 0 in that same ammount of time
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max
    - in_min) + out_min;
}




