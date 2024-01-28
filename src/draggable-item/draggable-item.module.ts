import { Module } from '@nestjs/common';
import { DraggableItemService } from './draggable-item.service';
import { DraggableItemController } from './draggable-item.controller';
import { PrismaService } from 'src/service/prisama.service';

@Module({
  providers: [DraggableItemService, PrismaService],
  controllers: [DraggableItemController]
})
export class DraggableItemModule { }
