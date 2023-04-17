'use strict';

window.addEventListener('load', () => {

});

function addToList() {
    let btn = document.querySelector("#addButton");
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let liRef = document.createElement('li');
        let name = document.createTextNode(document.querySelector("#namn").value);
        let number = document.createTextNode(document.querySelector("#mobilnummer").value);
        let errorMsg = document.querySelector("#errorMsg");
        let listLength = document.querySelectorAll("li");
        let lista = document.querySelector('#koLista');
        console.log(name);
        try {
            if (name.length < 5) {
                throw { error: name, message: "Måste fylla i namn." }
            }
            if (number.length < 5){
                throw { error: number, message: "Måste fylla i telefonnummer."}
            }
            if( document.querySelectorAll("li")<5){
                throw { error : name, message: "För lång väntetid, be dem återkomma."}
            }
            errorMsg.style.border = "";
            errorMsg.textContent="";
            liRef.appendChild(name);
            liRef.append(": nr: ");
            liRef.appendChild(number);
            lista.appendChild(liRef);

        } catch (error) {
            errorMsg.style.border = "solid red 1px";
            errorMsg.textContent=error.message;
            console.log(error.message);
        }

    });
}

addToList();