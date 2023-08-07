import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthMode, setIsAuthMode] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthMode((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal onClose={onToggleModal} isOpen={isAuthMode}>!Lorem IPSDUQWOQHWODHOQWD</Modal>
        </div>
    );
};
