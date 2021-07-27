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