import { Injectable, Inject } from '@nestjs/common';
import { Core } from '@moralisweb3/common-core';
import { EvmApi } from '@moralisweb3/evm-api';
@Injectable()
export class ConnectService {
    constructor(
        @Inject('MORALIS')
        private readonly moralis: { moraliscore: Core; evmApi: EvmApi }
    ) {}

    async connectWallet(){
        try{
                
        }
        catch (error) {
            console.error('Error connecting wallet:', error);
            throw new Error('Failed to connect wallet');
        }
    }
}
