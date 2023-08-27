import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBook } from '../models/book.model';
import { ResponseBook } from '../models/response.books';
import { fixDecimals } from '../helpers/fixing.numbers';

@Injectable()
export class BookService {
  constructor(@InjectModel('book') private bookModel: Model<IBook>) {}

  async getBooks(): Promise<IBook[]> {
    return await this.bookModel.find();
  }

  async createBook(book: IBook): Promise<IBook> {
    return await this.bookModel.create(book);
  }

  async getPromedio(id: string): Promise<ResponseBook> {
    const book = await this.bookModel.findById(id);
    const result = book.pages / book.chapters;
    const resultPromedio = fixDecimals(result, 3, 2);
    const response: ResponseBook = {
      id: book.id,
      promedio: `${resultPromedio}`,
    };

    return response;
  }
}
