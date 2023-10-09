import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginState,
    getLoginUsername,
} from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const loginData = useSelector(getLoginState);
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useEffect(() => {
        store.reducerManager.add("login", loginReducer);

        return () => {
            store.reducerManager.remove("login");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = () => {
        dispatch(loginByUsername(loginData));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {error && (
                <Text text={error} theme={TextTheme.ERROR} />
            )}
            <Input
                autoFocus
                value={username}
                onChange={onChangeUsername}
                type="text"
                placeholder={t("Введите логин")}
            />
            <Input
                type="text"
                value={password}
                onChange={onChangePassword}
                placeholder={t("Введите пароль")}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});

export default LoginForm;
