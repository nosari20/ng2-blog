import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {appRouterProviders} from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
  appRouterProviders,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  HTTP_PROVIDERS
]);

