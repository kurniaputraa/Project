import { Module } from '@nestjs/common';
import { OdcService } from './odc.service';
import { OdcController } from './odc.controller';

@Module({
  controllers: [OdcController],
  providers: [OdcService],
})
export class OdcModule {}
