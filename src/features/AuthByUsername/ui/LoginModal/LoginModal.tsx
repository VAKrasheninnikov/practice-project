import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Loader } from "shared/ui/Loader/Loader";
import { Suspense } from "react";
import cls from "./LoginModal.module.scss";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    lazy
    className={classNames(cls.LoginModal, {}, [className])}
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
