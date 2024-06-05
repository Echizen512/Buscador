[] explicar que es React (ReactDOM)
[] explicar que es NodeJS
[] explicar que es Vite (transpiladores,compiladores) (React Create App)
[]



Conceptos claves:

React es de Meta y lo usan todos los productos de la misma como facebook,wsp,ig. La cual sirve para construir interfaces de usuario. React nació en el 2011 como una forma de intentar simplificar las interfaces de usuario. Lo creo Jordan Walke.

Jordan Walke historia: Lo hizo porque era muy dificil trabajar con formularios (el venia del backend y sistemas distribuidos) venia de amazon, y cuando se puso trabajar en la interfaz de fascebook le costaba muchisimo

JSX: es una extension de EMAscript que esta basada en xml y esto nos va a permitir escribir react de una forma mas declarativa nuestros elementos, componentes en react. Para convertir el codigo a javascript existen los transformadores (transpiladores, compiladores) como SWC, Babel entre otros

Para convertir JSX https://swc.rs/playground, en este convierte el JSX a JS, lo cual significa que JSX no es HTML

Cosas de JSX:

Añadir expresiones:

const name = 'Hola';

<section>
    <div>
        <h1>Hola {name}</h1>
    </div>
</section>

Solo cosas que devuelvan un valor, osea: {if()} ❌

como es js los atributos se trabajan con camelCase, no como en HTML

<div dataID="223" className="container" ></div>


Un empaquetador de Aplicaciones Web.
------------------- Ya programando -------------------
Un componente es una funcion que devuelve un elemento
parametros nombrados: const buttonLike({name})
Los componentes deben empezar con Mayuscula (PascalCase), ya que en HTML no se sabe si el dia de mañana cambie, por lo tanto no se puede escribir en minuscula ya que React no lo diferencia 
el useState es async