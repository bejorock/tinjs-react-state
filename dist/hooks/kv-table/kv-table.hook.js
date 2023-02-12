"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const persistent_state_hook_1 = __importDefault(require("../persistent-state/persistent-state.hook"));
function useKvTable(cacheId, keyField, options) {
    const [internalArray, setInternalArray] = persistent_state_hook_1.default(cacheId, { ...options, initialValue: options?.initialValues || [] });
    const save = () => setInternalArray([
        ...internalArray.sort((a, b) => a[keyField] < b[keyField] ? -1 : a[keyField] === b[keyField] ? 0 : 1),
    ]);
    const findIndex = (key) => internalArray.findIndex((item) => item[keyField] === key);
    const upsert = (newItem) => {
        const index = findIndex(newItem[keyField]);
        if (index < 0)
            internalArray.push(newItem);
        else
            internalArray.splice(index, 1, newItem);
    };
    const upsertThenSave = (newItem) => {
        upsert(newItem);
        save();
    };
    const merge = (newItems) => {
        newItems.forEach(upsert);
        save();
    };
    const remove = (key) => {
        const index = findIndex(key);
        if (index > 0)
            internalArray.splice(index, 1);
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
exports.default = useKvTable;
