export declare type KvTable<K, V> = {
    first(): V | undefined;
    last(): V | undefined;
    upsert(item: V): void;
    merge(items: Array<V>): void;
    remove(key: K): void;
};
export declare type KvRecord = {
    [key: string]: any;
};
export declare type UseKvTableOptions<V extends any> = {
    initialValues?: Array<V>;
    noCache?: boolean;
};
export declare type UseKvTable<K, V> = (cacheId: string, keyField: string, options?: UseKvTableOptions<V>) => KvTable<K, V>;
//# sourceMappingURL=kv-table.d.ts.map