import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookSchema } from './schema/book.schema';
import { BookController } from './book.controller';
import { BookService } from 'src/core/services/book.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'book',
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
