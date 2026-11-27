'use client';

import {useSyncExternalStore} from 'react';
import {agoraEmSaoPaulo, type Agora} from './agenda';

// shortcut: a hora é lida uma vez por carregamento de página; se a aba ficar aberta por horas, recarregar atualiza.
let cache: Agora | null = null;
const naoMuda = () => () => {};

/** Data e hora de São Paulo no navegador; `null` no servidor (o relógio é o de quem visita). */
export function useAgora(): Agora | null {
  return useSyncExternalStore(
    naoMuda,
    () => (cache ??= agoraEmSaoPaulo()),
    () => null,
  );
}
