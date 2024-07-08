import { a, useSpring, useTransition } from "@react-spring/web";
import React, { useRef } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: isOpen ? 1 : 0,
  //   transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  // });

  const openAnimationSpring = useSpring({
    scale: isOpen ? 1 : 0.95,
    y: isOpen ? 0 : 16,
    opacity: isOpen ? 1 : 0,
    config: {
      tension: 300,
    },
  });

  const overlayAnimationTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 250,
    },
  });

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey, false);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEscKey, false);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  return (
    <>
      {overlayAnimationTransition((style, item) =>
        item ? (
          <a.div
            className={styles.modalOverlay}
            ref={modalRef}
            onClick={handleClose}
            aria-modal="true"
            aria-labelledby="modalTitle"
            role="dialog"
            style={style}
          >
            <a.div style={openAnimationSpring} className={styles.modal}>
              <div className={styles.modal__content}>
                {/* <button className={styles.modal__closeButton} onClick={onClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button> */}
                {children}
              </div>
            </a.div>
          </a.div>
        ) : null
      )}
    </>
  );
};

export default Modal;
