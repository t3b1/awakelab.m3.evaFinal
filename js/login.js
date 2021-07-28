$(document).ready(function() {

});



function validar() {

    let rut = $('#rut').val();
    let contra = $('#contra').val();

    if (rut.length >= 9 && rut.length <= 10) {
        if (contra.length >= 4 && contra.length <= 20) {
            alert("Bienvenido");
            window.location = "listadousuarios.html";
        } else {
            alert("La contraseña debe tener entre 4 a 20 caracteres");
        }
    } else {
        alert("Ingrese su rut sin puntos ni guión");
    }

}