import { useEffect, useReducer } from "react";
import services from "../../services";
import {
  PersistentReducer,
  UsePersistentReducerOptions,
  UsePersistentReducerOutput,
} from "./persistent-reducer";

export const PERSISTENT_ACTION_LOAD = "PERSISTENT_ACTION_LOAD";

export default function usePersistentReducer<T>(
  stateId: string,
  reducer: PersistentReducer<T>,
  options?: UsePersistentReducerOptions<T>
): UsePersistentReducerOutput<T> {
  const storage = services.getStorageService();
  const [state, dispatch] = useReducer(
    reducer,
    options?.initialValue || ({} as T)
  );

  useEffect(() => {
    if (options?.noCache) return;

    const value = storage.getItem(stateId);

    if (!value) return;

    const persistedState = JSON.parse(value);
    dispatch({ type: PERSISTENT_ACTION_LOAD, payload: persistedState });
  }, []);

  useEffect(() => {
    if (options?.noCache) return;
    if (!state) return;
    if (state === options?.initialValue) return;

    const stateStr = JSON.stringify(state);
    storage.setItem(stateId, stateStr);
  }, [state]);

  return [state, dispatch];
}
