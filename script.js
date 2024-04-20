const API = "https://random-word-api.herokuapp.com/word?lang=es&length=5"
fetch(API).then((response)=>{
    response.json().then((data)=>{
})
})





let diccionario = ["PERRO", "SILLA", "AGUAS", "AGUDO", "BALAS","CHINA", 
                    "CERCA", "ALDEA", "FIDEO", "JULIO",
                    "INDIO", "HIJOS", "MARTE", "MARCA","MIRAR","DATOS", 
                    "MELON", "LINDO", "PELEA", "SABIO", "RUGIR", "RELOJ", 
                    "SOBRE", "ZORRO", "TARDE","VERDE", 
                    "LIBRO", "TABLA", "SUCIO", "VIDEO", "OPERA", "QUESO", 
                    "SELVA", "SUSHI", "PLAYA","LOGRO", 
                    "DULCE", "ENVIO", "ESPIA", "CLAVO", "CARRO", "CIEGO", 
                    "FIRMA", "AVION", "CISNE","CABRA", 
                    "PULPO", "BURRO", "RATON", "MOSCA"]
let jugadas = 6
const palabraoculta = diccionario[Math.floor(Math.random() * diccionario.length)];

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function intentar(){
    const intento = document.getElementById("guess-input").value.toUpperCase()
    jugadas --
    if (intento.length != 5){
        no5letras("Esa palabra no tiene 5 letras!")
    }
    if (jugadas==0){
        terminar("PERDISTE!")
       
    } 
    if (palabraoculta == intento){
        terminar("GANASTE!&#128512")
    
    }else {
        let fila = document.createElement("div")
       fila.className = "row"
       console.log(fila)
        for (const i in intento) {
            let letra = document.createElement ("span")
            letra.className = "letter"
            letra.innerText = intento [i]
            fila.appendChild(letra)
            console.log (fila)
            if (intento[i]==palabraoculta[i]){
                letra.innerHTML = intento[i];
                letra.style.backgroundColor ="#0DAB76"
            }else if(palabraoculta.includes(intento[i])) {
                letra.innerHTML = intento[i];
                letra.style.backgroundColor ="#FFE66D"; 
            }else{
                letra.innerHTML = intento[i];
                letra.style.backgroundColor ="LightGray"
            }
        }
        let grilla = document.getElementById("grid")
        grilla.appendChild(fila)
        }
    }

    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        button.disabled = true;
        let p = document.getElementById("guesses")
        p.innerHTML = "<h1>" + mensaje + "</h1>"
    }
 
    function no5letras (mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = false;
    button.disabled = false;
    let p = document.getElementById("guesses")
    p.innerHTML = "<h3>" + mensaje + "</h3>"
  }