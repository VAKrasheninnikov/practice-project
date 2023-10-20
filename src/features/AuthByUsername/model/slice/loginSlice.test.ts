import { LoginSchema } from "features/AuthByUsername";
import { DeepPartial } from "@reduxjs/toolkit";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "user1",
    };
    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.setUserName("12312312313")
      )
    ).toMatchObject({ username: "12312312313" });
  });

  test("test set isLoading", () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: true,
    };
    expect(
      loginReducer(state as LoginSchema, loginByUsername.pending)
    ).toMatchObject({ isLoading: true });
  });
});
