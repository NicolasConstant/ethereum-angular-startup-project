import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

import { Web3Service } from "../services/web3.service";

@Injectable()
export class Web3Guard implements CanActivate {
  constructor(
    private readonly web3Service: Web3Service,
    private readonly router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const hasMetamask = this.web3Service.hasMetaMask();
    const isMetamaskLocked = this.web3Service.isMetaMaskLocked();
    const hasOtherWeb3Client = this.web3Service.hasWeb3Client();

    if(hasMetamask && isMetamaskLocked){      
      this.router.navigate(["/web3-not-found"]);
      return false;      
    } else if(!hasOtherWeb3Client){
      this.router.navigate(["/web3-not-found"]);
      return false;
    }

    return true;
  }
}