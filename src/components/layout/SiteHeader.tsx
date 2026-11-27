'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {Menu} from 'lucide-react';
import {TopNav, TopNavItem} from '@astryxdesign/core/TopNav';
import {MobileNav} from '@astryxdesign/core/MobileNav';
import {SideNavItem, SideNavSection} from '@astryxdesign/core/SideNav';
import {Button} from '@astryxdesign/core/Button';
import {HStack} from '@astryxdesign/core/Layout';
import {Icon} from '@astryxdesign/core/Icon';
import {Link} from '@astryxdesign/core/Link';
import logo from '@design-system/brand/logo-horizontal.svg';
import {marca} from '@/data/marca';

const paginas = [
  {href: '/servicos', label: 'Serviços'},
  {href: '/portfolio', label: 'Portfólio'},
  {href: '/sobre', label: 'Sobre'},
  {href: '/contato', label: 'Contato'},
];

export function SiteHeader() {
  const path = usePathname();
  const [aberto, setAberto] = useState(false);
  const ativo = (href: string) => path === href || path.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-body">
      <TopNav
        label="Navegação principal"
        heading={
          <Link href="/" label={`${marca.nome}, página inicial`}>
            <img src={logo.src} alt="" width={132} height={44} />
          </Link>
        }
        endContent={
          <HStack gap={2} vAlign="center">
            <HStack gap={1} vAlign="center" className="hidden lg:flex">
              {paginas.map((p) => (
                <TopNavItem key={p.href} label={p.label} href={p.href} isSelected={ativo(p.href)} />
              ))}
            </HStack>
            {!ativo('/agendar') && <Button label="Agendar" variant="primary" href="/agendar" />}
            <HStack className="lg:hidden">
              <Button
                label="Menu"
                variant="secondary"
                icon={<Icon icon={Menu} />}
                onClick={() => setAberto(true)}
                aria-expanded={aberto}
              />
            </HStack>
          </HStack>
        }
      />
      <MobileNav isOpen={aberto} onOpenChange={setAberto} label="Menu" side="end">
        <SideNavSection title="Páginas" isHeaderHidden>
          {[{href: '/', label: 'Início'}, ...paginas, {href: '/agendar', label: 'Agendar horário'}].map(
            (p) => (
              <SideNavItem
                key={p.href}
                label={p.label}
                href={p.href}
                size="lg"
                isSelected={p.href === '/' ? path === '/' : ativo(p.href)}
                onClick={() => setAberto(false)}
              />
            ),
          )}
        </SideNavSection>
      </MobileNav>
    </header>
  );
}
