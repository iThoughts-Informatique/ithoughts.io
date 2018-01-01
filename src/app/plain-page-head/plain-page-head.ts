import { Input, Component } from '@angular/core';
import { AppTranslatableComponent } from '../app.translatableComponent';

@Component({
	selector: 'app-plain-page-head',
	templateUrl: './plain-page-head.html',
	styleUrls: ['./plain-page-head.scss']
})
export class PlainPageHeadComponent extends AppTranslatableComponent {
	@Input() title: string;
	@Input() subtitle: string;
	
	scrollOutPage() {
		console.log(this);
		var dom = document.querySelector('app-plain-page-head + *');
		dom.scrollIntoView({behavior: 'smooth'});
	}
}
