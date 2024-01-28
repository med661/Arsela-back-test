import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DraggableItemService } from './draggable-item.service';
import { DraggableItemDto } from './dto/draggable-item.dto';

@Controller('draggable-item')
export class DraggableItemController {
    constructor(
        private readonly draggableItemService: DraggableItemService,
    ) { }
    @Post("create")
    async createPage(@Body() draggableItemDto: DraggableItemDto): Promise<any> {
        return await this.draggableItemService.createDraggableItem(draggableItemDto);
    }
    @Get("getByPageId/:pageId")
    async getByPageId(@Param('pageId') pageId: number): Promise<any> {
        return await this.draggableItemService.getByPageId(pageId);
    }


}
