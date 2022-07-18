# **dsmeta - um projeto da Semana Spring React** 

A Semana Spring React ocorreu durante os dias 11 a 17 de julho. Foi um evento online e gratuito oferecido pela [DevSuperior](https://devsuperior.com.br).

A semana consistiu em uma sequência de 6 vídeos:
* Os dois primeiros definiram a criação da parte visual do projeto em HTML/CSS. Minha versão está disponível em: https://github.com/Ishik-R/dsmeta-css
* Os três vídeos seguintes apresentaram o passo a passo do desenvolvimento do projeto em si. O conteúdo de cada um dos respectivos vídeos está descrito nas partes 1, 2 e 3 logo abaixo.
* O vídeo de encerramento do projeto ficou disponível para dúvidas e a apresentação dos cursos da DevSuperior.

## **O que é este projeto?**
Trata-se de um tratamento de um conjunto de um banco de dados (em .json) de um conjunto hipotético de vendas.

Criou-se uma interface dinâmica na qual são exibidos até 20 vendas diferentes dentro de um intervalo de duas datas. Estas duas datas podem ser selecionadas por meio de duas barras interativas de seleção: a superior define a data inicial e a inferior define a data final.

<img src = "https://github.com/Ishik-R/dsmeta-images/blob/main/exemplo1.jpg?raw=true" height="200">

Esta interface ainda muda de acordo com a largura de exibição da janela: conforme a janela se torna mais larga, mais informações sobre cada usuário são exibidas. No total, cada venda possui 6 dados atrelados: ID, data da venda, nome do vendedor, visitas, vendas e total.

<img src = "https://github.com/Ishik-R/dsmeta-images/blob/main/exemplo2.jpg?raw=true" height="500">

Este projeto ainda conta com integração a mensagens de texto para celulares (SMS). O botão "notificar" envia uma mensagem diretamente a um número pré-definido (meu número pessoal, no caso) com um feedback sobre a venda selecionada.

<img src = "https://github.com/Ishik-R/dsmeta-images/blob/main/exemplo4.jpg?raw=true" height = "400">


# **Etapas do desenvolvimento do projeto:**

## PARTE 1 - DESENVOLVIMENTO FRONTEND
### **Construído em Spring React**
### Editor utilizado: VS Code (extensões: IntelliCode, ESLint, JSX HTMIL)
### Ferramentas necessárias: Nodejs 16, Yarn, STS, Git, GitHub

* O projeto foi criado no Spring Initializr com as seguintes dependências: Web, JPA, H2, Security (lembrando que foi necessário realizar pequenos ajustes no pom.xml).

* Limpeza do projeto padrão do ReactJS para que os componentes do projeto fossem adicionados.

* Adição do React DatePicker por meio do Yarn. Este recurso providencia um calendário interativo para o design, substituindo o input padrão do projeto.</p> 
React DatePicker: https://github.com/Hacker0x01/react-datepicker


## PARTE 2 - DESENVOLVIMENTO BACKEND
### Editor utilizado: Spring Tool Suite 4
### Ferramentas necessárias: Postman, Heroku CLI, Git, Twilio

* Cross-origin resource sharing (CORS): habilitação da comunicação entre o Heroku e nossa aplicação.</p>
Etapa na qual uma classe Java de configuração de comunicação foi repassado pronto. Como contém diversas nuances e configurações referentes ao Spring, esta parte foi abordada muito rapidamente.

* Mapeamento objeto-relacional (JPA).

* Criação de um banco de dados (H2).

* Primeiro teste de end-point da API REST (uso do Postman)</p>
Link padrão inserido no Postman (exemplo de um retorno de parte do banco de dados):</p>
http://localhost:8080/sales?minDate=2021-11-01&maxDate=2021-12-31

* Integração com o envio de SMS (Maven - Twilio)</p>
O envio automático de mensagens fez uso de uma conta gratuita da Twilio com as credenciais registradas diretamente como parâmtros no Spring Tool Suite.</p> 
Para ajustar os parâmetros basta selecionar a pasta principal do projeto com o botão direito -> Run as -> Run Configurations. </p>
Link padrão inserido no Postman:</p> 
http://localhost:8080/sales/53/notification

* Implementação na nuvem (Heroku)</p>
Login no Heroku (via terminal Git) e criação de um projeto no Heroku (com os mesmos ajustes das credenciais do Twilio)

## PARTE 3 - INTEGRAÇÃO FRONTEND-BACKEND
* Adição do Axios ao frontend (React hook)</p>
Requisição ao banco de dados por meio do useEffect (ainda sem exibição no frontend).

* Criação do request.ts (componente TypeScript)</p>
Direcionar a requisição de endereço numa variável (que contém o endereço).

* Criação do sale.ts (componente TypeScript)</p>
Definir o modelo dos dados a serem exportados para o frontend.

* Definir responsividade da interface: sales.map.

* Definir responsividade do calendário: axios.get com informações da data mínima e máxima.

* Definido o parâmetro para a responsividade do botão (Props) por meio de um evento (onClick)</p>
Função responsável por administrar esse evento: handleClick (realiza a chamada do endpoint que envia o SMS).

* Reconhecimento do ID correspondente ao botão para o envio do SMS.

* Implementação de uma mensagem Toast, avisando o usuário sobre o sucesso no envio do SMS.

* Disponibilizar a aplicação online por meio do Netlify.</p>
O link encontra-se ativo e funcionando, porém, já que existe uma função que envia automaticamente SMS ao meu celular toda vez que a função de notificação é ativada, eu não estarei disponibilizando o link no README para evitar um excesso de notificações em meu celular pessoal.

## **Comentários**
Eu devo dizer que os vídeos da Semana Spring React foram muito bons para quem quer começar a montar projetos para compor um portifólio. Tudo foi explicado de maneira clara e direto ao ponto.

Essa postura de fazer tudo bem explicado, por outro lado, de um certo modo tornou as explicações não muito profundas. Em diversas ocasiões era preciso somente copiar as linhas de código, mas dada a limitação de tempo eu diria que houve um bom equilíbrio entre explicar as funções de cada parte e etapa e a agilidade de desenvolver um projeto deste porte.

É claro que o projeto poderia ser bem melhor trabalhado: a interface poderia indicar com maior clareza qual é a data final e inicial, por exemplo. Ou conseguir exibir mais dados de um determinado intervalo de tempo. Poderia existir também modos de se ordenar a exibição dos resultados por ID ou nome. 

Existem ainda inúmeras funcionalidades que poderiam ser implementadas. Para um primeiro projeto integrando tantas funcionalidades distintas eu diria que estou muito satisfeito!

Eu gostaria de deixar os links para os vídeos na descrição deste projeto, porém, como se trata de um evento de duração limitada, as aulas estarão disponíveis somente até o final do evento (dia 17/07/2022).

***Deixo aqui meu agradecimento e recomendação para o DevSuperior.***

## **Problemas reconhecidos**

Um ponto que deve ser ressaltado também é o fato de que após o projeto ter sido colocado no Heroku, eu tentei utilizar o botão de notificação na versão do projeto disponibilizado nele. O projeto funcionava sem problemas no local host, mas no Heroku o botão não apresentava nenhuma resposta. Um rápido teste com o console indicou isso.

Acabei prosseguindo o projeto (e outras pessoas relataram o mesmo problema) e pude finalizá-lo sem maiores contratempos. Ao subir o projeto na Netfify, porém, quando o botão de notificação era acionado a tela ficava preta (sendo necessário recarregar a página). O SMS, todavia, parece ter sido enviado corretamente.

Caso alguém queira testar o projeto por conta própria, basta baixar o projeto, abrir o Git Bash na pasta (folder) "frontend" e executar o Yarn no terminal: 

```yarn dev```

Lembrando que eu esotu começando a me aventurar no mundo React. Eu ainda não tenho pleno domínio de tudo que foi passado durante a semana, então provavelmente muitas funções poderiam estar melhor configuradas. No geral, estarei a disposição para esclarecimentos e feedbacks.