import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, Home } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, Home],
  providers: [AppService, Home],
})
export class AppModule {}
