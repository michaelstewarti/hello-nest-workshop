import { Get, Injectable, Post } from '@nestjs/common';
import { CreateExpenseGroupDto } from './dto/create-expense-group.dto';

@Injectable()
export class ExpenseGroupService {
  getAllExpenseGroups(): string {
    return 'gastos';
  }

  createExpenseGroup(expenseGroupDto: CreateExpenseGroupDto) {
    return 'gasto creado';
  }
}
