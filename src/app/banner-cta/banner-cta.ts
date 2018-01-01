import { Input, Component } from '@angular/core';
import { AppTranslatableComponent } from '../app.translatableComponent';
import { ContactFormComponent } from '../contact-form/contact-form';

import {TranslateService} from '@ngx-translate/core';
import {GoogleAnalyticsEventsService} from '../google-analytics-events.service';

@Component({
	selector: 'app-banner-cta',
	templateUrl: './banner-cta.html',
	styleUrls: ['./banner-cta.scss'],
})
export class BannerCtaComponent extends AppTranslatableComponent {
	private formHidden = true;
	@Input() private title: string;
	@Input() private catchPhrase: string;
	@Input() private cta: string;

	constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService, translate: TranslateService) {
		super(translate);
	}

	toggleForm() {
		this.formHidden = !this.formHidden;
		if (this.formHidden === false) {
			this.googleAnalyticsEventsService.emitEvent('CTA', 'contact', 'Opened contact form', 1);
		}
	}
}
