# Portfólio — Marcos Fernandes

Site estático (HTML, CSS e JavaScript puros). Sem build, sem dependências.

## Estrutura

```
portfolio-marcos/
├── index.html            # estrutura e textos
├── assets/
│   ├── css/style.css     # cores (variáveis em :root), layout e responsivo
│   ├── js/main.js        # animação do celular e destaque das palavras no scroll
│   ├── img/              # imagens, prints e logos (use .webp)
│   └── video/            # vídeos curtos (.mp4)
├── .vscode/              # extensões e configurações recomendadas
└── README.md
```

## Como rodar

1. Abra a pasta no VS Code (`File > Open Folder`).
2. Instale a extensão recomendada **Live Server**.
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

## Onde editar

- **Cores:** variáveis no topo de `assets/css/style.css` (`--accent` é o dourado).
- **Projetos:** blocos `<article class="proj ...">` em `index.html`.
- **Demonstrações:** blocos `<figure class="item">` em `index.html`. Troque o texto dentro de `<div class="media">` por `<img>` ou `<video>`. A categoria é o `data-cat` (`sites`, `social` ou `links`).
- **Serviços:** blocos `<div class="plan">` em `index.html`.
- **Instagram:** o link `instagram.com/marcosfernandesp_` aparece em `index.html`.

## Publicar

Arraste a pasta para o Netlify Drop, ou suba para um repositório no GitHub e conecte à Vercel ou Cloudflare Pages.

## Pendências

- [ ] Trocar os projetos conceito por trabalhos reais
- [ ] Adicionar seção de resultados reais das redes
- [ ] Definir domínio próprio
- [ ] Adicionar favicon e imagem de compartilhamento (og:image)

## Links dos modelos no ar

- Doces: https://claude.ai/artifact/EVEC6FQ9Wo7oRM52hJ2VJk
- Personal trainer: https://claude.ai/artifact/FaBG3Rhxh1orqAU66LRQwn
- Influenciador: https://claude.ai/artifact/K9GAJZo3JFMo6cDgULuZWQ

Nas versões no ar, o WhatsApp aponta para o Marcos (61 99542-4114). Nos arquivos de `templates/`, o número é um espaço reservado (`5500000000000`) para você trocar por cliente.
