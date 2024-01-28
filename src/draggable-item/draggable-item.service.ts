import { PrismaService } from './../service/prisama.service';
import { Injectable } from '@nestjs/common';
import { DraggableItemDto } from './dto/draggable-item.dto';

@Injectable()
export class DraggableItemService {

    constructor(
        private readonly prismaService: PrismaService,
    ) { }
    async createDraggableItem(draggableItemDto: DraggableItemDto) {
        try {
            return await this.prismaService.draggableItem.create({
                data: {
                    name: draggableItemDto.name,
                    position: draggableItemDto.position,
                    form: draggableItemDto.form,
                    color: draggableItemDto.color,
                    identifier: draggableItemDto.identifier, // Add the 'identifier' property
                    page: {
                        connect: {
                            id: draggableItemDto.pageId
                        }
                    }
                }
            })

        } catch (error) {
            console.log(error);
        }


    }

    async getByPageId(pageId: number) {
        try {
            console.log({ pageId });
            const parsedPageId = parseInt(pageId.toString());
            console.log({ parsedPageId });


            const items = await this.prismaService.draggableItem.findMany({
                where: {
                    pageId: parsedPageId,
                }
            });
            return items;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch data by pageId");
        }
    }


}
