# Agenda da Rachel

Site e agendamento online da Rachel, nail designer. Nesta fase o site é uma **demonstração**: dados de exemplo, sem backend, nada do que se preenche é enviado ou guardado.

- O que o produto faz e para quem: [PRODUCT.md](PRODUCT.md) e [docs/product/](docs/product/)
- Visual, tom de voz, componentes e regras: [DESIGN.md](DESIGN.md)

## Rodar

```bash
npm install
npm run dev          # http://localhost:3000
```

| Comando | Para quê |
|---|---|
| `npm test` | Testes unitários (regras de agenda, cupom, validação) |
| `npm run test:e2e` | Testes no navegador: acessibilidade, celular, fluxo de agendamento |
| `npm run lint` / `npm run typecheck` | Qualidade do código |
| `npm run tokens` | Gera `design-system/tokens.css` a partir de `design-system/tokens.json` |
| `npm run theme` | Gera o tema do Astryx a partir dos tokens |
| `npm run check:contrast` | Confere o contraste WCAG de todas as cores |

## Onde fica cada coisa

```
├─ README.md, PRODUCT.md, DESIGN.md   comece por aqui
├─ CLAUDE.md, AGENTS.md               instruções para agentes de IA
│
├─ design-system/          identidade visual (fonte única)
│  ├─ tokens.json          cores, tipografia, espaçamento: edite aqui
│  ├─ tokens.css           gerado, não editar
│  ├─ brand/               logos e guia visual (demo.html)
│  └─ scripts/             verificação de contraste
│
├─ src/
│  ├─ app/                 páginas do site (uma pasta por endereço: /servicos, /agendar…)
│  ├─ features/
│  │  └─ agendamento/      fluxo de agendamento, horários livres e suas regras (lib/ + testes)
│  ├─ components/
│  │  ├─ layout/           cabeçalho, rodapé e faixa de página
│  │  └─ ui/               peças reutilizáveis (selo "Exemplo", foto, preço e duração, texto legal)
│  ├─ data/                dados de exemplo: marca, serviços, agenda, portfólio
│  ├─ theme/               tema do Astryx (rachel.ts) e sua versão compilada (built/)
│  └─ types/               declarações de tipo
│
├─ public/fonts/           fontes do site (auto-hospedadas)
├─ tests/e2e/              testes no navegador (os unitários ficam ao lado do código, *.test.ts)
├─ docs/                   requisitos e notas de produto e design
└─ .github/workflows/      CI: roda todas as verificações em cada PR
```

Pastas que começam com ponto (`.claude`, `.impeccable`, `.obsidian`) são de ferramentas; `.next`, `node_modules` e `tests/e2e/test-results` são geradas e não vão para o git.

## Trocar dados de exemplo pelos reais

Tudo o que é fictício está em `src/data/` (e marcado no site com o selo "Exemplo"). A logo (reconstruída até chegar o arquivo oficial) está em `design-system/brand/`: veja o [README da marca](design-system/brand/README.md).
