/* TODO

 * JSkod för sifferinputs fönstret (skapa blogginlägg) 



 * JSkod per blogginlägg (toggla redigerbarhet)

   https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable

   över 100 titlar ej ok
   https://www.w3schools.com/js/js_errors.asp  


   gör så det ej går att ta minus på post. = felmeddelande
   
   använd const och let inte var!s
*/

//Jag använder "use script" för att enklare upptäcka buggar. Jag kan ex inte använda mig av odeklarerade variabler vid användandet av "use strict". "

"use strict";


/*här har jag skrvit kod för min dropdown-button. 
Jag skriver const för att  . . . 
Jag hämtar första objektet med id "btn" samt id "arkiv".

*/

{

const button = document.getElementById("btn");

const arkiv = document.getElementById("arkiv");

arkiv.style.display = "none";

button.addEventListener("click", function () {
  if (arkiv.style.display === "none") {
    arkiv.style.display = "block";
  } 
  
  else {
    arkiv.style.display = "none";
  }
});
}

{
const addButton = document.getElementById("add");


addButton.addEventListener("click", function (){
    const x = document.createElement("TEXTAREA");
  const t = document.createTextNode("Write something here....");
  x.appendChild(t);
  document.body.appendChild(x);
});

}
