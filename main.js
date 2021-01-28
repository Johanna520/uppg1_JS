/* TODO

 * JSkod för sifferinputs fönstret (skapa blogginlägg) 



 * JSkod per blogginlägg (toggla redigerbarhet)

   https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable

   över 100 titlar ej ok
   https://www.w3schools.com/js/js_errors.asp  


   gör så det ej går att ta minus på post. = felmeddelande
   
   använd const och let inte var!s

   f12 för consolen för att förstå varför min JavaScritp inte fungerade. . 
*/

/*Jag använder "use script" för att enklare upptäcka buggar. 
Jag kan ex inte använda mig av odeklarerade variabler vid användandet av "use strict". */

"use strict";


/*Dropdown-button. */

{

const button = document.getElementById("btn"); // 

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


/*Add-button

*/

{



const addButton = document.getElementById("add");


addButton.addEventListener("click", function addTextBox (){
    const x = document.createElement("TEXTAREA");   //    Jag skapar ett element, <textarea>.
    x.setAttribute("id", "textbox") // Ger elementet ett ID. 


  const t = document.createTextNode("Write something here...."); // Jag skapar text i textarean.
  x.appendChild(t); // 
  document.body.appendChild(x); //Lägger till  textarea till <body> 
});


}

//Delete-button
{
const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function deleteTextBox (){
    const x = document.getElementById("textbox");  
    x.remove();

} );
}