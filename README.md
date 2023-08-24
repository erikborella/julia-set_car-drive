# Visualização do Conjunto de Julia usando GPU.js e HTML Canvas

Este README fornece uma explicação da visualização do Conjunto de Julia implementada no código fornecido, utilizando a biblioteca GPU.js e o HTML Canvas.

## Índice

- [Introdução](#introdução)
- [Configuração](#configuração)
- [Implementação](#implementação)
- [Controles](#controles)
- [Conclusão](#conclusão)

## Introdução

O Conjunto de Julia é um fractal famoso na matemática, gerado através da iteração de uma equação complexa. Este código implementa uma visualização em tempo real do Conjunto de Julia usando a biblioteca GPU.js para computação paralela e o HTML Canvas para renderização.

## Configuração

Para executar este código, você precisa de um navegador web moderno que suporte JavaScript e HTML5. Não são necessárias instalações adicionais.

1. Clone ou faça o download do repositório de código.
2. Abra o arquivo `index.html` em seu navegador web.

## Implementação

O código consiste em dois arquivos principais: `index.html` e `script.js`.

- `index.html`: Este arquivo configura a estrutura HTML, incluindo o elemento de tela (canvas) onde a visualização será desenhada. Ele inclui os arquivos de script necessários: `gpu.js` e `script.js`.

- `script.js`: Este arquivo contém a implementação principal da visualização do Conjunto de Julia. Aqui está uma explicação da implementação:

  1. Inicialização:
     - O canvas, a instância GPU.js e o contexto do canvas são criados.

  2. Kernel GPU.js:
     - A função kernel `drawKernel` do GPU.js é definida. Esta função calcula a cor para cada pixel com base no algoritmo do Conjunto de Julia.

  3. Loop de Renderização:
     - A função `renderCanvas` é chamada repetidamente usando `requestAnimationFrame` para criar uma animação em tempo real.

  4. Cálculo do Conjunto de Julia:
     - O Conjunto de Julia é calculado para cada pixel, chamando o `drawKernel` com as coordenadas complexas atuais.

  5. Controles:
     - As teclas de seta são usadas para controlar a posição e a rotação de um pequeno círculo no canvas.

## Controles

Os controles para interagir com a visualização são os seguintes:

- **Seta para a Direita**: Girar o pequeno círculo no sentido horário.
- **Seta para a Esquerda**: Girar o pequeno círculo no sentido anti-horário.
- **Seta para Cima**: Mover o pequeno círculo para cima.
- **Seta para Baixo**: Mover o pequeno círculo para baixo.

## Conclusão

Este README forneceu uma visão geral da visualização do Conjunto de Julia implementada usando GPU.js e HTML Canvas. O código cria uma visualização interativa do fractal Conjunto de Julia e permite que os usuários controlem a posição e a rotação dos elementos no canvas usando as teclas de seta.

Sinta-se à vontade para explorar e modificar o código para experimentar ainda mais com visualizações fractais e computações baseadas em GPU.

![image](https://github.com/erikborella/julia-set_car-drive/assets/27148919/c5834242-d645-4be4-b16c-53c3be0a6068)
![image](https://github.com/erikborella/julia-set_car-drive/assets/27148919/25afa49b-6761-4ff6-a3ad-d1a89b2a9db4)
