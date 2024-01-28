import { PrismaService } from 'src/service/prisama.service';
import { CreatePageDto } from './dto/pages.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PagesService {
    constructor(private prisma: PrismaService) { }

    async createPage(data: CreatePageDto) {
        await this.prisma.page.create({
            data: {
                name: data.name
            }
        }).then((res) => {
            console.log(res);

        }
        ).catch((err) => {
            console.log(err);
        }
        );
    }
    async getAllPages() {
        return await this.prisma.page.findMany();
    }
    async getPageById(id: number) {
        return await this.prisma.page.findUnique({
            where: {
                id: id
            }
        });
    }
    async updatePage(id: number, data: CreatePageDto) {
        return await this.prisma.page.update({
            where: {
                id: id
            },
            data: {
                name: data.name
            }
        });
    }

}
