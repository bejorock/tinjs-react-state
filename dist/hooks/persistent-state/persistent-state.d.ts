export declare type UsePersistentStateOutput<T> = [
    T | undefined,
    (newValue: T) => void
];
export declare type UsePersistentOptions<T> = {
    initialValue?: T;
    noCache?: boolean;
};
export declare type UsePersistentState<T> = (stateId: string, options?: UsePersistentOptions<T>) => UsePersistentStateOutput<T>;
//# sourceMappingURL=persistent-state.d.ts.map