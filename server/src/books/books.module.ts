import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { BooksAuthorResolver } from './books-author.resolver';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [AuthorsModule],
  providers: [BooksResolver, BooksService, BooksAuthorResolver],
})
export class BooksModule {}
