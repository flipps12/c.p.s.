const button = document.querySelector(".button");
const number = document.querySelector(".number");
const tempo = document.querySelector(".tiempo")
button.addEventListener("click",click);
//eventos
var clicks = 0;
var tiempo = 1;
function click(){
    clicks++;
    number.textContent = clicks;
    if (clicks == 1){
        const interval = setInterval(()=>{
            tempo.textContent =  `segundos: ${tiempo}`;
            tiempo++
        },1000)
        setTimeout(()=>{
            button.removeEventListener("click",click);
            clearInterval(interval);
            concluido()
        },5001);
    }
}

const concluido = ()=>{
    if (tiempo = 5){
        number.textContent = `hiciste ${clicks} clicks en ${tiempo} segundos y ${clicks / tiempo} clicks en 1 segundos`
    }
}