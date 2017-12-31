import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({})
export class AppTranslatableComponent {
	constructor(private translate: TranslateService) {
		this.translate.addLangs(['en', 'fr']);
		// Set the default language for translation strings, and the current language.
		this.translate.setDefaultLang('en');

		if (this.translate.getBrowserLang() !== undefined) {
			this.translate.use(this.translate.getBrowserLang());
		} else {
			this.translate.use('en'); // Set your language here
		}
	}
	changeLang(lang: string) {
		this.translate.use(lang);
	}
}
