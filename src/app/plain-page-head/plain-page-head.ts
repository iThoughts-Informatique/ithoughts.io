import { Input, Component } from '@angular/core';

@Component({
	selector: 'app-plain-page-head',
	templateUrl: './plain-page-head.html',
	styleUrls: ['./plain-page-head.scss']
})
export class PlainPageHeadComponent {
	@Input() title: string;
	@Input() subtitle: string;

	scrollOutPage() {
		const dom = document.querySelector('app-plain-page-head + *');
		const rect = dom.getBoundingClientRect();
		window.scrollTo({ left: window.pageXOffset, top: rect.top + window.pageYOffset - 50, behavior: 'smooth' });
	}
}
