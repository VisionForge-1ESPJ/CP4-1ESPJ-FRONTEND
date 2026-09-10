📋 Task Manager — React + Vite

Aplicação web para gerenciamento de tarefas voltada para desenvolvedores, desenvolvida em React + Vite, com persistência de dados via localStorage e interface estilizada.

👥 Integrantes
Nome	RM
Gustavo Braga	569211
Henry Gabriel	570063
Matheus Carvalho	569454
Nicholas Belo	571063
🚀 Sobre o Projeto

O projeto tem como objetivo oferecer uma ferramenta simples e eficiente para que desenvolvedores possam organizar suas tarefas do dia a dia, permitindo cadastro, acompanhamento e filtragem de atividades de forma prática, com os dados salvos automaticamente no navegador.

✨ Funcionalidades
Cadastro de tarefas — Registro de novas tarefas contendo Nome, Data, Descrição e Nível de Prioridade.
Ações interativas — Botões para marcar tarefas como concluídas e para removê-las da lista.
Filtros rápidos — Visualização das tarefas por status: Todas, Pendentes e Concluídas.
Persistência automática — Os dados são salvos e recuperados automaticamente utilizando o localStorage, sem necessidade de backend.
Código comentado — Trechos que utilizam Hooks (useState, useEffect), métodos de array (filter e map) e callbacks estão devidamente comentados para fins didáticos.
🛠️ Tecnologias Utilizadas
React
Vite
JavaScript (ES6+)
CSS (interface estilizada)
LocalStorage API
📦 Como Executar o Projeto

Clone o repositório e execute os comandos abaixo:

bash
# Instalar as dependências
npm install

# Rodar o projeto em ambiente de desenvolvimento
npm run dev

O projeto estará disponível em http://localhost:5173 (porta padrão do Vite).

📁 Estrutura Básica do Projeto
├── src/
│   ├── components/     # Componentes reutilizáveis (formulário, lista, item de tarefa, filtros)
│   ├── hooks/          # Hooks customizados (se houver)
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Ponto de entrada da aplicação
├── index.html
├── package.json
└── README.md
📌 Observações
Todos os dados são armazenados localmente no navegador do usuário (localStorage), portanto não há persistência entre diferentes dispositivos ou navegadores.
O código foi comentado nas partes que utilizam Hooks, métodos de array (filter e map) e callbacks, facilitando o entendimento da lógica implementada.
