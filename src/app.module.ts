import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NotificationModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
