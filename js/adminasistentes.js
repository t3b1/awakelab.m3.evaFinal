$(document).ready(function() {
    $('#table_id').DataTable();
});

function contador_caracter() {
    let cont = 100;
    cont -= $("#nombre").val().length
    $("#contar").text(cont);
}

function validar() {

    let id = $("#id").val();
    let nombre = $("nombre").val();

    let edad = $("#edad").val();
    let correo = $("#correo").val();

    let telefono = $("#telefono").val();
    let fech = $("#fech").val();

    if (id > 0 && id <= 10000) {
        if (nombre >= 0) {
            if (edad > 0 && edad <= 150) {

                if (correo >= 0) {
                    if (emailRegex.test(campo.value)) {
                        valido.innerText = "válido";
                    } else {
                        valido.innerText = "incorrecto";
                    }
                } else {
                    alert("complete campo correo")
                }
            } else {
                alert("edad debe ser mayor a 0 o menor que 150");
            }

        } else {
            alert("debe completar el campo nombre");
        }
    } else {
        alert("El id debe ser mayor a cero y menor que 10000");
    }
}