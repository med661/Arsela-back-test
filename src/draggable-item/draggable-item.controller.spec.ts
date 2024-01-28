import { Test, TestingModule } from '@nestjs/testing';
import { DraggableItemController } from './draggable-item.controller';

describe('DraggableItemController', () => {
  let controller: DraggableItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DraggableItemController],
    }).compile();

    controller = module.get<DraggableItemController>(DraggableItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
