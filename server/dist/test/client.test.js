"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
describe('# Credentials', () => {
    test('Get credentials user', async () => {
        const response = await axios_1.default(process.env.HOST, {
            method: 'GET'
        });
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
    });
});
//# sourceMappingURL=client.test.js.map