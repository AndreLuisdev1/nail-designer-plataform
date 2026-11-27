---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

Escopo: página inicial (/) do site público. Modo: Persuade.
Público: clientes da Rachel vindas do link do WhatsApp, no celular. Ação: escolher um horário livre e seguir para /agendar.
Restrições: dados mockados e rotulados "Exemplo"; nada de depoimento, número ou prêmio inventado; WCAG 2.2 AA; margem 16 px; sem rolagem horizontal.

## Direction contract

THESIS: a página inicial é a agenda da semana aberta. Em vez do hero de foto com botão "Agendar" que leva a outra tela, a primeira tela já mostra os horários livres dos próximos dias, e tocar num horário é começar o agendamento. Recusa: o hero decorativo com CTA solto.

OWN-WORLD: padrão do setor feito com capricho. Fundo nude-50, faixa rosé-100 para a grade da semana, cartões brancos com raio de 20 px, títulos em Bodoni Moda (itálico só numa palavra), texto e números em Jost com algarismos tabulares, ação em rosé-600 em pílula. Sem foto real ainda: espaços rotulados "Exemplo".

STORY: a cliente entende em uma tela o que é (alongamento de unhas, em casa, com hora marcada), vê preço e duração do serviço principal, acredita porque vê horários reais (exemplo) e regras claras, e toca num horário ou em "Agendar horário".

FIRST VIEWPORT: no celular, título display de 2 a 3 linhas, uma frase de apoio e, logo abaixo, o bloco "Horários livres" com o seletor de serviço e o primeiro dia já com os horários em pílulas de 44 px. No desktop, título e apoio à esquerda (40%) e a grade de 5 dias à direita (60%). A ação primária é cada horário; o botão "Agendar horário" fica na barra superior.

FORM: grade da semana com horários livres como abertura, posição 6 na minha lista ordenada; seed:4bbb20a06508cf46 (rodada sem a página de decisão: usuário ausente, estrutura sorteada adotada como padrão).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
