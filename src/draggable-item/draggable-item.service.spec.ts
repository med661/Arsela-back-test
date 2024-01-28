import { Test, TestingModule } from '@nestjs/testing';
import { DraggableItemService } from './draggable-item.service';

describe('DraggableItemService', () => {
  let service: DraggableItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DraggableItemService],
    }).compile();

    service = module.get<DraggableItemService>(DraggableItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
