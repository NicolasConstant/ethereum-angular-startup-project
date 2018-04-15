import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Web3NotFoundComponent } from './web3-not-found/web3-not-found.component';
import { EthContentComponent } from './eth-content/eth-content.component';

const appRoutes: Routes = [
{ path: 'eth-content', component: EthContentComponent },
{ path: 'web3-not-found',      component: Web3NotFoundComponent },
{ path: '',
redirectTo: '/eth-content',
pathMatch: 'full'
},
];

@NgModule({
	declarations: [
	AppComponent,
	Web3NotFoundComponent,
	EthContentComponent
	],
	imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
