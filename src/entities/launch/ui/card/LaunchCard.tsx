import { Card, Image, Text, Button, AspectRatio, Stack } from '@mantine/core';
import styles from './LaunchCard.module.css';

export type LaunchCardProps = {
  missionName: string;
  rocketName: string;
  patchUrl?: string;
  onSeeMore: () => void;
};

export function LaunchCard({
  patchUrl,
  missionName,
  rocketName,
  onSeeMore,
}: LaunchCardProps) {
  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      className={styles.card}
      mih={440}
    >
      <AspectRatio ratio={1} maw={160} mx="auto" mt={20}>
        <Image src={patchUrl} alt={missionName} fit="contain" />
      </AspectRatio>
      <Stack gap={40} mt={40} align="center">
        <Text fw={700} fz="lg" ta="center" lineClamp={1}>
          {missionName}
        </Text>
        <Text c="dimmed" fz="lg" ta="center">
          {rocketName}
        </Text>
      </Stack>

      <Button mt="auto" fullWidth onClick={onSeeMore} className={styles.addBtn}>
        See more
      </Button>
    </Card>
  );
}
