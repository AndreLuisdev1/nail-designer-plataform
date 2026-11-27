import type {NextConfig} from 'next';

const isDev = process.env.NODE_ENV !== 'production';

// Nada de terceiros: tudo do próprio domínio. 'unsafe-inline' em script é exigido pela hidratação do Next sem nonce;
// shortcut: trocar por CSP com nonce (middleware) quando houver backend e sessão.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? ' ws:' : ''}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

// Na Vercel o site sai como export estático (todas as páginas já são estáticas): o build com funções de servidor
// falha no Next 16.4 + Vercel (_global-error). Lá os cabeçalhos vêm do vercel.json, porque o export ignora headers().
const exportEstatico = !!process.env.VERCEL;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(exportEstatico ? {output: 'export' as const} : {}),
  async headers() {
    if (exportEstatico) return [];
    return [
      {
        source: '/:path*',
        headers: [
          {key: 'Content-Security-Policy', value: csp},
          {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
          {key: 'X-Content-Type-Options', value: 'nosniff'},
          {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()'},
          {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains'},
        ],
      },
    ];
  },
};

export default nextConfig;
