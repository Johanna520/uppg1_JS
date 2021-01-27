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
{

const button = document.getElementById("btn");

const arkiv = document.getElementById("arkiv");

arkiv.style.display = "none";

button.addEventListener("click", function () {
  if (arkiv.style.display == "none") {
    arkiv.style.display = "block";
  } else {
    arkiv.style.display = "none";
  }
});
}



{
  
    let inputBox = document.querySelector("#input-number");
  
    inputBox.addEventListener("input", (event) => {
      removeAllSections();
      makeSections(parseInt(event.currentTarget.value));
    });
  
  
  let makeSections = (count) => {
    for (var i = 0; i < count; i++) {
      var parent = document.querySelector("main");
  
      var child = document.createElement("article");
      var title = document.createElement("h1");
      var blurb = document.createElement("p");
  
      title.innerText = "Title " + i;
      blurb.innerText = `Skriv ditt blogginlägg.`;
  
      makeEditable(title);
      makeEditable(blurb);
  
      child.append(title);
      child.append(blurb);
      parent.append(child);
    }
  };
  
  let removeAllSections = () => {
    var test_sections = document.querySelectorAll("article");
    for (var i = 0; i < test_sections.length; i++) {
      test_sections[i].remove();
    }
  };
  
  let makeEditable = (elem) => {
    elem.addEventListener("click", (event) => {
      elem.contentEditable = true;
      elem.focus();
    });
    elem.addEventListener("blur", (event) => {
      elem.contentEditable = false;
    });
  };
  

}
