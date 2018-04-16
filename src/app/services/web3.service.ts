import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

import * as Eth from "ethjs";
declare var web3: any;

@Injectable()
export class Web3Service {  
  constructor() {    
  }

  getEth(): Eth {
    let eth: Eth = null;
    try {
      if(typeof web3 !== 'undefined') {
        eth = new Eth(web3.currentProvider);
      }
    } catch(err){
      console.error(err);
    }
    return eth;  
  }

  isLocked(eth: Eth): Promise<boolean> {
    return eth.accounts()
    .then((result: string[]) => {
      if(result && result.length > 0){
        return false;
      }
      return true;
    })
    .catch((error) => {
      return true;
    });
  }
}

export const WEB3_PROVIDERS: Array<any> = [
{ provide: Web3Service, useClass: Web3Service }
];