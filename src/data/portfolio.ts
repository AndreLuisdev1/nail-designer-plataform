// Portfólio de EXEMPLO: ainda não há fotos (imagens em tratamento). Cada item vira um espaço rotulado.
export type Trabalho = {
  id: string;
  titulo: string;
  categoria: 'Alongamento' | 'Esmaltação' | 'Nail art';
  formato?: string;
};

export const trabalhos: Trabalho[] = [
  {id: 'p1', titulo: 'Alongamento em gel, nude rosado', categoria: 'Alongamento', formato: 'Amendoada'},
  {id: 'p2', titulo: 'Francesinha clássica', categoria: 'Alongamento', formato: 'Quadrada'},
  {id: 'p3', titulo: 'Esmaltação em gel vermelha', categoria: 'Esmaltação'},
  {id: 'p4', titulo: 'Baby boomer', categoria: 'Alongamento', formato: 'Bailarina'},
  {id: 'p5', titulo: 'Linhas finas douradas', categoria: 'Nail art'},
  {id: 'p6', titulo: 'Esmaltação em gel cor de vinho', categoria: 'Esmaltação'},
  {id: 'p7', titulo: 'Alongamento em fibra, cromado', categoria: 'Alongamento', formato: 'Stiletto'},
  {id: 'p8', titulo: 'Flores pintadas à mão', categoria: 'Nail art'},
  {id: 'p9', titulo: 'Blindagem com brilho natural', categoria: 'Esmaltação'},
];
