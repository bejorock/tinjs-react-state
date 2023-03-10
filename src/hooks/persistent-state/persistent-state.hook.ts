import { useEffect, useState } from "react";
import {
  UsePersistentOptions,
  UsePersistentStateOutput,
} from "./persistent-state";
import services from "../../services";

export default function usePersistentState<T>(
  stateId: string,
  options?: UsePersistentOptions<T>
): UsePersistentStateOutput<T> {
  const storage = services.getStorageService();
  const [state, setState] = useState(options?.initialValue);

  useEffect(() => {
    if (options?.noCache) return;

    const value = storage.getItem(stateId);
    // console.log("load from local storage", value);

    if (!value) return;

    const persistedState = JSON.parse(value);
    setState(persistedState);
  }, []);

  useEffect(() => {
    if (options?.noCache) return;
    if (!state) return;
    if (state === options?.initialValue) return;

    const stateStr = JSON.stringify(state);
    storage.setItem(stateId, stateStr);
    // console.log("save to local storage", stateStr);
  }, [state]);

  return [state, setState];
}
