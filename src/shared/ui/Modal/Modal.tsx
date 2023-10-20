import { classNames } from "shared/lib/classNames/classNames";
import React, {
  ReactNode, useEffect, useRef, useState, useCallback,
} from "react";
import { Portal } from "shared/ui/Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    lazy?: boolean;
    onClose?: () => void;
    children?: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className, children, onClose, isOpen, lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeout.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const onKeyDown = (event: CustomEvent) => {
      if ((event as unknown as React.KeyboardEvent).key === "Escape") {
        closeHandler();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timeout.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
