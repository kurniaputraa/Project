import { Module } from '@nestjs/common';
import { JcService } from './jc.service';
import { JcController } from './jc.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [JcController],
  providers: [JcService, PrismaService],
})
export class JcModule {}
