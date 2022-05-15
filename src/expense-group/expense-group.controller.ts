import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExpenseGroupService } from './expense-group.service';
import { CreateExpenseGroupDto } from './dto/create-expense-group.dto';

@Controller('expense_groups')
export class ExpenseGroupController {
  constructor(private expenseGroupService: ExpenseGroupService) {}

  @Get('/')
  getAllExpenseGroups(): string {
    return this.expenseGroupService.getAllExpenseGroups();
  }

  @Post('/')
  createExpenseGroup(@Body() expenseGroupDto: CreateExpenseGroupDto) {
    return this.expenseGroupService.createExpenseGroup(expenseGroupDto);
  }
}
