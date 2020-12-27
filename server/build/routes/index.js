"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_root_path_1 = __importDefault(require("app-root-path"));
var express_1 = require("express");
var test_1 = __importDefault(require("./test"));
var router = express_1.Router({});
router.get('/', function (req, res) {
    res.sendFile(app_root_path_1.default.resolve('/public/index.html'));
});
router.use('/api/v1/test', test_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map