import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { IAuthor } from 'src/core/models/author.model';
import { AuthorService } from 'src/core/services/author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('/')
  async getAuthors(@Res() res) {
    const authors = await this.authorService.getAuthors();
    return res.status(HttpStatus.OK).Json(authors);
  }

  @Post('/')
  async createAuthor(@Res() res, @Body() author: IAuthor) {
    const responseauthor = await this.authorService.createAuthor(author);
    return res.status(HttpStatus.OK).Json(responseauthor);
  }
}
