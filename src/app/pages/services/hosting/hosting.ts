// ====== ./app/Cats/cat-list.component.ts ======

// Import component decorator
import { Component, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	templateUrl: './hosting.html',
})
// Component class
export class HostingPageComponent {}

@Component({
	selector: 'app-hosting-maincontent',
	templateUrl: './hosting-maincontent.html',
	styleUrls: ['./hosting.scss'],
})
// Component class
export class HostingPageMainComponent implements AfterContentInit {
	@ViewChild('caroussel', { read: ElementRef }) carousselEl: ElementRef;

	ngAfterContentInit() {
		const carousselEl = this.carousselEl.nativeElement;
		$(carousselEl).css({visibility: 'visible'});
	}
}

