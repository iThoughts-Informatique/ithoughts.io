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
import { PlainPageHeadComponent } from './plain-page-head/plain-page-head';

import { ReactiveFormsModule } from '@angular/forms';
import {GoogleAnalyticsEventsService} from './google-analytics-events.service';

import { HostingPageComponent, HostingPageMainComponent } from './pages/services/hosting/hosting';
import { WebPageComponent, WebPageMainComponent } from './pages/services/web/web';


import { routing } from './app.routes';

console.log('AppModule')

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		BannerCtaComponent,
		PlainPageHeadComponent,

		HostingPageComponent,
		HostingPageMainComponent,
		WebPageComponent,
		WebPageMainComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),
		routing,
	],
	providers: [
		GoogleAnalyticsEventsService,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
