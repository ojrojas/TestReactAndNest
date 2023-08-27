import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './schema/author.schema';
import { AuthorService } from 'src/core/services/author.service';
import { AuthorController } from './author.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'author',
        schema: AuthorSchema,
      },
    ]),
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
