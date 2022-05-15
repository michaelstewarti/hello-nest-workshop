import { IsString, Matches } from 'class-validator';

export class CreateExpenseGroupDto {
  @IsString()
  name: string;
  @IsString()
  @Matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
  color: string;
}
