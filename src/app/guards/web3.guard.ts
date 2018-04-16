import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { of } from "rxjs/observable/of";
import { fromPromise } from 'rxjs/observable/fromPromise';

import { Web3Service } from "../services/web3.service";

@Injectable()
export class Web3Guard implements CanActivate {
  constructor(
    private readonly web3Service: Web3Service,
    private readonly router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {

    const ethClient = this.web3Service.getEth();
    if(!ethClient){
      this.router.navigate(["/web3-not-found"]);
      return false;
    }

    return this.web3Service.isLocked(ethClient)
     .then((isLocked) => {
     	if(isLocked){
     		this.router.navigate(["/web3-not-found"]);
     	}
     	return !isLocked;
     });
  }
}