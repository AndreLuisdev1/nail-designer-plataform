import {Badge} from '@astryxdesign/core/Badge';

/** Selo obrigatório ao lado de todo dado fictício (DESIGN.md, seção 4). */
export function Exemplo({label = 'Exemplo'}: {label?: string}) {
  return <Badge variant="warning" label={label} />;
}
