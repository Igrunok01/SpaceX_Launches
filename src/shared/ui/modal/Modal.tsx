import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
const modalElement = document.getElementById('modal') ?? document.body;
type ModalProps = {
  open: boolean;
  onClose: () => void;
  missionName: string;
  rocketName: string;
  patchUrl?: string;
  details: string;
};
export function Modal({
  open,
  onClose,
  patchUrl,
  missionName,
  rocketName,
  details,
}: ModalProps) {
  if (!open) return null;
  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.modalHeader}>
          <h2 id="modal-title">{missionName}</h2>
          <button
            type="button"
            className={styles.modalClose}
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <figure className={styles.modalFigure}>
          <img src={patchUrl} alt={missionName} />
        </figure>

        <dl className={styles.modalMeta}>
          <dt>Mission name:</dt>
          <dd>{missionName}</dd>

          <dt>Rocket name:</dt>
          <dd>{rocketName}</dd>
        </dl>

        <section>
          <h3>Details:</h3>
          <p>{details}</p>
        </section>
      </section>
    </div>,
    modalElement,
  );
}
