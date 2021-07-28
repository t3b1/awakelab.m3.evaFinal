$(document).ready(function() {

});



function cambia_color(estilo) {

    let tabla = $("#tab-asesoria");

    if (estilo == "dark") {
        tabla.removeClass("pink");
        tabla.removeClass("fluor");
        tabla.addClass("dark");

    } else if (estilo == "pink") {
        tabla.removeClass("dark");
        tabla.removeClass("fluor");
        tabla.addClass("pink");
    } else {
        tabla.removeClass("dark");
        tabla.removeClass("pink");
        tabla.addClass("fluor");
    }
}

//función encargada de generar automáticamente un listado de años para rellenar un elemento select
function listarAnios() {
    var fesh = document.getElementById("fecha");
    var f = new Date();
    fesh.value = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    var select = document.getElementById("ano");
    console.log(select);

    for (let index = 2010; index <= 2050; index++) {
        var opt = document.createElement('option');
        opt.value = index;
        opt.innerHTML = index;
        select.appendChild(opt);

    }
}




// funcion encargada de rellenar elemento select con los meeses del año en palabras
function listarMeses() {
    let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var select = document.getElementById("mes");

    for (let i = 0; i < mes.length; i++) {
        var opt = document.createElement('option');
        opt.value = i + 1;
        opt.innerHTML = mes[i];
        select.appendChild(opt);

    }
}

function alerta() {

    let stat_ok = true;
    var mon = document.getElementById("monto");
    var rut = document.getElementById("rut");

    mon.classList.remove("error");
    rut.classList.remove("error");

    if (mon.value.length == 0 | mon.value < 0 || mon.value > 99999999) {
        alert("monto debe ser mayor o igual a cero y menor 99.999.999");
        mon.classList.add("error");
        stat_ok = false;


    }
    if (rut.value.length < 8 || rut.value.length > 10) {
        alert("error rut");
        rut.classList.add("error");
        stat_ok = false;
    }

    if (stat_ok) {
        alert("Datos guardados correctamente");
    }
}

