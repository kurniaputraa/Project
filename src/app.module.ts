import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { OdpModule } from './odp/odp.module';
import { OdcModule } from './odc/odc.module';
import { JcModule } from './jc/jc.module';
import { SlackModule } from './slack/slack.module';

@Module({
  imports: [PrismaModule, UserModule, OdpModule, OdcModule, JcModule, SlackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
