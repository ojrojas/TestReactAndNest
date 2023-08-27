"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AuthorSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
});
//# sourceMappingURL=author.schema.js.map