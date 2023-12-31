"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)("common"));
app.use((0, helmet_1.default)());
app.get('/', (req, res) => {
    res.json({
        message: "Hello"
    });
});
app.listen(PORT, "localhost", () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map