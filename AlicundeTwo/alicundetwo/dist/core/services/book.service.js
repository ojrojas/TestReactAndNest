"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fixing_numbers_1 = require("../helpers/fixing.numbers");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async getBooks() {
        return await this.bookModel.find();
    }
    async createBook(book) {
        return await this.bookModel.create(book);
    }
    async getPromedio(id) {
        const book = await this.bookModel.findById(id);
        const result = book.pages / book.chapters;
        const resultPromedio = (0, fixing_numbers_1.fixDecimals)(result, 3, 2);
        const response = {
            id: book.id,
            promedio: `${resultPromedio}`,
        };
        return response;
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('book')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BookService);
//# sourceMappingURL=book.service.js.map