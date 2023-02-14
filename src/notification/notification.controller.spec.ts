import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from 'src/users/users.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

describe('NotificationController', () => {
  let controller: NotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [NotificationService],
      imports: [UsersModule],
    }).compile();

    controller = module.get<NotificationController>(NotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return notifications', () => {
    expect(controller.findAll()).toBe('This action returns all notification');
  });
});
