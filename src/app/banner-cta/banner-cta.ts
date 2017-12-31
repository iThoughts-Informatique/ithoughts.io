import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppTranslatableComponent } from '../app.translatableComponent';
import { ContactFormComponent } from '../contact-form/contact-form';

import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-banner-cta',
	templateUrl: './banner-cta.html',
	styleUrls: ['./banner-cta.scss'],
})
export class BannerCtaComponent extends AppTranslatableComponent implements OnInit {
	private formHidden = true;
	private ctaObserver: Observable<string>;
	@Input() private title: string;
	@Input() private catchPhrase: string;
	@Input() private cta: string;

	ngOnInit() {
		if (!this.cta) {
			this.ctaObserver = this.translate.get('bannerCta.cta');
			this.ctaObserver.subscribe(text => this.cta = text);
		}
	}

	toggleForm() {
		this.formHidden = !this.formHidden;
	}
}
