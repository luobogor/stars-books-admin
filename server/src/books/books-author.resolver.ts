import { AuthorsService } from '../authors/authors.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BooksAuthorResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query('authors')
  getAuthors() {
    return this.authorsService.findAll();
  }

  @Mutation('createAuthor')
  async create(@Args('createAuthorInput') args) {
    return this.authorsService.create(args);
  }
}
