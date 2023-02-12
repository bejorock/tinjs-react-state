"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERSISTENT_ACTION_LOAD = void 0;
const react_1 = require("react");
const services_1 = __importDefault(require("../../services"));
exports.PERSISTENT_ACTION_LOAD = "PERSISTENT_ACTION_LOAD";
function usePersistentReducer(stateId, reducer, options) {
    const storage = services_1.default.getStorageService();
    const [state, dispatch] = react_1.useReducer(reducer, options?.initialValue || {});
    react_1.useEffect(() => {
        if (options?.noCache)
            return;
        const value = storage.getItem(stateId);
        if (!value)
            return;
        const persistedState = JSON.parse(value);
        dispatch({ type: exports.PERSISTENT_ACTION_LOAD, payload: persistedState });
    }, []);
    react_1.useEffect(() => {
        if (options?.noCache)
            return;
        if (!state)
            return;
        const stateStr = JSON.stringify(state);
        storage.setItem(stateId, stateStr);
    }, [state]);
    return [state, dispatch];
}
exports.default = usePersistentReducer;
