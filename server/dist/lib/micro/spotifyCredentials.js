"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function authenticate() {
    try {
        const URL = 'https://accounts.spotify.com/api/token';
        const CLIENT_ID = 'bcf049a8882c4be597b4ff7019c61807';
        const CLIENT_SECRET = 'e6ea4b89ad964ab2b0d7389b14ece51f';
        const options = {
            url: URL,
            method: 'POST',
            params: {
                grant_type: 'client_credentials'
            },
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: CLIENT_ID,
                password: CLIENT_SECRET
            }
        };
        const response = await axios_1.default(options);
        return response.data;
    }
    catch (err) {
        console.log('Error:', err);
    }
}
exports.authenticate = authenticate;
//# sourceMappingURL=spotifyCredentials.js.map