import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useRef, useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;

}

export const LoginForm = ({ className }: LoginFormProps) => {
    const [login, setLogin] = useState('');

    const handleSetLogin = (value: string) => {
        setLogin(value);
    };

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                value={login}
                onChange={handleSetLogin}
                type="text"
                placeholder={t('Введите логин')}
            />
            <Input type="text" placeholder={t('Введите пароль')} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
