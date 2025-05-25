import { Module } from '@nestjs/common';
import { ConnectService } from './services/connect/connect.service';
import { Core } from '@moralisweb3/common-core';
import { EvmApi } from '@moralisweb3/evm-api';

@Module({
  providers: [ConnectService,
    {
      provide: 'MORALIS',
      useFactory: async () => {
        const moraliscore = Core.create();
        await moraliscore.start({
          apiKey: process.env.MORALIS_API_KEY,
        });
        const evmApi = EvmApi.create(moraliscore);
        return { moraliscore, evmApi };
      }
    }
  ],
  exports: [ConnectService]
})
export class WalletModule {
}



