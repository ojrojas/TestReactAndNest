import { Model } from 'mongoose';
import { IAuthor } from '../models/author.model';
export declare class AuthorService {
    private authorModel;
    constructor(authorModel: Model<IAuthor>);
    getAuthors(): Promise<IAuthor[]>;
    createAuthor(author: IAuthor): Promise<IAuthor>;
}
