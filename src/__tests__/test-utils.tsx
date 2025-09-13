import { MantineProvider } from '@mantine/core';
import { theme } from '../shared/config/theme';
import { render } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';

function Providers({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      {children}
    </MantineProvider>
  );
}

export * from '@testing-library/react';

export function renderWithProviders(
  ui: ReactElement,
  options?: Parameters<typeof render>[1],
) {
  return render(ui, { wrapper: Providers, ...options });
}
