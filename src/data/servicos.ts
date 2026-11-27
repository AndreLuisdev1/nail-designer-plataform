// Serviços de EXEMPLO: nomes, durações e valores fictícios até a Rachel cadastrar os reais.
export type Servico = {
  id: string;
  nome: string;
  nomeCurto: string; // usado onde o espaço é pouco (opções lado a lado)
  descricao: string;
  duracaoMin: number;
  preco: number; // centavos
  categoria: 'Alongamento' | 'Esmaltação' | 'Cuidados';
};

export const servicos: Servico[] = [
  {
    id: 'gel',
    nome: 'Alongamento em gel',
    nomeCurto: 'Gel',
    descricao:
      'Aplicado sobre a unha natural e moldado no formato que você escolher: amendoada, quadrada, bailarina ou stiletto.',
    duracaoMin: 150,
    preco: 18000,
    categoria: 'Alongamento',
  },
  {
    id: 'fibra',
    nome: 'Alongamento em fibra de vidro',
    nomeCurto: 'Fibra',
    descricao: 'Fios de fibra sob o gel deixam a unha fina e resistente, com acabamento natural.',
    duracaoMin: 180,
    preco: 20000,
    categoria: 'Alongamento',
  },
  {
    id: 'manutencao',
    nome: 'Manutenção do alongamento',
    nomeCurto: 'Manutenção',
    descricao: 'Preenchimento do crescimento e reforço da estrutura, a cada três ou quatro semanas.',
    duracaoMin: 90,
    preco: 12000,
    categoria: 'Alongamento',
  },
  {
    id: 'esmaltacao',
    nome: 'Esmaltação em gel',
    nomeCurto: 'Esmaltação',
    descricao: 'Cor que dura sem descascar, na unha natural. Inclui cutilagem.',
    duracaoMin: 60,
    preco: 7000,
    categoria: 'Esmaltação',
  },
  {
    id: 'blindagem',
    nome: 'Blindagem',
    nomeCurto: 'Blindagem',
    descricao: 'Camada fina de gel que protege a unha natural enquanto ela cresce.',
    duracaoMin: 75,
    preco: 8000,
    categoria: 'Cuidados',
  },
  {
    id: 'remocao',
    nome: 'Remoção',
    nomeCurto: 'Remoção',
    descricao: 'Retirada do alongamento ou do gel sem agredir a unha natural.',
    duracaoMin: 45,
    preco: 5000,
    categoria: 'Cuidados',
  },
];

export const servicoPrincipal = servicos[0]!;
export const buscarServico = (id: string | null | undefined) => servicos.find((s) => s.id === id);
