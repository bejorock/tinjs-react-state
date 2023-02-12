export declare type Subscription<T> = {
    next(item: T): void;
    error(err: Error): void;
};
export declare type UseObserverEventHandler<T, V> = (input?: T) => Promise<V>;
export declare type UseObserverEventEmitter<T> = (input: T) => void;
export declare type UseObserver<T, V> = (handler: UseObserverEventHandler<T, V>, subs: Subscription<V>) => UseObserverEventEmitter<T>;
//# sourceMappingURL=observer.d.ts.map