import {describe, expect, it} from 'vitest';
import {validarDados} from './validacao';

const ok = {nome: 'Ana Souza', email: 'ana@exemplo.com', celular: '(11) 91234-5678', aceite: true};

describe('validarDados', () => {
  it('aceita dados completos', () => {
    expect(validarDados(ok)).toEqual({});
  });
  it('explica como corrigir cada campo', () => {
    const e = validarDados({nome: ' A ', email: 'ana@exemplo', celular: '91234-5678', aceite: false});
    expect(e.nome).toBe('Digite seu nome.');
    expect(e.email).toMatch(/por exemplo ana@exemplo.com/);
    expect(e.celular).toMatch(/com DDD/);
    expect(e.aceite).toMatch(/política de privacidade/);
  });
  it('aceita celular com +55 e fixo com DDD', () => {
    expect(validarDados({...ok, celular: '+55 11 91234-5678'}).celular).toBeUndefined();
    expect(validarDados({...ok, celular: '11 3123-4567'}).celular).toBeUndefined();
  });
});
