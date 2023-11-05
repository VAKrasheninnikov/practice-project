import { Currency } from "shared/const/common";

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  username: string;
  avatar: string;
  currency: Currency.RUB;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
}
