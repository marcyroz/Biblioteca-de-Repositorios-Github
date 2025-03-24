# 🚀 Biblioteca de Repositórios do GitHub

Esse projeto foi feito usando **React** e serve para armazenar e mostrar os repositórios do **GitHub** que o usuário inserir. Com ele, você consegue adicionar repositórios no formato `nomedousuario/nomedorepositorio` e acessar as **issues** desses repositórios. 

🔗 **Deploy:** [Projeto de Website em React](https://projeto-de-website-em-react.vercel.app/)

> ⚠ **Aviso:** Antes a aplicação funcionava bem no deploy, mas devido a mudanças nas políticas da API do GitHub, agora é necessário rodar localmente para utilizar todas as features do projeto 🥺

---

## 🛠 Tecnologias Utilizadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-FF4A00?style=for-the-badge&logo=vite&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

---

## 📥 Como Utilizar

### 1️⃣ **Configuração do Token do GitHub**

Você vai precisar de um **token do GitHub** para fazer requisições à API e obter os repositórios e suas **issues**.  
Se ainda não tem um token, pode gerar um seguindo este tutorial da [documentação oficial do GitHub](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Após gerar o token:
1. Copie o valor do token gerado.
2. Insira o token no arquivo:
   
```
Biblioteca-de-Repositorios-Github\src\services\api.jsx
```
   
📸 _Aqui vai um print do local._

![image](https://github.com/user-attachments/assets/4cbbd506-16ba-43d3-b367-21f7ec613269)

---

### 2️⃣ **Instalação das Dependências**

Você pode instalar as dependências usando **Yarn** ou **NPM**, como preferir:

#### Usando Yarn:
```bash
yarn install
```

#### Usando NPM:
```bash
npm install
```

---

### 3️⃣ **Rodando o Projeto**

Depois de instalar as dependências, execute o projeto localmente com:

```bash
yarn dev
```
ou
```bash
npm run dev
```

Agora, é só acessar a aplicação no navegador em `http://localhost:5173`.

---

## 🌟 Nova Feature: **PWA (Progressive Web App)**  

🚀 **Agora o projeto funciona como um PWA!** Isso significa que você pode acessá-lo offline e até adicioná-lo à tela inicial do seu celular para usá-lo como um app. Essa implementação foi feita usando o **Vite**.

---

## 🧑‍💻 Estrutura do Código

Esse projeto foi uma oportunidade de aprendizado, por isso, utilizei **classes** em alguns componentes. Hoje em dia, a maioria dos projetos em React utiliza **hooks e componentes funcionais**, mas nesse caso, optei por esse modelo para fins de estudo.

---

Espero que esse projetinho seja útil para você guardar seus repositórios favoritos 😼
