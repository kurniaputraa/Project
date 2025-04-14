import { Module } from '@nestjs/common';
import { OdpService } from './odp.service';
import { OdpController } from './odp.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OdpController],
  providers: [OdpService, PrismaService],
})
export class OdpModule {}
