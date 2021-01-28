/* 
Vad jag gjort för att felsöka/undvika buggar:

https://www.w3schools.com/js/js_strict.asp
- Jag använder "use script" för att skriva säkrare JavaScirpt-kod och en mer "ren" kod.
  Jag kan ex inte använda mig av odeklarerade variabler vid användandet av "use strict", det isåfall kommer att kastas ett fel,
  däför är samtliga variabler i denna kod deklarerade med const.


  https://www.w3schools.com/js/js_conventions.asp
  - jag använder mig av de generella riktlinjer som finns på w3school över hur Javascript koden ska  se ut. 
    Ex:
    jag använder mig av camelcase för att namnge mina variabler och funktioner. 
    skapar mellanrum vid operatorer (i detta fall = ) samt efter kommatecken. 

  https://www.w3schools.com/js/js_debugging.asp
  - jag har aktiverat debbugging genom F12 och via consollen försökt förstå varför och vart i min kod fel uppstår.

https://www.w3schools.com/js/js_best_practices.asp
  - i min dropdown (som jag kommenterat ut) använder jag === istället för ==
  - jag undviker new
*/



"use strict";



/*I min kod för <button id="add"> och <button id="delete"> 
förändrar jag och uppdaterar DOM genom att skapa och ta bort ett element. */

{

  /*Add-button

*/
  const addButton = document.getElementById("add"); //jag hämtar min <button id="add">- element för att kunna förändra elementet

  addButton.addEventListener("click", function addTextBox (){ //genom addEdventListener kan jag tilldela eventet "click" tillsammans
                                                              //med functionen. I detta fall vad som sker när användaren trycker på <button>.

  const textArea = document.createElement("TEXTAREA");  //Jag skapar ett element (TEXTAREA) genom creatELement. 
  textArea.setAttribute("id", "textbox")  //Jag ger elementet ett attribut (id), settAttribute(id ="textbox").


  const text = document.createTextNode("Write something here...."); //För att lägga text i min textarea gör jag en textNode ..
  textArea.appendChild(text); //.. och lägger till texten i textarea.
  document.body.appendChild(textArea); //Därefter lägger jag till mitt nya element i <body>.
});
}



//Delete-button
{
  const deleteButton = document.getElementById("delete");//jag hämtar min <button id="delete">- element för att kunna förändra elementet

  deleteButton.addEventListener("click", function deleteTextBox (){//genom addEdventListener kan jag tilldela eventet "click" tillsammans
                                                                  //med functionen. I detta fall vad som sker när användaren trycker på <button>.

    
  const textArea = document.getElementById("textbox");  //För att hitta elelementet jag vill ta bort använder jag getELementbyId. 
                                                //då jag gav elementet Textarea ett nytt Id(genon addAttribute) skriver jag textbox mellan (). 
  textArea.remove();                            // därefter tilldelar jag remove()-metoden till elementet. 
});
}



{
  //VARFÖR CONSOLE?
  console.log("Hej på dig");
}




/*Dropdown-button. 
OBS! vet inte riktigt vad jag ska använda den till.
Men testade lite, ev kan den, när den är klar, användas till
att klicka in på olika kategotier/inlägg.
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
}*/

