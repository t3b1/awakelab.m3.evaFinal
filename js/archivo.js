var fesh =document.getElementById("fecha");
var f = new Date();
fesh.value = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
var select =document.getElementById("ano");
console.log(select);

for (let index = 2019; index <= 2050; index++){
    var opt = document.createElement('option');
    opt.value = index;
    opt.innerHTML = index;
    select.appendChild(opt);
    
}

var select =document.getElementById("mes");
console.log(select);

for (let index = 1; index <= 12; index++){
    var opt = document.createElement('option');
    opt.value = index;
    opt.innerHTML = index;
    select.appendChild(opt);
    
}

function alerta(){

    var mon = document.getElementById("monto");
    var rut = document.getElementById("rut");
    if(mon.value < 1 || mon.value > 99999999){
        mon.style.borderColor="red";
        mon.style.backgroundColor ="light";
        
        alert("monto debe ser mayo a cero y menor 99.999.999");
    }
    else if (rut.value.length < 8 || rut.value.length >10){
        rut.style.borderColor="red";
        rut.style.backgroundColor ="green";
        

    }
    else {
    alert("datos guardados correctamente");
    }
}

