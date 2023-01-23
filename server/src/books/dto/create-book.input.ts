import { CreateBookInput } from '../../graphql';
import { MinLength } from 'class-validator';

export class CreateBookDto extends CreateBookInput {
  @MinLength(1)
  name: string;
}
