import { SimpleGrid, Skeleton, Text } from '@mantine/core';
import { LaunchCard } from '../../../entities/launch';
import type { Launch } from '../../../entities/launch';

type Props = {
  launches: Launch[];
  loading: boolean;
  error: string | null;
  onSeeMore: (id: number) => void;
};

export function LaunchesGrid({ launches, loading, error, onSeeMore }: Props) {
  if (loading) {
    return (
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} height={500} radius="lg" />
        ))}
      </SimpleGrid>
    );
  }
  if (error) return <Text c="red">{error}</Text>;

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {launches.map((l, i) => (
        <LaunchCard
          key={`${l.flight_number}-${i}`}
          missionName={l.mission_name ?? '—'}
          rocketName={l.rocket?.rocket_name ?? '—'}
          patchUrl={l.links?.mission_patch_small ?? undefined}
          onSeeMore={() => onSeeMore(l.flight_number)}
        />
      ))}
    </SimpleGrid>
  );
}
