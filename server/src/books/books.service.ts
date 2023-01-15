import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookInput) {
    return {
      exampleField: 4,
    };
  }

  findAll() {
    // return `This action returns all books`;
    return [
      {
        exampleField: 1,
      },
      {
        exampleField: 2,
      },
      {
        exampleField: 3,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }
}
