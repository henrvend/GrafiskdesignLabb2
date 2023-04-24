'use strict';

window.addEventListener('load', () => {
    bokaBord();
    addToList();
    seatsAtTable();
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
            if (number.length < 5 ) {
                throw { error: number, message: "Måste fylla i telefonnummer. Bara siffror." }
            }
            if (listLength.length > 4) {
                throw { error: name, message: "För lång väntetid, be dem återkomma." }
            }
            errorMsg.style.border = "";
            errorMsg.textContent = "";
            remBtn.setAttribute("class", "btn btn-danger py-0 px-3");
            remBtn.append("-");
            liRef.setAttribute('class', 'd-flex justify-content-between m-1')
            liRef.appendChild(name);
            liRef.append(", tel: ");
            liRef.appendChild(number);
            liRef.append(", antal:   ");
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
            remBtn.setAttribute('class', 'd-none');
            let conf = document.createElement('button');
            conf.textContent='Behåll';
            let confRem = document.createElement('button');
            confRem.textContent='Ta bort'
            let remDiv = document.createElement('div');
            conf.setAttribute('class', 'float-end divW btn btn-primary p-0 mb-1');
            confRem.setAttribute('class', 'float-end divW btn btn-danger p-0');
            remDiv.setAttribute('class', 'divW mx-1');
            remDiv.appendChild(conf);
            remDiv.appendChild(confRem);
            liRef.appendChild(remDiv);
            confRem.addEventListener('click', ()=>{
                liRef.remove();
                errorMsg.textContent = "";
                errorMsg.style.border = "";
            });
            conf.addEventListener('click', ()=>{
                remDiv.remove();
                remBtn.setAttribute('class', 'd-block btn btn-danger py-0 px-3');
                
            })
            
        });
    });
}

function bokaBord() {
    let bord = document.querySelectorAll(".table");
    for (let i = 0; i < bord.length; i++) {
        let id = bord[i].id;
        bord[i].addEventListener("click", () => {
            bord[i].classList.toggle("booked");
            if (bord[i].classList.contains("booked")) {
                let div = bord[i].querySelector('.table div')
                div.textContent="X"
                bord[i].appendChild(div);
            } else{
                let div = bord[i].querySelector('.table div')
                if(bord[i].classList.contains('small')){
                    div.textContent=('2');
                    bord[i].appendChild(div);
                }  
               if(bord[i].classList.contains('big')){
                    div.textContent=('6');
                    bord[i].appendChild(div);
                } 
                if(bord[i].classList.contains('medium')){
                    div.textContent=('4');
                    bord[i].appendChild(div);
                }   
            }
        });
    }
}

function seatsAtTable() {
    let bord = document.querySelectorAll(".table");
    

    for(let i = 0; i<bord.length; i++){
        let div = document.createElement('div');
        if(bord[i].classList.contains('small')){
            div.textContent=('2');
            bord[i].appendChild(div);
        }  
       if(bord[i].classList.contains('big')){
            div.textContent=('6');
            bord[i].appendChild(div);
        } 
        if(bord[i].classList.contains('medium')){
            div.textContent=('4');
            bord[i].appendChild(div);
        }   

    }
}
