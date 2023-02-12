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
  const [isLoading, setLoading] = useState(false);
  const emitter = (item?: T) => setInput(item);

  useEffect(() => {
    setLoading(true);
    handler(input)
      .then(subs.next)
      .catch(subs.error)
      .finally(() => setLoading(false));
  }, [input]);

  // useEffect(() => emitter(), []);

  return { emitter, isLoading };
}
