export declare type PersistentReducer<T> = (oldState: T, action: any) => T;
export declare type UsePersistentReducerOutput<T> = [
    T | undefined,
    (newValue: T) => void
];
export declare type UsePersistentReducerOptions<T> = {
    initialValue?: T;
    noCache?: boolean;
};
export declare type UsePersistentReducer<T> = (stateId: string, reducer: PersistentReducer<T>, options?: UsePersistentReducerOptions<T>) => UsePersistentReducerOutput<T>;
//# sourceMappingURL=persistent-reducer.d.ts.map