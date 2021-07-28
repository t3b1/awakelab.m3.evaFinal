$(document).ready(function() {

});

function exportToCsv() {
    $('#list-visitas').tableExport({ type: 'csv' });
}

function exportToExcel() {
    $('#list-visitas').tableExport({ type: 'xlsx' });
}

function exportToTxt() {
    $('#list-visitas').tableExport({ type: 'txt' });
}