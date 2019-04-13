"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spotifyCredentials_1 = require("../lib/micro/spotifyCredentials");
async function auth(request, response) {
    const keys = await spotifyCredentials_1.authenticate();
    response.json(keys);
}
exports.auth = auth;
//# sourceMappingURL=auth.js.map