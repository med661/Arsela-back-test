export class DraggableItemDto {
    id: number;
    name: string;
    identifier: string;
    position: any;
    form: string;
    color: string;
    parentId: number | null;
    children: DraggableItemDto[];
    pageId: number;
}
