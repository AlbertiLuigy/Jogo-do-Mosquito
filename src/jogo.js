
// Variáveis globais para armazenar as dimensões do palco
var altura = 0
var largura = 0
// Variáveis para controlar o sistema de vidas e o tempo do jogo
var vidas = 1
var tempo = 15

// Tempo inicial de criação dos mosquitos (pode ser alterado pelo nível)
var criaMosquitoTempo = 1500

// Recupera o nível selecionado na página inicial através da URL
var nivel = window.location.search
nivel = nivel.replace('?', '') // Remove o caractere '?' da string

// Define o tempo de criação dos mosquitos com base no nível escolhido
if(nivel === 'normal') {
	// 1500ms (1.5 segundos) para o nível normal
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	// 1000ms (1 segundo) para o nível difícil
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	// 750ms (0.75 segundos) para o nível Chuck Norris
	criaMosquitoTempo = 750
}

// Função para atualizar as dimensões da área do jogo dinamicamente
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

// Chama a função pela primeira vez para definir o tamanho inicial
ajustaTamanhoPalcoJogo()

// Cria um cronômetro que decrementa o tempo a cada 1 segundo (1000ms)
var cronometro = setInterval(function() {

	tempo -= 1

	// Condição de vitória: tempo esgotado
	if(tempo < 0) {
		clearInterval(cronometro) // Para o cronômetro
		clearInterval(criaMosquito) // Para a criação de mosquitos
		window.location.href = 'vitoria.html' // Redireciona para a página de vitória
	} else {
		// Atualiza o valor do tempo na interface HTML
		var cronoElem = document.getElementById('cronometro')
		if (cronoElem) {
			cronoElem.innerHTML = tempo
		}
	}
	
}, 1000)

// Cria o intervalo para gerar mosquitos com base no tempo definido pelo nível
var criaMosquito = setInterval(function() {
	posicaoRandomica()
}, criaMosquitoTempo)

// Função principal para gerar a posição aleatória do mosquito e gerenciar as vidas
function posicaoRandomica() {

	// Lógica de remoção automática: se já existir um mosquito na tela, o jogador perde vida
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		// Se as vidas chegarem a 3 e o jogador falhar novamente, é Game Over
		if(vidas > 3) {
			window.location.href = 'game_over.html'
		} else {
			// Muda a imagem do coração cheio para vazio
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}

	// Gera coordenadas X e Y aleatórias dentro dos limites da tela
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	// Garante que o mosquito não apareça fora da tela (coordenadas negativas)
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	// Cria dinamicamente o elemento HTML da imagem do mosquito
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	// Aplica classes aleatórias para variar o tamanho e o lado para onde o mosquito olha
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	// Posiciona o mosquito de forma absoluta na tela usando as coordenadas geradas
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	
	// Define a ação de clique: se o jogador clicar no mosquito, ele é removido
	mosquito.onclick = function() {
		this.remove()
	}

	// Adiciona o mosquito ao corpo (body) do documento HTML
	document.body.appendChild(mosquito)
}

// Função que retorna aleatoriamente uma das 3 classes de tamanho definidas no CSS
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3)

	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

// Função que retorna aleatoriamente uma classe para inverter horizontalmente o mosquito
function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2)

	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}