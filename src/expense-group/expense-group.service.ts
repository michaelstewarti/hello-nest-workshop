import { Injectable } from '@nestjs/common';
import { CreateExpenseGroupDto } from './dto/create-expense-group.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ExpenseGroupService {
  async getAllExpenseGroups() {
    return prisma.expenseGroup.findMany();
  }

  async createExpenseGroup(expenseGroupDto: CreateExpenseGroupDto) {
    return prisma.expenseGroup.create({
      data: {
        name: expenseGroupDto.name,
        color: expenseGroupDto.color,
      },
    });
  }
}
