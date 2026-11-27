export type Dados = {nome: string; email: string; celular: string; aceite: boolean};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Mensagens dizem o que fazer (DESIGN.md, tom de voz). Vazio = tudo certo. */
export function validarDados(d: Dados): Partial<Record<keyof Dados, string>> {
  const e: Partial<Record<keyof Dados, string>> = {};
  if (d.nome.trim().length < 2) e.nome = 'Digite seu nome.';
  if (!EMAIL.test(d.email.trim())) e.email = 'Digite um e-mail válido, por exemplo ana@exemplo.com.';
  const digitos = d.celular.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
  if (digitos.length < 10 || digitos.length > 11)
    e.celular = 'Digite o celular com DDD, por exemplo 11 91234-5678.';
  if (!d.aceite)
    e.aceite =
      'Para agendar, é preciso aceitar os termos de uso e confirmar que leu a política de privacidade.';
  return e;
}
