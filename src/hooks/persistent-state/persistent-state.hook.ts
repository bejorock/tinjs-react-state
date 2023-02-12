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

    console.log("load from local storage");
    const value = storage.getItem(stateId);

    if (!value) return;

    const persistedState = JSON.parse(value);
    setState(persistedState);
  }, []);

  useEffect(() => {
    if (options?.noCache) return;
    if (!state) return;

    const stateStr = JSON.stringify(state);
    storage.setItem(stateId, stateStr);
    console.log("save to local storage");
  }, [state]);

  return [state, setState];
}
