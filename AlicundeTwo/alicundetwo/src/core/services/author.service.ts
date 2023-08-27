import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuthor } from '../models/author.model';

@Injectable()
export class AuthorService {
  constructor(@InjectModel('author') private authorModel: Model<IAuthor>) {}

  async getAuthors(): Promise<IAuthor[]> {
    return await this.authorModel.find();
  }

  async createAuthor(author: IAuthor): Promise<IAuthor> {
    return await this.authorModel.create(author);
  }
}
