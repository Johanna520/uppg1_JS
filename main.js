/* TODO

 * JSkod för sifferinputs fönstret (skapa blogginlägg) 



 * JSkod per blogginlägg (toggla redigerbarhet)

   https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable

   över 100 titlar ej ok
   https://www.w3schools.com/js/js_errors.asp  


   gör så det ej går att ta minus på post. = felmeddelande
   
   använd const och let inte var!s
*/
//för att lättare upptäcka buggar skriver jag:
//https://www.w3schools.com/js/js_strict.asp

"use strict";
  /* When the user clicks on the button, 
          toggle between hiding and showing the dropdown content */
          //se föreläsning 15.30!!!

          
          function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
