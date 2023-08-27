"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BookSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    chapters: { type: Number, required: true },
    pages: { type: Number, required: true },
});
//# sourceMappingURL=book.schema.js.map