import { Modal } from '../../../shared/ui/modal';
import type { Launch } from '../../../entities/launch';

type Props = { open: boolean; onClose: () => void; launch: Launch | null };

export function LaunchDetailsModal({ open, onClose, launch }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      patchUrl={launch?.links?.mission_patch_small ?? undefined}
      missionName={launch?.mission_name ?? '—'}
      rocketName={launch?.rocket?.rocket_name ?? '—'}
      details={launch?.details ?? '—'}
    />
  );
}
