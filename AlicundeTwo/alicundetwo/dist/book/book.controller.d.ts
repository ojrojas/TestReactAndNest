import { IBook } from 'src/core/models/book.model';
import { BookService } from 'src/core/services/book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(res: any): Promise<any>;
    createBook(res: any, book: IBook): Promise<any>;
    getPromedio(res: any, id: string): Promise<any>;
}
