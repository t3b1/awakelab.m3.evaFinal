function cambia_color(estilo) {
    // alert("hola");

    let tabla = $("#tab-asesoria");

    if (estilo == "dark") {
        tabla.removeClass("table-striped");
        tabla.removeClass("table-success");
        tabla.addClass("table-dark");

    } else if (estilo == "success") {
        tabla.removeClass("table-striped");
        tabla.removeClass("table-dark");
        tabla.addClass("table-success");
    } else {
        tabla.removeClass("table-success");
        tabla.removeClass("table-dark");
        tabla.addClass("table-striped");
    }
}