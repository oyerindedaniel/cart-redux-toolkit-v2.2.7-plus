import { a, useSpring, useTransition } from "@react-spring/web";
import React, { useEffect, useRef } from "react";
import Button from "../button";
import styles from "./index.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const openAnimationSpring = useSpring({
    scale: isOpen ? 1 : 0.98,
    opacity: isOpen ? 1 : 0,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    config: {
      tension: 300,
      duration: 200,
    },
  });

  const overlayAnimationTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      // duration: 150,
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

  useEffect(() => {
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
            style={style}
          />
        ) : null
      )}
      {isOpen && (
        <a.div style={openAnimationSpring} className={styles.modal}>
          <div className={styles.modal__content}>
            <Button className={styles.modal__closeButton} onClick={onClose}>
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
            </Button>
            {children}
          </div>
        </a.div>
      )}
    </>
  );
};

export default Modal;
