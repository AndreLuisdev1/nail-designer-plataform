# design-system/brand/: logo Rachel Ferreira Nail Designer

A logo desta pasta foi **reconstruída** a partir da imagem do Instagram (150 px), porque ainda não há arquivo oficial. O monograma RF foi vetorizado da imagem e o nome refeito na fonte Cinzel.

| Arquivo | O que é |
|---|---|
| `logo-principal.svg` | Empilhada, taupe escuro, para fundo claro |
| `logo-principal-ouro.svg` | Empilhada, dourado, para fundo taupe ou escuro |
| `logo-horizontal.svg` / `logo-horizontal-ouro.svg` | Monograma à esquerda, nome à direita (cabeçalho) |
| `logo-simbolo.svg` | Só o monograma (cabeçalho no celular, favicon) |
| `logo-mono.svg` | Empilhada em uma cor só |
| `demo.html` | Guia visual da marca. Abre sem internet; depende só de `../tokens.css`, `../../public/fonts/` e dos SVGs |
| `LICENSE-lucide.txt` | Licença dos ícones Lucide usados no demo |

## Como trocar pelo arquivo oficial

1. Substitua os SVGs **mantendo os mesmos nomes de arquivo**. O site e o demo apontam para esses nomes.
2. Mantenha em cada SVG: `role="img"`, `<title>` e `<desc>`, nenhum `<script>`, nenhuma referência externa (fonte, imagem ou link), e o texto convertido em contorno.
3. Se as cores mudarem, ajuste `design-system/tokens.json` e rode `npm run tokens`, `npm run theme` e `npm run check:contrast`.
