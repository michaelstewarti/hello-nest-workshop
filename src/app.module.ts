import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseGroupModule } from './expense-group/expense-group.module';

@Module({
  imports: [ExpenseGroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
