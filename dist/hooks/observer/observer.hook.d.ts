import { Subscription, UseObserverEventEmitter, UseObserverEventHandler } from "./observer";
export default function useObserver<T, V>(handler: UseObserverEventHandler<T, V>, subs: Subscription<V>): UseObserverEventEmitter<T>;
//# sourceMappingURL=observer.hook.d.ts.map