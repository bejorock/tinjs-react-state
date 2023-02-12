import { useEffect, useState } from "react";
import {
  Subscription,
  UseObserverEventEmitter,
  UseObserverEventHandler,
} from "./observer";

export default function useObserver<T, V>(
  handler: UseObserverEventHandler<T, V>,
  subs: Subscription<V>
): UseObserverEventEmitter<T> {
  const [input, setInput] = useState<T>();
  const emitter = (item?: T) => setInput(item);

  useEffect(() => {
    handler(input).then(subs.next).catch(subs.error);
  }, [input]);

  // useEffect(() => emitter(), []);

  return emitter;
}
