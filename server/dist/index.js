"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use('/api', routes_1.default);
app.get('/', (request, response) => {
    response.send('Spotify authenticate');
});
app.listen(3000, (err) => {
    if (err)
        throw new Error('Error when running server');
    console.log('Server running in port: 3000');
});
//# sourceMappingURL=index.js.map