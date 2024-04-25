// Importar o Moment.js
import moment from 'https://cdn.jsdelivr.net/npm/moment/moment.min.js';
import { Chart } from 'chart.js/auto'; // Alteração aqui

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('Grafico').getContext('2d');

    // Gerar dados aleatórios para simular preços de ações ao longo do tempo
    const data = {
        labels: generateLabels(30), // Gera 30 datas (30 dias)
        datasets: [{
            label: 'Preço da Ação',
            data: generateStockPrices(30, 50, 200), // Gera 30 preços entre 50 e 200
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    // Configurações do gráfico
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    parser: 'YYYY-MM-DD',
                    tooltipFormat: 'll', // Formato de exibição da tooltip
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Preço'
                }
            }
        }
    };

    // Criação do gráfico de linha usando Chart.js
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});

// Função para gerar datas para os rótulos do eixo X (simulação)
function generateLabels(count) {
    const startDate = moment();
    const labels = [];
    for (let i = 0; i < count; i++) {
        const date = moment(startDate).subtract(i, 'days');
        labels.push(date.format('YYYY-MM-DD')); // Formata a data (YYYY-MM-DD)
    }
    return labels.reverse(); // Inverte a ordem para exibir da data mais antiga para a mais recente
}

// Função para gerar preços aleatórios para simular o histórico de preços das ações
function generateStockPrices(count, minPrice, maxPrice) {
    const prices = [];
    for (let i = 0; i < count; i++) {
        const price = Math.random() * (maxPrice - minPrice) + minPrice;
        prices.push(parseFloat(price.toFixed(2))); // Arredonda para 2 casas decimais
    }
    return prices.reverse(); // Inverte a ordem para corresponder às datas
}
