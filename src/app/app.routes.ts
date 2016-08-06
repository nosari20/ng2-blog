import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent} from "./content/home/";
import {DiscoverComponent} from "./content/discover/";
import {TutorialComponent} from "./content/tutorial/";
import {OverviewComponent} from "./content/overview/";
import {ContactComponent} from "./content/contact/";

const routes: RouterConfig = [
   {path: '', component: HomeComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'tutorial', component: TutorialComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'contact', component: ContactComponent},
  {path: '*', component: HomeComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];