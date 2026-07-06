# 🎨 Noan Caliel Brostt - Portfolio

Bem-vindo ao repositório! Este projeto mostra minhas qualificações como Desenvolvedor Full Stack Sênior, especialista em Front-End e UX. 💻✨

## 🚀 Sobre o Projeto

Este é o meu portfólio pessoal, desenvolvido em **React 18 + Vite**, projetado para ser único, visualmente atraente e funcional. Aqui você encontrará informações sobre mim, meus projetos e minha trajetória como desenvolvedor.

### 🔹 Tecnologias Utilizadas:

* React 18 + Vite
* Three.js (via react-three-fiber) na nuvem 3D de habilidades
* i18next (site bilíngue pt/en)
* AOS (Animate on Scroll)
* Typewriter Effect
* CSS puro com variáveis por tema (dark/light)
* GitHub Pages para deploy

> 📚 Detalhes técnicos de como cada efeito foi implementado estão em [`docs/TECNOLOGIAS.md`](docs/TECNOLOGIAS.md).

## 📸 Preview

Você pode conferir meu portfólio ao vivo através do link: [🔗 Noan Caliel Brostt - Portfolio](https://noanbrostt.github.io/portfolio/)

## 🛠️ Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/noanbrostt/portfolio.git
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd portfolio
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    ```

    O projeto será aberto em `http://localhost:3000/portfolio/`.

## 🚀 Como Fazer o Deploy

O site fica no ar pelo GitHub Pages, servido a partir da branch `gh-pages`. Depois de commitar (e dar push) das mudanças na `main`, basta rodar:

```bash
npm run deploy
```

Esse único comando faz tudo:

1. `predeploy` roda o `vite build` e gera a versão de produção na pasta `dist/`;
2. o pacote `gh-pages` publica o conteúdo de `dist/` na branch `gh-pages` e faz o push automaticamente.

Não é preciso fazer checkout nem mexer manualmente na branch `gh-pages`: ela é sobrescrita pela ferramenta a cada deploy. O site atualiza em `https://noanbrostt.github.io/portfolio/` alguns instantes depois (a URL vem do campo `homepage` do `package.json`).

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para explorar, modificar e aprender com ele! 😊

---

📌 Feito com ❤️ por Noan Caliel Brostt
