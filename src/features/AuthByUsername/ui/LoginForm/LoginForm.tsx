import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;

}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginData = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = () => {
        dispatch(loginByUsername(loginData));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {loginData.error && <Text text={loginData.error} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                value={loginData.username}
                onChange={onChangeUsername}
                type="text"
                placeholder={t('Введите логин')}
            />
            <Input
                type="text"
                value={loginData.password}
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={loginData.isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
