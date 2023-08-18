import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import React, { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthMode, setIsAuthMode] = useState(false);

    const onClose = useCallback(() => {
        setIsAuthMode(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsAuthMode(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onOpen}
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthMode} onClose={onClose} />
        </div>
    );
};
