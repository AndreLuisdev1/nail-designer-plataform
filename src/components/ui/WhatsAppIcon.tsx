import type {SVGProps} from 'react';

/** Balão com telefone, no traço do Lucide (o Lucide não tem logos de marcas). Use dentro de <Icon icon={WhatsAppIcon} />. */
export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M9.4 8.2c0-.4.3-.7.7-.7h.8l.9 2-.7.9c.5 1 1.300 1.800 2.300 2.300l.9-.7 2 .9v.8c0 .4-.3.7-.7.7-3.200 0-6.200-3-6.200-6.200Z" />
    </svg>
  );
}
