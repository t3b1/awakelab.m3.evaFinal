$(document).ready(function(){

});



function validar(){

    let rut = $('#rut').val();
    let contra = $('#contra').val();

    if(rut <= 0){
        alert("ingrese campo rut ");

    }
    else if (contra.length <=0 || contra.length > 20){
        alert("contraseña hasta 20 caracteres");
    } else {
        window.location="listadousuario.html";
    }
    
}
