import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacanciesModule } from './vacancies/vacancies.module';
import { ApplicationsModule } from './applications/applications.module';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [VacanciesModule, ApplicationsModule, AdminModule],
})
export class AppModule {}
