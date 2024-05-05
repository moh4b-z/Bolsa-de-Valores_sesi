document.addEventListener('DOMContentLoaded', function() {
   let dados = [
       { data: '2022-01-01', abertura: 1, fechamento: 1.20, minimo: 0.95, maximo: 1.30 },
       { data: '2022-01-02', abertura: 1.20, fechamento: 1.10, minimo: 1, maximo: 1.25 },
       { data: '2022-01-03', abertura: 1.10, fechamento: 1.15, minimo: 1.05, maximo: 1.20 },
       { data: '2022-01-04', abertura: 1.15, fechamento: 0.40, minimo: 1.10, maximo: 1.20 },
       { data: '2022-01-05', abertura: 0.40, fechamento: 1.20, minimo: 1.10, maximo: 1.20 },
   ];

   const largura = window.innerWidth * 0.681; // largura da janela
   const altura = largura * 0.5; // Metade da largura para a altura
   const margem = { topo: 30, direita: 30, baixo: 30, esquerda: 30 };

   const svg = d3.select('#grafico')
                 .append('svg')
                 .attr('width', largura + margem.esquerda + margem.direita)
                 .attr('height', altura + margem.topo + margem.baixo)
                 .append('g')
                 .attr('transform', `translate(${margem.esquerda}, ${margem.topo})`);

   const escalaX = d3.scaleBand()
                     .domain(dados.map(d => d.data))
                     .range([0, largura])
                     .padding(0.1);

   const escalaY = d3.scaleLinear()
                     .domain([0, d3.max(dados, d => d.maximo)])
                     .nice()
                     .range([altura, 0]);

   function desenharGrafico() {
       svg.selectAll('*').remove(); // Limpar SVG antes de redesenhar

       // Linhas conectando o máximo e o mínimo de cada barra
       svg.selectAll('.linha')
          .data(dados)
          .enter()
          .append('line')
          .attr('class', 'linha')
          .attr('x1', d => escalaX(d.data) + escalaX.bandwidth() / 2)
          .attr('y1', d => escalaY(d.maximo))
          .attr('x2', d => escalaX(d.data) + escalaX.bandwidth() / 2)
          .attr('y2', d => escalaY(d.minimo))
          .attr('stroke', 'gray')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '3,3'); // Estilo de linha tracejada

       // Candlesticks
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
          .style('font-size', '20px')
          .attr('fill', '#ffffff')
          .text('Gráfico editavel');
   }

   function adicionarBarra(fechamento, maximo, minimo) {
    const ultimaBarra = dados[dados.length - 1];
    const abertura = ultimaBarra.fechamento; // Abertura igual ao fechamento da última barra

    if (!maximo) {
        maximo = fechamento;
    }

    if (!minimo) {
        minimo = abertura;
    }

    const novaData = moment(ultimaBarra.data).add(1, 'days').format('YYYY-MM-DD');
    const novaBarra = {
        data: novaData,
        abertura: abertura,
        fechamento: fechamento,
        maximo: maximo,
        minimo: minimo
    };

    dados.push(novaBarra);

    // Atualizar a escala X com a nova data adicionada
    escalaX.domain([...escalaX.domain(), novaData]);

    // Calcular o novo valor máximo para o eixo Y
    const novoValorMaximo = 1.5 * d3.max(dados, d => d.fechamento);

    // Atualizar a escala Y
    escalaY.domain([0, novoValorMaximo]).nice();

    desenharGrafico(); // Redesenhar o gráfico após adicionar a nova barra
    }



   // Manipulador de evento para o botão "Adicionar"
   document.getElementById('adicionar').addEventListener('click', function() {
       const fechamentoInput = document.querySelector('#fec');
       const maximoInput = document.querySelector('#max');
       const minimoInput = document.querySelector('#min');

       const fechamento = Number(fechamentoInput.value);
       const maximo = Number(maximoInput.value) || undefined;
       const minimo = Number(minimoInput.value) || undefined;

       if (!fechamento || isNaN(fechamento)) {
           alert('Insira um valor válido para o fechamento.');
           console.log(fechamento, maximo, minimo)
           return;
       }

       adicionarBarra(fechamento, maximo, minimo);

       // Limpar os inputs após adicionar a nova barra
       fechamentoInput.value = '';
       maximoInput.value = '';
       minimoInput.value = '';
   });

    document.getElementById('remover').addEventListener('click', function() {
    if (dados.length > 0) {
        dados.pop(); // Remove o último elemento do array 'dados'
        desenharGrafico(); // Redesenha o gráfico com os dados atualizados
    } else {
        console.log('Não há dados para remover.');
    }
    });

   // Desenhar o gráfico inicial
   desenharGrafico();
});
