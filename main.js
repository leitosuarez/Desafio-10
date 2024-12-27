import './style.css'

// Ejercicio 10 – eventos y acceso al DOM - JS

// Le doy nombres y variables a los objetos del hmtl
let primerGato = document.querySelector('#btn-gato1')
let segundoGato = document.querySelector('#btn-gato2')
let tercerGato = document.querySelector('#btn-gato3')
let contenido = document.querySelector('#contenido')


let primerGatoEmoji = '😺'
let segundoGatoEmoji = '😸'
let tercerGatoEmoji = '😹'
let caja = '🎁'

// creo dos aarray vacios 
let contenidoArray = []
let contenidoCaja = [] //Este se mostrara al llegar a 5 emotes, copando no solo su contenido si no sacando el contenido previo que se mostaba por pantalla  

// Creo mi propia funcion para resolver el problema
function addEmote (emote) {
    contenidoArray.push(emote) //cada vez que presione el boton se iran guardando en el array los emotes
    contenido.textContent = contenidoCaja + contenidoArray.join() //esto permitira que emotes y cajas sean mostradas en pantallas juntas. Utilizo .join() para convertir en string

    
    if (contenidoArray.length >= 6) {
        
        let contador = 0
        let acumulador = contenidoArray[0] // La variable acumulador me va a permitir que el programa pueda comparar un elemento anterior del array con el que le sigue 

        for (let i = 0; i <= (contenidoArray.length - 1); i++) { //analizo el contenido de contenidoArray
        
            if (contenidoArray[i] === acumulador && i > 0) { //si la comparacion entre un elemento y otro del array da que son lo mismo, entonces sumo uno al contador
                    contador += 1

                } else { //Restaura el contador a 0 debido a que si ya hay un elemento entre medio de otros que no sea igual, estaria incumpliendo la condicion del enunciado
                    contador = 0
                }

            if (contador === 5) {// Si entonces se cumple que se muestren por pantalla 5 veces el mismo emote, estos se guardan en una "caja" y esta se muestra por pantalla, eliminando ademas todo contenido extra, menos las otras cajas

                contenidoArray = []
                contenidoCaja.push(caja)
                contenido.textContent = contenidoArray
                contenido.textContent = contenidoCaja

                contador = 0 //Restauro el contador a 0 para que no existan fallos en la logica
            }    


            acumulador = contenidoArray[i] // Este lugar para el acumulador es el determinado ya que permitira guardar el elemento anterior del array 
        }


    }
}


// Agrego el escucha de eventos a mis objetos html e invoca la funcion creada con anterioridad
primerGato.addEventListener('click', () => {  
    addEmote(primerGatoEmoji) 

})

segundoGato.addEventListener('click', ()=> {
    addEmote(segundoGatoEmoji)
    

})

tercerGato.addEventListener('click', ()=> {
    addEmote(tercerGatoEmoji)
    

})


