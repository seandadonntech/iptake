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
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("address");
var fs_1 = require("fs");
var prompt = require('prompt-sync')();
function sleep(seconds) {
    return new Promise(function (resolve) { return setTimeout(resolve, seconds * 1000); });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, state_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var choice, ipv4Address_1, ipv6Address_1, err_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 10, , 11]);
                                    choice = prompt('Please choose an option\n');
                                    if (!(choice === "1")) return [3 /*break*/, 2];
                                    console.log("IP address is ".concat((0, address_1.ip)()));
                                    return [4 /*yield*/, sleep(10)];
                                case 1:
                                    _b.sent();
                                    return [2 /*return*/, "break"];
                                case 2:
                                    if (!(choice === "2")) return [3 /*break*/, 4];
                                    console.log("The IPv6 address is ".concat((0, address_1.ipv6)()));
                                    return [4 /*yield*/, sleep(10)];
                                case 3:
                                    _b.sent();
                                    return [2 /*return*/, "break"];
                                case 4:
                                    if (!(choice === "3")) return [3 /*break*/, 6];
                                    (0, address_1.mac)(function (err, addr) {
                                        if (err) {
                                            console.error('An error occurred:', err);
                                        }
                                        else {
                                            console.log("The MAC address is ".concat(addr));
                                        }
                                    });
                                    return [4 /*yield*/, sleep(10)];
                                case 5:
                                    _b.sent();
                                    return [2 /*return*/, "break"];
                                case 6:
                                    if (!(choice === "4")) return [3 /*break*/, 8];
                                    ipv4Address_1 = (0, address_1.ip)();
                                    ipv6Address_1 = (0, address_1.ipv6)();
                                    (0, address_1.mac)(function (err, addr) {
                                        if (err) {
                                            console.error('An error occurred:', err);
                                        }
                                        else {
                                            var macAddress = addr;
                                            var fileContent = "IPv4: ".concat(ipv4Address_1, "\nIPv6: ").concat(ipv6Address_1, "\nMAC: ").concat(macAddress);
                                            fs_1.default.writeFile('ip.txt', fileContent, function (error) {
                                                if (error) {
                                                    console.error('Error writing IP address to file:', error);
                                                }
                                                else {
                                                    console.log('IP address information written to file successfully');
                                                }
                                            });
                                        }
                                    });
                                    return [4 /*yield*/, sleep(10)];
                                case 7:
                                    _b.sent();
                                    return [2 /*return*/, "break"];
                                case 8:
                                    console.log('Invalid choice');
                                    _b.label = 9;
                                case 9: return [3 /*break*/, 11];
                                case 10:
                                    err_1 = _b.sent();
                                    console.error('An error occurred:', err_1);
                                    return [3 /*break*/, 11];
                                case 11: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (state_1 === "break")
                        return [3 /*break*/, 3];
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
