declare module "@playwright/test" {
  export const test: {
    (name: string, fn: (args: { page: any }) => unknown): void;
  };

  export const expect: any;

  export function defineConfig(config: unknown): unknown;
}
