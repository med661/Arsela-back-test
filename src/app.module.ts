import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DraggableItemModule } from './draggable-item/draggable-item.module';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [DraggableItemModule, PagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
