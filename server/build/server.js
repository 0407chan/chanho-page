"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_root_path_1 = __importDefault(require("app-root-path"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var date_fns_1 = require("date-fns");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var port = 3000;
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json({
    limit: '50mb'
}));
app.use(express_1.default.static(app_root_path_1.default.resolve('/public')));
app.use(routes_1.default);
app.listen(port, function () {
    console.log(date_fns_1.format(new Date(), 'yyyy-MM-dd HH:mm'));
    console.log('서버열렸땅', port);
});
//# sourceMappingURL=server.js.map