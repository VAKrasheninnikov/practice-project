import { getCounterValue } from "entities/Counter/model/selectors/getCounterValue/getCounterValue";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

describe("getCounterValue", () => {
  test("getCounterValue returns value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 5,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(5);
  });
});
