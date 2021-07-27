function contador_caracteres() {
    let cont = 255;
    cont -= $("#motivo").val().length
    $("#contador").text(cont);
}

function valida_form_asesoria() {
    let id = $("#id").val();
    let fecha = $("#fecha").val().split("-");
    let anio = fecha[0];
    let mes = parseInt(fecha[1]);
    let dia = fecha[2];
    const fecha_actual = new Date();

    let motivo = $("#motivo").val().replace(/ /g, "");

    if (id > 0 && id <= 10000) {
        if (anio >= fecha_actual.getFullYear()) {
            if (mes >= fecha_actual.getMonth() + 1) {
                if (dia > fecha_actual.getDate()) {
                    fecha = dia + "-" + mes + "-" + anio; // se guarda fecha en formato dd-mm-yyyy
                    if (motivo.length > 0) {
                        if ($("#profesional option:selected").val() > 0) {
                            alert("Asesoría creada exitosamente");
                        } else {
                            alert("Debe seleccionar un profesional");
                        }

                    } else {
                        alert("Debe escribir el motivo de la asesoria");
                    }
                } else {
                    alert("Día debe ser mayor al día actual");
                }
            } else {
                alert("Mes debe ser mayor o igual al mes actual");
            }
        } else {
            alert("año debe ser mayor o igual al año actual");
        }

    } else {
        alert("El id debe ser mayor a cero y menor que 10000");
    }
}