import {VStack} from '@astryxdesign/core/Layout';

const fundos = {pagina: 'bg-body', marca: 'bg-accent-muted', superficie: 'bg-surface'} as const;

/** Faixa de página com largura máxima e margem lateral de 16 px (24 px a partir de 768 px). */
export function Faixa({
  children,
  fundo = 'pagina',
  as = 'section',
  label,
  compacta = false,
}: {
  children: React.ReactNode;
  fundo?: keyof typeof fundos;
  as?: 'section' | 'div';
  label?: string;
  compacta?: boolean;
}) {
  return (
    <VStack as={as} aria-labelledby={label} className={`w-full ${fundos[fundo]}`}>
      <VStack
        gap={8}
        className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${compacta ? 'py-10 lg:py-12' : 'py-16 lg:py-24'}`}
      >
        {children}
      </VStack>
    </VStack>
  );
}
