import { KvRecord, KvTable, UseKvTableOptions } from "./kv-table";
export default function useKvTable<K, V extends KvRecord>(cacheId: string, keyField: string, options?: UseKvTableOptions<V>): KvTable<K, V>;
//# sourceMappingURL=kv-table.hook.d.ts.map