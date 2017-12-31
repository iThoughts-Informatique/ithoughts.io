// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostingPageComponent } from './pages/hosting/hosting';
// import { DogListComponent } from './dogs/dog-list.component';

// Route Configuration
export const routes: Routes = [
	//{ path: '', component: IndexPageComponent },
	{ path: 'services/hosting', component: HostingPageComponent },
	//{ path: 'services/web', component: WebPageComponent },
	//{ path: 'about', component: AboutPageComponent },
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
