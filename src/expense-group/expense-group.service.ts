import { Injectable } from '@nestjs/common';
import { CreateExpenseGroupDto } from './dto/create-expense-group.dto';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ExpenseGroupService {
  prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async getAllExpenseGroups() {
    return this.prisma.expenseGroup.findMany();
  }

  async createExpenseGroup(expenseGroupDto: CreateExpenseGroupDto) {
    return this.prisma.expenseGroup.create({
      data: {
        name: expenseGroupDto.name,
        color: expenseGroupDto.color,
      },
    });
  }
}
