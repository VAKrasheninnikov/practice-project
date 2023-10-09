import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/stateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children, reducers, removeAfterUnmount
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: "@MOUNT" });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: "@REMOVED" });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};
