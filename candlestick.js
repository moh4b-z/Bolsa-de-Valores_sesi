document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo para candlestick
    const dados = [
        { data: '2022-01-01', abertura: 100, fechamento: 120, minimo: 95, maximo: 130 },
        { data: '2022-01-02', abertura: 120, fechamento: 110, minimo: 100, maximo: 125 },
        { data: '2022-01-03', abertura: 110, fechamento: 115, minimo: 105, maximo: 120 },
        // Adicione mais dados aqui...
    ];

    // Configuração do gráfico
    const largura = 800;
    const altura = 400;
    const margem = { topo: 30, direita: 30, baixo: 30, esquerda: 60 };

    // SVG para o gráfico
    const svg = d3.select('#grafico')
                  .append('svg')
                  .attr('width', largura + margem.esquerda + margem.direita)
                  .attr('height', altura + margem.topo + margem.baixo)
                  .append('g')
                  .attr('transform', `translate(${margem.esquerda}, ${margem.topo})`);

    // Escalas X e Y
    const escalaX = d3.scaleBand()
                      .domain(dados.map(d => d.data))
                      .range([0, largura])
                      .padding(0.1);

    const escalaY = d3.scaleLinear()
                      .domain([d3.min(dados, d => d.minimo), d3.max(dados, d => d.maximo)])
                      .nice()
                      .range([altura, 0]);

    // Desenhar os candlesticks
    svg.selectAll('.candlestick')
       .data(dados)
       .enter()
       .append('rect')
       .attr('class', 'candlestick')
       .attr('x', d => escalaX(d.data))
       .attr('y', d => escalaY(Math.max(d.abertura, d.fechamento)))
       .attr('width', escalaX.bandwidth())
       .attr('height', d => Math.abs(escalaY(d.abertura) - escalaY(d.fechamento)))
       .attr('fill', d => (d.abertura > d.fechamento) ? 'red' : 'green')
       .attr('stroke', 'black')
       .attr('stroke-width', 1);

    // Eixos X e Y
    svg.append('g')
       .attr('transform', `translate(0, ${altura})`)
       .call(d3.axisBottom(escalaX));

    svg.append('g')
       .call(d3.axisLeft(escalaY));

    // Título do gráfico
    svg.append('text')
       .attr('x', largura / 2)
       .attr('y', 0 - (margem.topo / 2))
       .attr('text-anchor', 'middle')
       .style('font-size', '16px')
       .text('Gráfico de Candlestick');
});
