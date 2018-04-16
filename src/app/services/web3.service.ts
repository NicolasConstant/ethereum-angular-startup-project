import { Injectable } from "@angular/core";

@Injectable()
export class Web3Service {  
  constructor() {
  }

  hasMetaMask(): boolean {
    return true;    
  }

  isMetaMaskLocked(): boolean {
    return false;    
  }

  hasWeb3Client(): boolean {
    return true;    
  }
}

export const WEB3_PROVIDERS: Array<any> = [
{ provide: Web3Service, useClass: Web3Service }
];