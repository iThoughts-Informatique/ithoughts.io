import { Component, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-web-hosting',
	templateUrl: './hosting.component.html',
	styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements AfterContentInit {
	@ViewChild('caroussel', { read: ElementRef }) carousselEl: ElementRef;

	ngAfterContentInit() {
		const carousselEl = this.carousselEl.nativeElement;
		$(carousselEl).css({visibility: 'visible'});
	}
}
