# 🏷️ Portfólio Profissional 

> [!NOTE]
> Projeto acadêmico desenvolvido para a disciplina de **Laboratório de Desenvolvimento de Software**, com o objetivo de criar um portfólio profissional web reutilizável e adaptável para diferentes integrantes do grupo.

---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/versão-0.1-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Estrutura das Páginas](#-estrutura-das-páginas)
- [Como Executar](#-como-executar)
- [Autores](#-autores)

---

## 🔗 Links Úteis

- 🎨 **Wireframes (Figma):**  
  https://www.figma.com/design/FGR596awWqFuYUBk3jcczj/Portfolio?node-id=0-1&t=qpuVStprvWKgAPAK-1

---

## 📝 Sobre o Projeto

Este projeto consiste no desenvolvimento de um **portfólio profissional web**, com foco na organização, navegação e apresentação de informações.

A aplicação foi desenvolvida como parte da disciplina de laboratório, com o objetivo de aplicar conceitos de desenvolvimento web, como:

- Estruturação de páginas  
- Navegação entre seções  
- Organização de layout  

Além disso, o projeto foi pensado como uma **base reutilizável**, permitindo que diferentes usuários adaptem o conteúdo conforme suas necessidades.

Atualmente, o projeto representa um **protótipo funcional**, com foco na estrutura e não no conteúdo final.

---

## ✨ Funcionalidades

- 🏠 Página inicial com introdução do autor  
- 👤 Página **Sobre Mim** com descrição detalhada (PT/EN)  
- 💻 Exibição de habilidades  
- 📁 Projetos exibidos em formato de cards com descrição e tecnologias utilizadas
- 🔗 Links para repositórios  
- 📩 Área de contato (estrutura inicial)  
- 📄 Header e Footer padronizados  
---

## 👨‍💻 Autores

- Mateus Azevedo Araújo
  
---


## 🛠 Tecnologias Utilizadas

### 💻 Front-end
- **HTML5** → Estrutura base da aplicação  
- **CSS3** → Estilização e layout responsivo (Flexbox e Grid)  
- **JavaScript (ES6+)** → Lógica e interatividade  
- **React** → Criação de componentes reutilizáveis e organização da interface  
- **React Router DOM** → Navegação entre páginas sem recarregar (SPA)  
- **Vite** → Ferramenta de build e servidor de desenvolvimento rápido  

---

## 📁 Estrutura do Projeto

```
projeto/
├── public/                    # Arquivos estáticos públicos
│   └── vite.svg             # Logo do Vite
├── src/                      # Código-fonte principal
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header.jsx        # Barra de navegação superior
│   │   ├── Header.css        # Estilos do Header
│   │   ├── Footer.jsx        # Rodapé da aplicação
│   │   ├── Footer.css        # Estilos do Footer
│   │   ├── Layout.jsx        # Layout principal (Header + Outlet + Footer)
│   │   └── Layout.css        # Estilos do Layout
│   ├── pages/                # Páginas principais
│   │   ├── Home.jsx          # Página inicial
│   │   ├── Home.css          # Estilos da Home
│   │   ├── Sobre.jsx         # Página "Sobre Mim"
│   │   ├── Sobre.css         # Estilos da página Sobre
│   │   ├── Projetos.jsx      # Página de projetos
│   │   └── Projetos.css      # Estilos da página Projetos
│   ├── assets/               # Imagens e arquivos de mídia
│   │   └── react.svg         # Logo do React
│   ├── App.jsx               # Componente principal (Roteamento)
│   ├── App.css               # Estilos da aplicação
│   ├── main.jsx              # Ponto de entrada React
│   └── index.css             # Estilos globais
├── index.html                # Template HTML principal
├── package.json              # Dependências do projeto
├── vite.config.js            # Configuração do Vite
└── eslint.config.js          # Configuração do ESLint (qualidade do código)
```


### Organização:

- **components/** → Elementos reutilizados em várias páginas (ex: Header e Footer)  
- **pages/** → Cada página principal do sistema  
- **Layout** → Define a estrutura base com Header + conteúdo + Footer  


## ⚙️ Funcionamento do Sistema

O projeto é estruturado como uma **Single Page Application (SPA)**, onde a navegação entre páginas ocorre sem recarregar o navegador.

### Organização dos Componentes

A aplicação segue uma estrutura em camadas:

- **App.jsx** → Define as rotas da aplicação  
- **Layout.jsx** → Estrutura padrão (Header + conteúdo + Footer)  
- **Pages** → Conteúdo específico de cada rota  

### Navegação

A navegação é feita com **React Router**, utilizando componentes como `Link` e `Route`.

Ao clicar em um link:
- A URL é atualizada  
- O React renderiza apenas o conteúdo da página correspondente  
- O Header e Footer permanecem fixos  

### Renderização Dinâmica

Alguns elementos são gerados dinamicamente com `.map()`, como:
- Lista de habilidades  
- Cards de projetos  

Isso permite reutilizar estrutura e facilitar manutenção do código.
---

## 📐 Estrutura das Páginas

- **Home:** Página inicial com apresentação e navegação  
- **Sobre mim:** Informações detalhadas e habilidades  
- **Projetos:** Listagem dos projetos desenvolvidos  
- **Header:** Navegação entre páginas  
- **Footer:** Contato e links adicionais  

---

## 🚀 Como Executar

```bash
npm install
npm run dev
