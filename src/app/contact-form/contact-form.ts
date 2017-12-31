import { Component } from '@angular/core';
import { AppTranslatableComponent } from '../app.translatableComponent';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.html',
	styleUrls: ['./contact-form.scss']
})
export class ContactFormComponent extends AppTranslatableComponent {
	title: String = undefined;
	defaultText: String = 'Hey';
}
