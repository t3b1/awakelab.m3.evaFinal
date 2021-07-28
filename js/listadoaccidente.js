function contador_caracteres() {
    let cont = 150;
    cont -= $("#lugar").val().length
    $("#contador").text(cont);
}

function contador_caracter() {
    let cont = 100;
    cont -= $("#origen").val().length
    $("#contar").text(cont);
}


function valida_form_accidente() {
    let id = $("#idaccidente").val();
    let fecha = $("#fecha").val().split("-");
    let anio = fecha[0];
    let mes = parseInt(fecha[1]);
    let dia = fecha[2];
    const fecha_actual = new Date();
    let hora = $("#hora").val().split("");
    let cliente = $("#cliente").val();

    let lugar = $("#lugar").val().replace(/ /g, "");
    let origen = $("#origen").val().replace(/ /g, "");

    if (id > 0 && id <= 10000) {
        if (anio <= fecha_actual.getFullYear()) {
            if (mes <= fecha_actual.getMonth() + 1) {
                if (dia <= fecha_actual.getDate()) {
                    fecha = dia + "-" + mes + "-" + anio; // se guarda fecha en formato dd-mm-yyyy
                    if (lugar.length > 0) {

                        if (origen.length > 0) {

                            if (hora) {

                                if (cliente.length > 0) {

                                    if ($("#cliente option:selected").val() > 0) {


                                    } else {
                                        alert("Debe seleccionar un cliente");
                                    }

                                } else {
                                    alert("ingresecliente");
                                }
                            } else {
                                alert("ingrese hora");
                            }

                        } else {
                            alert("debe escribir origen del accidente");
                        }
                    } else {
                        alert("Debe escribir del accidente");
                    }
                } else {
                    alert("");
                }
            } else {
                alert("");
            }
        } else {
            alert("");
        }
    } else {
        alert("El id debe ser mayor a cero y menor que 10000");
    }
}