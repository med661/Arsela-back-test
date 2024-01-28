// src/prisma/prisma.service.ts

import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService implements OnModuleDestroy {
    private readonly prisma = new PrismaClient();

    constructor() { }

    get user() {
        return this.prisma.draggableItem;
    }
    get page() {
        return this.prisma.page;
    }

    get draggableItem() {
        return this.prisma.draggableItem;
    }
    // Add implementation here
    async onModuleDestroy() {
        await this.prisma.$disconnect();

    }
}
