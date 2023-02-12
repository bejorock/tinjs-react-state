"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const services_1 = __importDefault(require("../../services"));
function usePersistentState(stateId, options) {
    const storage = services_1.default.getStorageService();
    const [state, setState] = react_1.useState(options?.initialValue);
    react_1.useEffect(() => {
        if (options?.noCache)
            return;
        const value = storage.getItem(stateId);
        if (!value)
            return;
        const persistedState = JSON.parse(value);
        setState(persistedState);
    }, []);
    react_1.useEffect(() => {
        if (options?.noCache)
            return;
        if (!state)
            return;
        const stateStr = JSON.stringify(state);
        storage.setItem(stateId, stateStr);
    }, [state]);
    return [state, setState];
}
exports.default = usePersistentState;
