$(document).ready(function() {
    graficoBarra();
    graficoLinea();
    pieChart();


});

function graficoBarra() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['las condes', 'independecia', 'concepcion', 'valparaiso', 'viña de mar', 'talcahuano'],
            datasets: [{
                label: 'cantidad de clientes por comuna',
                data: [12, 5, 3, 3, 6, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function graficoLinea() {
    var ctx = $('#line-chart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Accidentes',
                data: [12, 19, 3, 5, 2, 3, 3, 2, 1, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Visitas',
                data: [2, 9, 5, 5, 6, 3, 4, 3, 2, 2, 1, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Cantidad de accidentes y visitas durante el año'
                }
            }

        }
    });
}

function pieChart() {
    var ctx = $('#pie-chart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Cumplidos', 'No cumplidos', 'Cumplidos con observación'],
            datasets: [{
                label: 'Estatus',
                data: [100, 30, 40],
                backgroundColor: [
                    'rgb(66, 186, 150)',
                    'rgb(223, 71, 89)',
                    'rgb(255, 193, 7)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Chequeos'
                }
            }
        }
    });
}