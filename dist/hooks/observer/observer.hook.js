"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useObserver(handler, subs) {
    const [input, setInput] = react_1.useState();
    const emitter = (item) => setInput(item);
    react_1.useEffect(() => {
        handler(input).then(subs.next).catch(subs.error);
    }, [input]);
    // useEffect(() => emitter(), []);
    return emitter;
}
exports.default = useObserver;
