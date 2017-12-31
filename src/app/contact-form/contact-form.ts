import { Input, Component } from '@angular/core';
import { AppTranslatableComponent } from '../app.translatableComponent';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.html',
	styleUrls: ['./contact-form.scss']
})
export class ContactFormComponent extends AppTranslatableComponent {
	@Input() title: String = undefined;
	@Input() defaultText: String;
}
