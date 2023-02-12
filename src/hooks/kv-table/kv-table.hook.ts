import usePersistentState from "../persistent-state/persistent-state.hook";
import { KvRecord, KvTable, UseKvTableOptions } from "./kv-table";

export default function useKvTable<K, V extends KvRecord>(
  cacheId: string,
  keyField: string,
  options?: UseKvTableOptions<V>
): KvTable<K, V> {
  const [internalArray, setInternalArray] = usePersistentState<Array<V>>(
    cacheId,
    { ...options, initialValue: options?.initialValues || [] }
  );

  const save = () =>
    setInternalArray([
      ...internalArray!.sort((a, b) =>
        a[keyField] < b[keyField] ? -1 : a[keyField] === b[keyField] ? 0 : 1
      ),
    ]);

  const findIndex = (key: K) =>
    internalArray!.findIndex((item) => item[keyField] === key);

  const upsert = (newItem: V) => {
    const index = findIndex(newItem[keyField]);

    if (index < 0) internalArray!.push(newItem);
    else internalArray!.splice(index, 1, newItem);
  };

  const upsertThenSave = (newItem: V) => {
    upsert(newItem);
    save();
  };

  const merge = (newItems: Array<V>) => {
    newItems.forEach(upsert);
    save();
  };

  const remove = (key: K) => {
    const index = findIndex(key);
    if (index > 0) internalArray!.splice(index, 1);
    save();
  };

  const first = () => internalArray?.[0];

  const last = () => internalArray?.[internalArray?.length - 1];

  return {
    first,
    last,
    upsert: upsertThenSave,
    merge,
    remove,
  };
}
