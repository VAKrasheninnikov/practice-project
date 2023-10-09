import { StateSchema } from "app/providers/StoreProvider";

export const getLoginState = (state: StateSchema) => state?.login;

export const getLoginUsername = (state: StateSchema) => state?.login?.username || "";
export const getLoginPassword = (state: StateSchema) => state?.login?.password || "";
export const getLoginIsLoading = (state: StateSchema) => state?.login?.isLoading || true;
export const getLoginError = (state: StateSchema) => state?.login?.error || "";
