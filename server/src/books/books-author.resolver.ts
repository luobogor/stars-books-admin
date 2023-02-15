import { AuthorsService } from '../authors/authors.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  Resolver,
  ResolveProperty,
} from '@nestjs/graphql';

@Resolver('Book')
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

  @ResolveProperty()
  async author(@Parent() book) {
    return this.authorsService.findOneById(book.authorId);
  }
}
