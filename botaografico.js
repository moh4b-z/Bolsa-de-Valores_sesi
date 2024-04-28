let divFechamento = document.querySelector('.Fechamento')
let icon_Fechamento = document.querySelector('.icon_Fechamento')
let icon_Fecha1 = document.querySelector('#icon-fecha1')
//
let divMaximo = document.querySelector('.Maximo')
let icon_max = document.querySelector('.icon_max')
let icon_Fecha2 = document.querySelector('#icon-fecha2')
//
let divMinimo = document.querySelector('.Minimo')
let icon_min = document.querySelector('.icon_min')
let icon_Fecha3 = document.querySelector('#icon-fecha3')
//
let divCompletar = document.querySelector('.Completar')
let icon_com = document.querySelector('.icon_com')
let icon_Fecha4 = document.querySelector('#icon-fecha4')
//

icon_Fechamento.addEventListener('click', ()=> {
    divFechamento.classList.add('ativar')
})
icon_Fecha1.addEventListener('click', ()=> {
    divFechamento.classList.remove('ativar')
})
//

icon_max.addEventListener('click', ()=> {
    divMaximo.classList.add('ativar')
})
icon_Fecha2.addEventListener('click', ()=> {
    divMaximo.classList.remove('ativar')
})
//

icon_min.addEventListener('click', ()=> {
    divMinimo.classList.add('ativar')
})
icon_Fecha3.addEventListener('click', ()=> {
    divMinimo.classList.remove('ativar')
})
//

icon_com.addEventListener('click', ()=> {
    divCompletar.classList.add('ativar')
})
icon_Fecha4.addEventListener('click', ()=> {
    divCompletar.classList.remove('ativar')
})
//