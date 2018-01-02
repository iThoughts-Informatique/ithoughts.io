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
		const dom = document.querySelector('app-plain-page-head + *');
		const rect = dom.getBoundingClientRect();
		console.log({dom, rect});
		window.scrollTo({ left: window.pageXOffset, top: rect.top + window.pageYOffset - 50, behavior: 'smooth' });
	}
}
