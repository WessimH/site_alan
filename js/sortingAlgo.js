const ctx = document.getElementById('myChart');

// Données initiales
let myData = [12, 19, 3, 5, 2, 3];
let myLabels = ['Red', 'Scred VPN', 'Yellow', 'Green', 'Purple', 'Orange'];

// Création du graphique avec l'ordre initial des données
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: myLabels,
        datasets: [{
            label: '% de différence',
            data: myData,
            backgroundColor: 'rgba(0, 123, 255, 0.5)', // Couleur initiale
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 1000 // Durée de l'animation pour le tri
        }
    }
});

// Fonction pour trier les données et mettre à jour le graphique
function sortAndUpdateChart(chart, data, labels) {
    // Copie des données et des labels pour le tri
    let sortedIndices = data
        .map((value, index) => ({ value, index }))
        .sort((a, b) => a.value - b.value)
        .map(data => data.index);

    let sortedData = sortedIndices.map(i => data[i]);
    let sortedLabels = sortedIndices.map(i => labels[i]);

    // Mettre à jour le graphique avec les données triées
    chart.data.datasets[0].data = sortedData;
    chart.data.labels = sortedLabels;

    // Appliquer un dégradé basé sur l'ordre trié
    chart.data.datasets[0].backgroundColor = sortedData.map((_, i, arr) => {
        const value = arr[i];
        const max = Math.max(...arr);
        const intensity = value / max;
        return `rgba(0, 123, 255, ${intensity})`; // Dégradé de bleu
    });

    chart.update();
}

// Attendre 2 secondes avant de trier et de mettre à jour le graphique
setTimeout(() => {
    sortAndUpdateChart(myChart, myData, myLabels);
}, 2000); // Vous pouvez régler ce délai comme vous le souhaitez
