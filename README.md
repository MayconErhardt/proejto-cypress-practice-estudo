# Projeto de Automação com Cypress - Practice Test Automation

Este projeto tem como objetivo realizar testes automatizados com Cypress na plataforma [Practice Test Automation](https://practicetestautomation.com/).

## 📁 Estrutura do Projeto

cypress/
├── e2e/
│ ├── Login.cy.js # Testes de login
│ └── Practice.cy.js # Testes da página Practice
├── fixtures/
│ └── example.json # Dados mockados
├── support/
│ ├── commands.js # Comandos customizados
│ ├── e2e.js # Configurações globais dos testes
│ └──  funcLogin.js # Funções auxiliares para login


✅ 1. Sessão de Pré-requisitos

- Node.js instalado (versão 14+)
- Gerenciador de pacotes `npm`

## 🚀 2. Sessão de Como Executar os Testes

Instale o Cypress no projeto:

npm init -y
npm install cypress --save-dev


Abra o Cypress em modo interativo:
npm run cypress:open


Ou rode todos os testes em modo terminal (headless):
npm test

## 👨‍💻 Autor

Maycon Erhardt  
[LinkedIn](https://www.linkedin.com/in/mayconerhardt/)  

