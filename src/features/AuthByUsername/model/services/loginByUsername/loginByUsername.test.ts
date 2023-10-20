import axios from "axios";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/testAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
  test("success login", async () => {
    const userData = { username: "123", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    // const action = loginByUsername({ username: "123", password: "123" });
    // const result = await action(dispatch, getState, undefined);
    // expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    // expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    // expect(result.meta.requestStatus).toBe("fulfilled");

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
