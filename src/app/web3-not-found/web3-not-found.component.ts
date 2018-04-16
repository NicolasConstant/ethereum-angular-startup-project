import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
	selector: 'app-web3-not-found',
	templateUrl: './web3-not-found.component.html',
	styleUrls: ['./web3-not-found.component.css']
})
export class Web3NotFoundComponent implements OnInit, OnDestroy {
	private sub: Subscription;
	isMetamaskLocked: boolean;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.sub = this.route
		.queryParams
		.subscribe(params => {
        // Defaults to 0 if no query param provided.
        const isLocked = +params['locked'] || 0;
        if(isLocked === 1){
			this.isMetamaskLocked = true;
        } else {
			this.isMetamaskLocked = false;
        }
    });
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
