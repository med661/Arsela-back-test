import { PrismaService } from 'src/service/prisama.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/pages.dto';

@Controller('pages')
export class PagesController {
    constructor(
        private readonly pagesService: PagesService,
        private readonly prismaService: PrismaService
    ) { }

    @Post("create")
    async createPage(@Body() createPageDto: CreatePageDto): Promise<any> {
        return await this.pagesService.createPage(createPageDto);
    }

    @Get("getAll")
    async getAllPages(): Promise<any> {
        return await this.pagesService.getAllPages();
    }


}


