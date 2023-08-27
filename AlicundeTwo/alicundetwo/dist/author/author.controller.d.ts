import { IAuthor } from 'src/core/models/author.model';
import { AuthorService } from 'src/core/services/author.service';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    getAuthors(res: any): Promise<any>;
    createAuthor(res: any, author: IAuthor): Promise<any>;
}
