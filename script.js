'use strict';

window.addEventListener('load', () => {
    bokaBord();
    addToList();
});

function addToList() {
    let btn = document.querySelector("#addButton");

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let liRef = document.createElement('li');
        let remBtn = document.createElement('button');
        let name = document.createTextNode(document.querySelector("#namn").value);
        let number = document.createTextNode(document.querySelector("#mobilnummer").value);
        let errorMsg = document.querySelector("#errorMsg");
        let listLength = document.querySelectorAll("li");
        let lista = document.querySelector('#koLista');
        try {
            if (name.length < 5) {
                throw { error: name, message: "Måste fylla i namn." }
            }
            if (number.length < 5) {
                throw { error: number, message: "Måste fylla i telefonnummer." }
            }
            if (listLength.length > 4) {
                throw { error: name, message: "För lång väntetid, be dem återkomma." }
            }
            errorMsg.style.border = "";
            errorMsg.textContent = "";
            remBtn.setAttribute("class", "btn btn-danger mt-1");
            remBtn.append("-");
            liRef.appendChild(name);
            liRef.append(": nr: ");
            liRef.appendChild(number);
            liRef.append(": antal: ");
            liRef.append(document.querySelector("#antal").value);
            liRef.append(remBtn);
            lista.appendChild(liRef);
            document.querySelector("#mobilnummer").value = '';
            document.querySelector('#namn').value = '';

        } catch (error) {
            errorMsg.style.border = "solid red 1px";
            errorMsg.textContent = error.message;
        }

        remBtn.addEventListener("click", () => {
            liRef.remove();
            errorMsg.textContent = "";
            errorMsg.style.border = "";
        })
    });
}

function bokaBord() {
    let bord = document.querySelectorAll(".table");
    for (let i = 0; i < bord.length; i++) {
        let id = bord[i].id;
        bord[i].addEventListener("click", () => {
            bord[i].classList.toggle("booked");
            if (bord[i].classList.contains("booked")) {
                bord[i].textContent = ("X")
            } else bord[i].textContent = (id);
        });
    }
}
