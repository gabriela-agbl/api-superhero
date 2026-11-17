# SuperHero 🦸‍♀️

Aplicação web estática em **HTML5, CSS3 e JavaScript puro** para consulta interativa de super-heróis, com consumo dinâmico da [SuperHero API](https://superheroapi.com). Projeto desenvolvido para a atividade prática de **Web Development Front-End**.

## 📚 Documentação teórica

A parte teórica do trabalho (o que é API, DOM, funções usadas, escolha da API e regras de acesso) está em:

**➡️ [docs/documentacao.md](docs/documentacao.md)**

## Funcionalidades

- Busca de heróis por nome (ao abrir a página, carrega "Batman").
- Cards criados dinamicamente com JavaScript (`fetch` + `createElement` + `appendChild`), com nome, imagem, raça, gênero e poder.
- Interface responsiva, feita só com HTML e CSS, sem frameworks.

## Como executar

1. Baixe ou clone o repositório.
2. Abra o `index.html` no navegador.

> A API exige um token pessoal (veja a [documentação](docs/documentacao.md#5-regras-de-acesso-e-documentação-da-api)). Para usar o seu, troque o valor de `TOKEN` em `js/script.js`.

## Estrutura do projeto

```
api-superhero/
├── index.html
├── style/
│   └── style.css
├── js/
│   └── script.js
├── docs/
│   └── documentacao.md
└── README.md
```

## Tecnologias

HTML5 · CSS3 · JavaScript (Fetch API e manipulação do DOM)
