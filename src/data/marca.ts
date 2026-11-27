// Dados da marca. Instagram e e-mail ainda são exemplos e aparecem rotulados no site.
export const marca = {
  nome: 'Rachel Ferreira Nail Designer',
  nomeCompleto: 'Rachel Ferreira',
  profissional: 'Rachel', // primeiro nome, usado nas frases ("Fale com a Rachel")
  descricao: 'Alongamento de unhas e esmaltação em gel, com atendimento em casa e hora marcada.',
  // DDD 12 (Caçapava-SP). Mesmo número para WhatsApp e ligação.
  telefone: {numero: '5512996579458', exibicao: '(12) 99657-9458'},
  instagram: {usuario: '@rachelferreira.nails', url: 'https://instagram.com/rachelferreira.nails'},
  email: {endereco: 'contato@exemplo.com', exemplo: true},
  endereco: {
    linha1: 'Rua José Bonifácio, 422',
    linha2: 'Jardim Rafael, Caçapava – SP',
  },
  prazoCancelamentoHoras: 48,
};

export const linkWhatsApp = `https://wa.me/${marca.telefone.numero}`;
export const linkTelefone = `tel:+${marca.telefone.numero}`;
