import { Model } from 'mongoose';
import { IBook } from '../models/book.model';
import { ResponseBook } from '../models/response.books';
export declare class BookService {
    private bookModel;
    constructor(bookModel: Model<IBook>);
    getBooks(): Promise<IBook[]>;
    createBook(book: IBook): Promise<IBook>;
    getPromedio(id: string): Promise<ResponseBook>;
}
