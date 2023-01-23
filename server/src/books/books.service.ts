import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookDto) {
    return {
      id: '1',
      name: '西游',
      type: '魔幻',
      author: {
        id: '1',
        name: '吴承恩',
        gender: 1,
        email: 'wuchengen@qq.com',
      },
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
