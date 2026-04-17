/// <reference types="vite/client" />

declare module 'react-dom/client' {
  import type {ReactNode} from 'react';

  interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }

  interface CreateRootOptions {
    identifierPrefix?: string;
    onUncaughtError?: (error: unknown, errorInfo: unknown) => void;
    onCaughtError?: (error: unknown, errorInfo: unknown) => void;
    onRecoverableError?: (error: unknown, errorInfo: unknown) => void;
  }

  export function createRoot(container: Element | DocumentFragment, options?: CreateRootOptions): Root;
}
