function finalizar (){

    var questao1 = document.getElementsByName ('questao1')
    var questao2 = document.getElementsByName ('questao2')
    var questao3 = document.getElementsByName ('questao3')
    var questao4 = document.getElementsByName ('questao4')
    var questao5 = document.getElementsByName ('questao5')

var pontos = 0
var resultado = document.getElementById('questionario')

    if (questao1[0].checked) { pontos++ }
    if (questao2[0].checked) { pontos++ }
    if (questao3[1].checked) { pontos++ }
    if (questao4[1].checked) { pontos++ }
    if (questao5[0].checked) { pontos++ }

if (pontos <= 0)
{resultado.innerHTML = 'Você não acertou nenhuma questão'}

if (pontos == 1)
{resultado.innerHTML = 'Você acertou 1 questão'}

if (pontos >= 2 && pontos < 5)
{resultado.innerHTML = (`Você acertou ${pontos} questões`)}

if (pontos == 5){
    resultado.style.textAlign = 'center'
    resultado.innerHTML = 'Parabéns! Você gabaritou!'
    var img = document.createElement('img')
    img.setAttribute ('id', 'foto')
    img.setAttribute ('src', 'gabaritou.png')
    resultado.appendChild(img)}}

function tentarnov () 
{location.reload(true)}
