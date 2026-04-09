# 🦟 Jogo Mata-Mosca

Um jogo interativo e divertido desenvolvido com tecnologias web fundamentais, onde o objetivo é clicar nos mosquitos que surgem aleatoriamente na tela antes que o tempo acabe ou você perca todas as suas vidas.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5**: Estruturação semântica das páginas do jogo, incluindo a tela inicial, o palco do jogo e as telas de fim de jogo.
- **CSS3**: Estilização visual, animações de inversão (scaleX), responsividade e customização do cursor (mata-mosca).
- **JavaScript (ES6+)**: Toda a lógica do jogo, manipulação do DOM, funções matemáticas para aleatoriedade e controle de intervalos de tempo.
- **Bootstrap 4**: Utilizado para agilizar o layout das telas de início e fim, garantindo centralização e um visual moderno.

## 🧠 O que foi aprendido e aplicado

Durante o desenvolvimento deste projeto, diversos conceitos fundamentais de programação e desenvolvimento web foram colocados em prática:

### 1. Manipulação Dinâmica do DOM
Aprendemos a criar, remover e modificar elementos HTML em tempo real utilizando JavaScript. Isso inclui a geração dinâmica das imagens dos mosquitos e a alteração dos corações (vidas).

### 2. Lógica de Aleatoriedade
Uso do objeto `Math` (`Math.random` e `Math.floor`) para calcular coordenadas X e Y dentro dos limites dinâmicos da janela do navegador, garantindo que os mosquitos apareçam em locais diferentes a cada ciclo.

### 3. Gerenciamento de Tempo (Intervalos)
Aplicação das funções `setInterval` e `clearInterval` para:
- Controlar o surgimento periódico dos mosquitos.
- Gerenciar o cronômetro regressivo do jogo.

### 4. Responsividade e Eventos de Janela
Implementação do evento `onresize` para ajustar o palco do jogo automaticamente caso o usuário redimensione o navegador, mantendo a área de jogo sempre precisa.

### 5. Comunicação via URL
Uso de `window.location.search` para recuperar parâmetros passados entre páginas (os níveis de dificuldade), permitindo que uma única lógica de jogo se adapte a diferentes velocidades.

### 6. Controle de Estado e Fluxo
Desenvolvimento de uma máquina de estados simples para gerenciar:
- **Níveis de Dificuldade**: Normal, Difícil e Chuck Norris.
- **Condições de Vitória**: Sobreviver até o tempo zerar.
- **Condições de Derrota**: Perder os 3 corações (vidas).

## 🛠️ Como Executar

1. Clone ou baixe este repositório.
2. Certifique-se de ter a pasta `imagens` com os recursos necessários.
3. Abra o arquivo `index.html` em qualquer navegador moderno.
4. Escolha a dificuldade e divirta-se!

---
Desenvolvido como um exercício prático de lógica de programação com JavaScript. 🚀
