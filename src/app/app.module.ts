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

import { OwlModule } from 'ng2-owl-carousel';

import { routing } from './app.routes';
import { AboutComponent } from './pages/about/about.component';
import { IndexPageComponent } from './pages/index/indexPage.component';
import { HostingComponent } from './pages/index/hosting/hosting.component';
import { DevComponent } from './pages/index/dev/dev.component';

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		BannerCtaComponent,
		PlainPageHeadComponent,

		AboutComponent,
		IndexPageComponent,
		HostingComponent,
		DevComponent,
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
