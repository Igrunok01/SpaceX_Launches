import { MantineProvider } from '@mantine/core';
import { theme } from '../../shared/config/theme';
import type { PropsWithChildren } from 'react';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}
