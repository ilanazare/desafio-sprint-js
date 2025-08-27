let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco; 
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;   
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga; 
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
        carArr.push(this);
       
    }
} 

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(GetCarArrPosition(carArr, carClass) === -1){
                if(carArr.length < 2){
                    carArr.push(carClass);
                } else {
                    alert("Só é possível comparar 2 carros por vez");
                    el.checked = false;
                }
            }
                
            
        } else {

            const pos = GetCarArrPosition(carArr, carClass);
            if(pos !== -1){
                carArr.splice(pos, 1);
            }       

            botaoCompare();
          } 
    } else {
        throw "Você precisa definir uma Classe de Carro para comparar";
    }
}

function botaoCompare() {
    const compareBtm = document.querySelector('button[onclick="ShowCompare()"]');

    if (carArr.length === 2) {
        compareBtm.disabled = false;
        compareBtm.style.opacity = 1;
        compareBtm.style.cursor = "pointer"
    } else {
        compareBtm.disabled = true;
        compareBtm.style.opacity = 0.5;
        compareBtm.style.cursor = 'not-allowed';
    }

}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
    document.body.classList.add("compare-open");
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
    document.body.classList.remove("compare-open");
}

function UpdateCompareTable() {

    for(let i = 0; i < carArr.length; i++){
        document.getElementById(`car-image-${i+1}`).src = carArr[i].image;
        document.getElementById(`car-name-${i+1}`).innerText = carArr[i].nome;
        document.getElementById(`car-price-${i+1}`).innerText = carArr[i].preco;
        document.getElementById(`car-altura-cacamba-${i+1}`).innerText = carArr[i].alturaCacamba;
        document.getElementById(`car-altura-veiculo-${i+1}`).innerText = carArr[i].alturaVeiculo;
        document.getElementById(`car-altura-solo-${i+1}`).innerText = carArr[i].alturaSolo;
        document.getElementById(`car-capacidade-carga-${i+1}`).innerText = carArr[i].capacidadeCarga;
        document.getElementById(`car-motor-${i+1}`).innerText = carArr[i].motor;
        document.getElementById(`car-potencia-${i+1}`).innerText = carArr[i].potencia;
        document.getElementById(`car-volume-cacamba-${i+1}`).innerText = carArr[i].volumeCacamba;
        document.getElementById(`car-roda-${i+1}`).innerText = carArr[i].roda;
    }

    document.addEventListener('DOMContentLoaded', function() {
        botaoCompare();
    }); 
}
