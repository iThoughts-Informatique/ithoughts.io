import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form';
import { BannerCtaComponent } from './banner-cta/banner-cta';

import { HostingPageComponent } from './pages/hosting/hosting';


import { routing } from './app.routes';


@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		BannerCtaComponent,

		HostingPageComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),
		routing,
	],
	providers: [],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
