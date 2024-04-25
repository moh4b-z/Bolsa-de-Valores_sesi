document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo (preços de ações ao longo do tempo)
    const dados = [
        { data: '2022-01-01', preco: 10 },
        { data: '2022-01-02', preco: 15 },
        { data: '2022-01-03', preco: 190 },
        { data: '2022-01-04', preco: 115 },
        { data: '2022-01-05', preco: 105 },
        { data: '2022-01-06', preco: 205 }
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
    const escalaX = d3.scaleTime()
                      .domain(d3.extent(dados, d => new Date(d.data)))
                      .range([0, largura]);

    const escalaY = d3.scaleLinear()
                      .domain([0, d3.max(dados, d => d.preco)])
                      .nice()
                      .range([altura, 0]);

    // Linha para os dados
    const linha = d3.line()
                    .x(d => escalaX(new Date(d.data)))
                    .y(d => escalaY(d.preco));

    // Desenhar a linha do gráfico
    svg.append('path')
       .datum(dados)
       .attr('fill', 'none')
       .attr('stroke', 'steelblue')
       .attr('stroke-width', 2)
       .attr('d', linha);

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
       .text('Preço da Ação ao Longo do Tempo');
});
