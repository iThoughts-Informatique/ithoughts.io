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
import {MailService} from './mail.service';

import { HostingPageComponent, HostingPageMainComponent } from './pages/services/hosting/hosting';
import { WebPageComponent, WebPageMainComponent } from './pages/services/web/web';

import { OwlModule } from 'ng2-owl-carousel';

import { routing } from './app.routes';
import { AboutComponent } from './pages/about/about.component';

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
		AboutComponent,
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
		OwlModule,
	],
	providers: [
		GoogleAnalyticsEventsService,
		MailService,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
