# brand/: marca PROVISÓRIA

O nome "Estúdio Rachel" e a logo desta pasta são **provisórios**. Ainda não existe logo oficial.

| Arquivo | O que é |
|---|---|
| `logo-principal.svg` | Símbolo sobre o nome (uso padrão) |
| `logo-horizontal.svg` | Símbolo à esquerda, nome à direita (barra de navegação) |
| `logo-simbolo.svg` | Só o símbolo (favicon, avatar) |
| `logo-mono.svg` | Principal em uma cor só |
| `demo.html` | Guia visual da marca. Abre sem internet; depende só de `../tokens.css`, `../public/fonts/` e dos SVGs |
| `LICENSE-lucide.txt` | Licença dos ícones Lucide usados no demo |

## Como trocar pela logo oficial

1. Substitua os quatro SVGs **mantendo os mesmos nomes de arquivo**. O site e o demo apontam para esses nomes.
2. Mantenha em cada SVG: `role="img"`, `<title>` e `<desc>`, nenhum `<script>`, nenhuma referência externa (fonte, imagem ou link), e o texto convertido em contorno.
3. Se as cores da logo oficial mudarem, ajuste `tokens.json` e rode o gerador e o `scripts/check-contrast.mjs` (veja o DESIGN.md).
4. Troque o nome do estúdio na constante de marca do site (Etapa 3) e remova os avisos de "provisório".

Tamanhos mínimos: símbolo com 32 px de altura, horizontal com 160 px de largura, principal com 140 px de largura.
