import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Web3NotFoundComponent } from './web3-not-found/web3-not-found.component';
import { EthContentComponent } from './eth-content/eth-content.component';

import { Web3Guard } from './guards/web3.guard';
import { WEB3_PROVIDERS } from './services/web3.service';

const appRoutes: Routes = [
{ path: '', component: EthContentComponent, canActivate: [Web3Guard] },
{ path: 'eth-content', component: EthContentComponent, canActivate: [Web3Guard] },
{ path: 'web3-not-found', component: Web3NotFoundComponent }
//{ path: '', redirectTo: '/eth-content', pathMatch: 'full' }
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
	providers: [WEB3_PROVIDERS, Web3Guard],
	bootstrap: [AppComponent]
})
export class AppModule { }
