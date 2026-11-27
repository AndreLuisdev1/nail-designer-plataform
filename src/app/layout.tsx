import type {Metadata, Viewport} from 'next';
import './globals.css';
import {Providers} from './providers';
import {SiteHeader} from '@/components/SiteHeader';
import {SiteFooter} from '@/components/SiteFooter';
import {marca} from '@/content/marca';
import tokens from '../../tokens.json';
import simbolo from '../../brand/logo-simbolo.svg';

export const metadata: Metadata = {
  title: {default: `${marca.nome} · Alongamento de unhas com hora marcada`, template: `%s · ${marca.nome}`},
  description: marca.descricao,
  icons: {icon: simbolo.src},
  openGraph: {type: 'website', locale: 'pt_BR', siteName: marca.nome, description: marca.descricao},
  // Site de demonstração com dados de exemplo: fora dos buscadores até ter conteúdo real.
  robots: {index: false, follow: false},
};

export const viewport: Viewport = {
  themeColor: tokens.primitive.color.nude['50'].$value,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/fonts/jost-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/bodoni-moda-latin-standard-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>
      <body className="bg-body">
        <Providers>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-3 focus:text-accent"
          >
            Pular para o conteúdo
          </a>
          <SiteHeader />
          <main id="conteudo" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
