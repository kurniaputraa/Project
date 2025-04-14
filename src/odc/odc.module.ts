import { Module } from '@nestjs/common';
import { OdcService } from './odc.service';
import { OdcController } from './odc.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OdcController],
  providers: [OdcService, PrismaService],
})
export class OdcModule {}
