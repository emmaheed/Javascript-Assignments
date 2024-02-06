"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var crypto_1 = require("crypto");
var pcl = require("postchain-client");
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, initClient()];
                case 1:
                    client = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function initClient() {
    return __awaiter(this, void 0, void 0, function () {
        var adminPubkey, adminPrivkey, nodeApiUrl, blockchainRID, rest, gtx, request, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    adminPubkey = Buffer.from("031b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f", "hex");
                    adminPrivkey = Buffer.from("0101010101010101010101010101010101010101010101010101010101010101", "hex");
                    pcl.logger.setLogLevel(0);
                    nodeApiUrl = "http://localhost:7740/";
                    blockchainRID = "63B36A15A8D1787EFED1E331F0E49D39C05874E7D29E5DC1FD7A484E990A8932";
                    rest = pcl.restClient.createRestClient([nodeApiUrl], blockchainRID, 5);
                    gtx = pcl.gtxClient.createClient(rest, blockchainRID, ['set_name']);
                    request = gtx.newTransaction([adminPubkey]);
                    request.set_name("Emma");
                    request.addOperation("nop", (0, crypto_1.randomInt)(12345678));
                    request.sign(adminPrivkey, adminPubkey);
                    return [4 /*yield*/, request.postAndWaitConfirmation()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, gtx.query({ type: "hello_world" })];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, gtx];
            }
        });
    });
}
test();
