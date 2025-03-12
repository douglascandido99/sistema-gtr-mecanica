import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './shared/prisma/prisma.module';
import { ServiceModule } from './service/service.module';
import { AleatorioModule } from './aleatorio/aleatorio.module';

@Module({
  imports: [PrismaModule, ServiceModule, AleatorioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
