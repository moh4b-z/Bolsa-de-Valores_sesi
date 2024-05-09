document.addEventListener('DOMContentLoaded', function() {
    let dados = [
        { data: '1929-09-03', abertura: 381.17, fechamento: 381.17, minimo: 377.56, maximo: 381.17 },
        { data: '1929-09-04', abertura: 380.64, fechamento: 378.64, minimo: 367.90, maximo: 380.64 },
        { data: '1929-09-05', abertura: 375.85, fechamento: 373.56, minimo: 367.58, maximo: 376.70 },
        { data: '1929-09-06', abertura: 373.56, fechamento: 370.63, minimo: 366.16, maximo: 373.56 },
        { data: '1929-09-09', abertura: 370.63, fechamento: 367.91, minimo: 365.64, maximo: 371.47 },
        { data: '1929-09-10', abertura: 367.91, fechamento: 364.99, minimo: 362.68, maximo: 368.73 },
        { data: '1929-09-11', abertura: 364.99, fechamento: 361.22, minimo: 358.84, maximo: 365.38 },
        { data: '1929-09-12', abertura: 361.22, fechamento: 356.85, minimo: 354.18, maximo: 361.22 },
        { data: '1929-09-13', abertura: 356.85, fechamento: 350.62, minimo: 347.42, maximo: 356.85 },
        { data: '1929-09-16', abertura: 350.62, fechamento: 343.85, minimo: 341.24, maximo: 350.62 },
        { data: '1929-09-17', abertura: 343.85, fechamento: 342.13, minimo: 339.30, maximo: 345.89 },
        { data: '1929-09-18', abertura: 342.13, fechamento: 333.10, minimo: 331.10, maximo: 342.13 },
        { data: '1929-09-19', abertura: 333.10, fechamento: 327.37, minimo: 321.95, maximo: 333.10 },
        { data: '1929-09-20', abertura: 327.37, fechamento: 328.01, minimo: 324.50, maximo: 328.01 },
        { data: '1929-09-23', abertura: 328.01, fechamento: 322.40, minimo: 321.86, maximo: 328.01 },
        { data: '1929-09-24', abertura: 322.40, fechamento: 327.16, minimo: 320.36, maximo: 327.16 },
        { data: '1929-09-25', abertura: 327.16, fechamento: 321.23, minimo: 318.82, maximo: 327.16 },
        { data: '1929-09-26', abertura: 321.23, fechamento: 315.09, minimo: 314.73, maximo: 321.23 },
        { data: '1929-09-27', abertura: 315.09, fechamento: 303.77, minimo: 302.78, maximo: 315.09 },
        { data: '1929-09-30', abertura: 303.77, fechamento: 295.70, minimo: 294.07, maximo: 303.77 },
        { data: '1929-10-01', abertura: 297.88, fechamento: 304.75, minimo: 294.13, maximo: 305.93 },
        { data: '1929-10-02', abertura: 304.75, fechamento: 310.90, minimo: 301.81, maximo: 312.08 },
        { data: '1929-10-03', abertura: 310.90, fechamento: 313.94, minimo: 305.63, maximo: 314.57 },
        { data: '1929-10-04', abertura: 313.94, fechamento: 321.52, minimo: 311.12, maximo: 322.88 },
        { data: '1929-10-07', abertura: 321.52, fechamento: 326.51, minimo: 317.44, maximo: 327.37 },
        { data: '1929-10-08', abertura: 326.51, fechamento: 331.77, minimo: 323.62, maximo: 333.70 },
        { data: '1929-10-09', abertura: 331.77, fechamento: 335.35, minimo: 328.41, maximo: 336.47 },
        { data: '1929-10-10', abertura: 335.35, fechamento: 340.36, minimo: 332.58, maximo: 341.34 },
        { data: '1929-10-11', abertura: 340.36, fechamento: 343.75, minimo: 336.19, maximo: 345.33 },
        { data: '1929-10-14', abertura: 343.75, fechamento: 348.14, minimo: 339.91, maximo: 349.35 },
        { data: '1929-10-15', abertura: 348.14, fechamento: 351.90, minimo: 344.62, maximo: 353.55 },
        { data: '1929-10-16', abertura: 351.90, fechamento: 355.83, minimo: 349.23, maximo: 356.38 },
        { data: '1929-10-17', abertura: 355.83, fechamento: 360.07, minimo: 352.65, maximo: 361.18 },
        { data: '1929-10-18', abertura: 360.07, fechamento: 363.80, minimo: 357.46, maximo: 364.78 },
        { data: '1929-10-21', abertura: 363.80, fechamento: 368.52, minimo: 360.92, maximo: 369.65 },
        { data: '1929-10-22', abertura: 368.52, fechamento: 372.81, minimo: 365.19, maximo: 373.57 },
        { data: '1929-10-23', abertura: 372.81, fechamento: 377.28, minimo: 369.75, maximo: 378.08 },
        { data: '1929-10-24', abertura: 377.28, fechamento: 381.99, minimo: 374.15, maximo: 383.00 },
        { data: '1929-10-25', abertura: 381.99, fechamento: 386.94, minimo: 378.92, maximo: 388.28 },
        { data: '1929-10-28', abertura: 386.94, fechamento: 391.70, minimo: 383.67, maximo: 392.07 },
        { data: '1929-10-29', abertura: 391.70, fechamento: 396.82, minimo: 388.23, maximo: 397.37 }

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
