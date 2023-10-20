import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading, getLoginUsername } from "./getLoginState";

describe("loginSelectorsTests", () => {
  it("should return string same as username field", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: "user123",
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual("user123");
  });
  it("isloading test", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
});
