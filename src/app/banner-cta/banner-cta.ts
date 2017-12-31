import { Component } from '@angular/core';
import { AppTranslatableComponent } from '../app.translatableComponent';
import { ContactFormComponent } from '../contact-form/contact-form';

@Component({
	selector: 'app-banner-cta',
	templateUrl: './banner-cta.html',
	styleUrls: ['./banner-cta.scss'],
})
export class BannerCtaComponent extends AppTranslatableComponent {
	formHidden = true;

	toggleForm() {
		this.formHidden = !this.formHidden;
	}
}
