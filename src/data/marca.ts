// Dados da marca. Tudo que é provisório ou de exemplo está marcado aqui e aparece rotulado no site.
export const marca = {
  nome: 'Estúdio Rachel',
  nomeProvisorio: true,
  profissional: 'Rachel',
  descricao: 'Alongamento de unhas e esmaltação em gel, com atendimento em casa e hora marcada.',
  // Sem número real ainda: os botões de WhatsApp levam para a página de contato.
  whatsapp: null as null | {numero: string; exibicao: string},
  instagram: {usuario: '@perfil.exemplo', exemplo: true},
  email: {endereco: 'contato@exemplo.com', exemplo: true},
  endereco: {
    linha1: 'Rua Exemplo, 000',
    linha2: 'Bairro Exemplo, Cidade – UF',
    cep: '00000-000',
    referencia: 'Ponto de referência a definir.',
    exemplo: true,
  },
  prazoCancelamentoHoras: 48,
};
