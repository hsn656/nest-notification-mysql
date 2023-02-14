import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [UsersModule],
})
export class NotificationModule {}
