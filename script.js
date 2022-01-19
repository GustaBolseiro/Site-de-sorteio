let listaCompleta= []

function bntAdd() {
    if (document.querySelector("#text").value === "") {
        alert("Insira o nome de um participante...")
      }else{
        adicionar()
    }
}
        
function bntSort() {
    if (listaCompleta.length < 2) {
        alert("Insira mais de um participante...")
      }else{
        sortear()
    }
}

function adicionar() {  
    
    let texto = document.querySelector("#text").value;
    let lista = document.querySelector("#list");

    let item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item)

    listaCompleta.push(texto);


    document.querySelector("#text").value = null;
}

function bntRmv() {

    listaCompleta.length = 0;
    let lista = document.querySelector("#list");
    lista.innerHTML = document.querySelector("#title-2");
    document.querySelector("#ps").innerHTML = "..........";
}

function sortear() {
    let np = listaCompleta.length;
    let ns = Math.floor(Math.random() * np)

    document.querySelector("#ps").innerHTML = listaCompleta[ns];
}

document.addEventListener("keypress", function(e) {

    if(e.key === "Enter") {
        bntAdd()
    }
})



