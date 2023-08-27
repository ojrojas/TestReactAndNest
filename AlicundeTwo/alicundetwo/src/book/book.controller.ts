import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { IBook } from 'src/core/models/book.model';
import { BookService } from 'src/core/services/book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/')
  async getBooks(@Res() res) {
    const books = await this.bookService.getBooks();
    return res.status(HttpStatus.OK).Json(books);
  }

  @Post('/')
  async createBook(@Res() res, @Body() book: IBook) {
    const responsebook = await this.bookService.createBook(book);
    return res.status(HttpStatus.OK).Json(responsebook);
  }

  @Get('promedio/:id')
  async getPromedio(@Res() res, @Param('id') id: string) {
    const promedio = await this.bookService.getPromedio(id);
    return res.status(HttpStatus.OK).Json(promedio);
  }
}
