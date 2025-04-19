import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CityModule } from './city/city.module';
import { UserModule } from './user/user.module';
import { LineModule } from './line/line.module';
import { PoleModule } from './pole/pole.module';
import { OdcModule } from './odc/odc.module';
import { OdpModule } from './odp/odp.module';
import { SlackModule } from './slack/slack.module';
import { JcModule } from './jc/jc.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    OdpModule,
    OdcModule,
    JcModule,
    SlackModule,
    CityModule,
    LineModule,
    PoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
