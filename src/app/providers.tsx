'use client';

import Link from 'next/link';
import {InternationalizationProvider} from '@astryxdesign/core/i18n';
import {LinkProvider} from '@astryxdesign/core/Link';
import {Theme} from '@astryxdesign/core/theme';
import ptBR from '@astryxdesign/core/locales/pt-BR.generated.js';
import {rachelTheme} from '@/theme/built/rachel.js';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <InternationalizationProvider locale="pt-BR" messages={{'pt-BR': ptBR}}>
      <Theme theme={rachelTheme} mode="light">
        <LinkProvider component={Link}>{children}</LinkProvider>
      </Theme>
    </InternationalizationProvider>
  );
}
