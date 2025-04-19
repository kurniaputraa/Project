import { Module } from '@nestjs/common';
import { JcService } from './jc.service';
import { JcController } from './jc.controller';

@Module({
  controllers: [JcController],
  providers: [JcService],
})
export class JcModule {}
