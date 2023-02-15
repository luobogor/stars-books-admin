import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createBookInput: Prisma.BookUncheckedCreateInput) {
    return this.prisma.book.create({
      data: createBookInput,
    });
  }

  findAll() {
    return this.prisma.book.findMany({
      // include: {
      //   author: true,
      // },
    });
  }
}
