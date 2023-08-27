"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixDecimals = void 0;
const fixDecimals = function (value, left, right) {
    return Math.abs(value)
        .toFixed(right)
        .padStart(left + right + 1, '0');
};
exports.fixDecimals = fixDecimals;
//# sourceMappingURL=fixing.numbers.js.map