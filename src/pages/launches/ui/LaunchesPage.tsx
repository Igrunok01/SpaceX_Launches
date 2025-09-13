import { AppShell, Container, Title } from '@mantine/core';
import { useLaunches } from '../../../entities/launch';
import { useLaunchModal } from '../../../features/launch-modal';
import { LaunchesGrid } from '../../../widgets/launches-grid';
import { LaunchDetailsModal } from '../../../widgets/launch-details-modal';

export function LaunchesPage() {
  const { launches, loading, error } = useLaunches();
  const [ui, dispatch] = useLaunchModal();

  const opened =
    ui.openedId != null
      ? (launches.find((l) => l.flight_number === ui.openedId) ?? null)
      : null;

  return (
    <AppShell padding="md">
      <AppShell.Main bg="var(--mantine-color-gray-1)">
        <Container size="lg" py="xl">
          <Title ta="center" mb="lg">
            SpaceX Launches 2020
          </Title>

          <LaunchesGrid
            launches={launches}
            loading={loading}
            error={error}
            onSeeMore={(id) => dispatch({ type: 'open', id })}
          />

          <LaunchDetailsModal
            open={ui.openedId !== null}
            onClose={() => dispatch({ type: 'close' })}
            launch={opened}
          />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
