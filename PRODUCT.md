# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript, `@astryxdesign/core` (React 19 + StyleX), Tailwind v4 só para layout. Testes: Vitest, Testing Library, Playwright e axe. Lint: ESLint + Prettier. Hospedagem: Vercel, só com dados mockados nesta fase (confirmado em 26/11/2026). Detalhes no DESIGN.md, seção 6.

## Users

- **Clientes da Rachel:** chegam quase sempre pelo link do WhatsApp, no celular. Querem ver serviços, preços e trabalhos, e marcar um horário sem a troca de mensagens.
- **Rachel (admin):** nail designer que atende sozinha. Gerencia agenda, serviços, cupons, clientes e feedbacks num painel.

## Product Purpose

Trocar o agendamento manual (WhatsApp + papel) por um sistema em que a cliente escolhe um horário livre e a Rachel administra a agenda. Sucesso: menos ida e volta de mensagens, zero horário marcado em dobro, visão clara de ocupação e faturamento. Detalhes em `docs/product/REQUIREMENTS.md`.

## Positioning

É o site e a agenda de uma profissional específica, não um marketplace: uma única nail designer, que atende em casa, com o alongamento de unhas como especialidade.

## Operating Context

- Atendimento na casa da Rachel. Decisão do usuário: publicar o endereço completo. Ver "Em aberto".
- Fuso fixo `America/Sao_Paulo`.
- Prazo de cancelamento e reagendamento definido pela Rachel (padrão de 48 h).

## Capabilities and Constraints

- Áreas: pública (serviços, portfólio, feedbacks, privacidade, termos), cliente (cadastro, agendar, meus agendamentos, meus dados) e admin.
- Coleta mínima: nome, e-mail, celular. Celular nunca público.
- Por enquanto sem backend: a etapa de site usa dados mockados e rotulados.

## Brand Commitments

- **Nome do estúdio: ainda não definido.** Enquanto isso, usar "Estúdio Rachel" marcado como provisório. "Agenda da Rachel" é o nome do projeto.
- **Logo: ainda não existe.** A logo em `design-system/brand/` é provisória e precisa ser fácil de trocar.
- Nunca usar emoji como ícone. Nunca exibir dado fictício sem rótulo.
- Direção visual: o usuário escolheu de propósito o padrão do setor (rosé e nude, serifa elegante), em vez das direções sorteadas, em 26/11/2026. A régua de acabamento é a de estúdios de beleza premium brasileiros (sem referência específica).

## Evidence on Hand

- Nenhuma foto de portfólio ainda (imagens em tratamento). Não inventar trabalhos: usar espaços rotulados como exemplo.
- Nenhum depoimento real. Não inventar feedbacks, notas, número de clientes ou preços como se fossem reais.

## Product Principles

1. Marcar é mais rápido que mandar mensagem.
2. A cliente vê o preço e a duração antes de decidir.
3. Privacidade é padrão: só o primeiro nome aparece em público, e nada pessoal fica guardado no navegador.
4. O trabalho da Rachel é a vitrine; a interface não compete com ele.

## Accessibility & Inclusion

WCAG 2.2 AA (o pedido atual sobe o RNF-21 de 2.1 para 2.2). Mobile primeiro, margem lateral de 16 px, nenhuma rolagem horizontal.

## Em aberto

- Nome oficial do estúdio e logo.
- Endereço: o usuário escolheu publicar o endereço completo. Alternativa recomendada por segurança: publicar só o bairro e enviar o endereço depois do agendamento confirmado.
- Itens já listados em `docs/product/REQUIREMENTS.md` (notificações, moderação, retenção, metas de desempenho, backup).
