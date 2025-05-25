import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, Home } from './app.service';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [WalletModule],
  controllers: [AppController, Home],
  providers: [AppService, Home],
})
export class AppModule {}
