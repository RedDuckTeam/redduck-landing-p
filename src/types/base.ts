import type { ReactNode } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    loadGtag?: () => void;
    __gtagLoaded?: boolean;
    dataLayer?: unknown[];
  }
}

export type BaseComponentProps<Props = object> = {
  children?: ReactNode;
  className?: string;
} & Props;

export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? '' : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;

export type StringRecord<T> = Record<string, T>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type RouteFunction = (...args: unknown[]) => string;

export type RouteValue =
  | StringRecord<string | RouteFunction | StringRecord<string | RouteFunction>>
  | string;
