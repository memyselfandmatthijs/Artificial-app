const daily = document.getElementById('daily').getContext('2d');
const myChart1 = new Chart(daily, {
    type: 'bar',
    data: {
        labels: ['6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
        datasets: [{
            label: 'Aantal insecten',
            data: [12, 19, 3, 5, 2, 3],
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
        legend: {display: false},
        scales: {
            y: {
                beginAtZero: true
            }
        },
        title: {
            display: true,
            text: 'Insecten vandaag'
        }
    }
});

const weekly = document.getElementById('weekly').getContext('2d');
const myChart2 = new Chart(weekly, {
    type: 'line',
    data: {
        labels: ['ma.', 'di.', 'wo.', 'do.', 'vr.', 'za.', 'zo.'],
        datasets: [{
            label: 'Aantal insecten',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: [
                'rgba(0, 0, 0, 1)'
            ],
            backgroundColor: [
                'rgba(255, 255, 255, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            y: {
                beginAtZero: true
            }
        },
        title: {
            display: true,
            text: 'Insecten deze week'
        }
 
    }
});