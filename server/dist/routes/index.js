"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const router = express_1.Router();
router.get('/authenticate', auth_1.auth);
exports.default = router;
//# sourceMappingURL=index.js.map